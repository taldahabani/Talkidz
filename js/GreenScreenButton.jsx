import React, { useState, useEffect, useRef } from 'react';

const GreenScreenButton = () => {
  const [isActive, setIsActive] = useState(false);
  const [tolerance, setTolerance] = useState(100);
  const [greenWeight, setGreenWeight] = useState(18);
  const canvasRef = useRef(null);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    if (!isActive) {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      return;
    }

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    const idleVideo = document.getElementById('idleVideo');
    const speakingVideo = document.getElementById('speakingVideo');

    const processVideo = () => {
      // Get the currently active video
      const video = idleVideo.classList.contains('active') ? idleVideo : speakingVideo;
      if (!video || video.paused || !video.videoWidth) {
        animationFrameRef.current = requestAnimationFrame(processVideo);
        return;
      }

      // Set canvas size to match video
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      // Draw the video frame
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      
      // Get the image data
      const frame = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = frame.data;

      // Process each pixel
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];

        const greenDominance = g / ((r + b) / 2);
        if (greenDominance > greenWeight / 10) {
          const brightness = (r + g + b) / 3;
          if (brightness > 30 && brightness < 225) {
            data[i + 3] = 0; // Make green pixels transparent
          }
        }
      }

      ctx.putImageData(frame, 0, 0);
      animationFrameRef.current = requestAnimationFrame(processVideo);
    };

    animationFrameRef.current = requestAnimationFrame(processVideo);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isActive, tolerance, greenWeight]);

  const toggleGreenScreen = () => {
    setIsActive(!isActive);
    const canvas = canvasRef.current;
    const wrapper = document.querySelector('.video-wrapper');
    
    if (!isActive) {
      canvas.style.display = 'block';
      wrapper.style.background = 'url("/background.jpg") center/cover';
    } else {
      canvas.style.display = 'none';
      wrapper.style.background = '';
    }
  };

  return (
    <>
      <button 
        onClick={toggleGreenScreen}
        className={`main-button ${isActive ? 'active' : ''}`}
        style={{
          background: 'linear-gradient(45deg, #6C5CE7, #8E44AD)',
          marginRight: '10px'
        }}
      >
        {isActive ? 'Disable' : 'Enable'} Green Screen
      </button>
      <canvas
        ref={canvasRef}
        style={{
          display: 'none',
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 1
        }}
      />
    </>
  );
};

export default GreenScreenButton;
