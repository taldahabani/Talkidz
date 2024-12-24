// main.js

// Share Functionality
function shareApp() {
    if (navigator.share) {
        navigator.share({
            title: 'Talkidz - AI Friends to Chat With',
            text: 'Check out Talkidz, where you can chat with AI friends!',
            url: window.location.href
        })
        .catch(console.error);
    } else {
        const shareText = 'Check out Talkidz, where you can chat with AI friends! ' + window.location.href;
        navigator.clipboard.writeText(shareText).then(() => {
            alert('Link copied to clipboard!');
        }).catch(console.error);
    }
}

// Attach shareApp to window for global access
window.shareApp = shareApp;

// Category Pill Selection
document.addEventListener('DOMContentLoaded', () => {
    // Handle category pill selection
    const pills = document.querySelectorAll('.category-pill');
    pills.forEach(pill => {
        pill.addEventListener('click', () => {
            pills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');

            // Add functionality to filter characters based on category
            const category = pill.textContent.trim();
            filterCharacters(category);
        });
    });
});

// Function to filter characters based on category
function filterCharacters(category) {
    const characterCards = document.querySelectorAll('.character-card');
    characterCards.forEach(card => {
        const role = card.querySelector('.character-role').textContent.trim();
        const isPopular = card.querySelector('.popular-badge') !== null;
        const isNew = card.querySelector('.new-badge') !== null;

        if (category === 'All') {
            card.style.display = 'block';
        } else if (category === 'Popular' && isPopular) {
            card.style.display = 'block';
        } else if (category === 'New' && isNew) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Particle Creation for Background
function createParticles() {
    const particlesContainer = document.querySelector('.particles');
    if (particlesContainer) {
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.className = 'splash-particle';
            particle.style.left = Math.random() * 100 + 'vw';
            particle.style.top = Math.random() * 100 + 'vh';
            particle.style.animationDelay = (Math.random() * 2) + 's';
            
            // Add random size variation
            const size = Math.random() * 3 + 3; // Sizes between 3-6px
            particle.style.width = size + 'px';
            particle.style.height = size + 'px';
            
            particlesContainer.appendChild(particle);
        }
    }

    const background = document.querySelector('.particle-background');
    if (background) {
        const particleCount = 50;

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            // Random starting position
            particle.style.left = Math.random() * 100 + 'vw';
            particle.style.top = Math.random() * 100 + 'vh';
            
            // Random size
            const size = Math.random() * 4 + 2;
            particle.style.width = size + 'px';
            particle.style.height = size + 'px';
            
            // Random animation duration and delay
            particle.style.animationDuration = (Math.random() * 20 + 10) + 's';
            particle.style.animationDelay = (Math.random() * 5) + 's';
            
            background.appendChild(particle);
        }
    }
}

// Initialize particles when the page loads
document.addEventListener('DOMContentLoaded', createParticles);

// Confetti Trigger Function
function triggerConfetti() {
    if (typeof confetti === 'undefined') {
        console.warn('Confetti library is not loaded.');
        return;
    }
    const options = { origin: { y: 0.7 } };
    const count = 200;
    
    [
        { spread: 26, startVelocity: 55, particleRatio: 0.25 },
        { spread: 60, particleRatio: 0.2 },
        { spread: 100, decay: 0.91, scalar: 0.8, particleRatio: 0.35 },
        { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2, particleRatio: 0.1 },
        { spread: 120, startVelocity: 45, particleRatio: 0.1 }
    ].forEach(opts => {
        confetti({
            ...options,
            ...opts,
            particleCount: Math.floor(count * opts.particleRatio)
        });
    });
}

// Chat Page Functionality
if (document.body.classList.contains('chat-page')) {
    import('https://cdn.skypack.dev/@11labs/client').then(module => {
        const { Conversation } = module;

        let conversation = null;
        let videosLoaded = { idle: false, speaking: false };
        const CONVERSATION_TIME = 180;

        const backgroundImage = document.querySelector('.background.image');
        const idleVideo = document.getElementById('idleVideo');
        const speakingVideo = document.getElementById('speakingVideo');
        const startButton = document.getElementById('startButton');
        const statusDot = document.querySelector('.status-dot');
        const statusText = document.querySelector('.status-text');
        const confettiCanvas = document.getElementById('confetti-canvas');

        // Initialize Confetti Canvas
        if (confettiCanvas) {
            confetti.create(confettiCanvas, { resize: true });
        }

        const updateStatus = (mode) => {
            statusDot.classList.remove('listening');
            switch(mode) {
                case 'listening':
                    statusText.textContent = 'Listening...';
                    statusDot.classList.add('listening');
                    statusDot.style.background = '#22c55e';
                    break;
                case 'speaking':
                    statusText.textContent = 'Speaking...';
                    statusDot.style.background = '#3b82f6';
                    break;
                default:
                    statusText.textContent = 'Ready to chat';
                    statusDot.style.background = '#22c55e';
            }
        };

        const preloadVideos = () => {
            idleVideo.load();
            idleVideo.addEventListener('loadeddata', () => {
                videosLoaded.idle = true;
                backgroundImage.style.opacity = '0';
                idleVideo.classList.add('active');
                idleVideo.play().catch(console.error);
            });

            speakingVideo.load();
            speakingVideo.addEventListener('loadeddata', () => {
                videosLoaded.speaking = true;
            });
        };

        const updateBackground = (mode) => {
            if (mode === 'speaking' && videosLoaded.speaking) {
                idleVideo.classList.remove('active');
                speakingVideo.classList.add('active');
                speakingVideo.play().catch(console.error);
            } else if (videosLoaded.idle) {
                speakingVideo.classList.remove('active');
                idleVideo.classList.add('active');
                idleVideo.play().catch(console.error);
            } else {
                backgroundImage.style.opacity = '1';
                [idleVideo, speakingVideo].forEach(video => video.classList.remove('active'));
            }
            updateStatus(mode);
        };

        const startConversation = async () => {
            try {
                await navigator.mediaDevices.getUserMedia({ audio: true });
                triggerConfetti();
                startButton.classList.add('active');
                startButton.innerHTML = `
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                `;

                conversation = await Conversation.startSession({
                    agentId: 'UWxUKTTWxyHwoEfDDic2', // Replace with your actual agent ID
                    onModeChange: (mode) => updateBackground(mode.mode),
                    onConnect: () => {
                        updateBackground('listening');
                    },
                    onDisconnect: () => {
                        updateBackground('idle');
                        startButton.classList.remove('active');
                        startButton.textContent = 'Start Conversation';
                    },
                    onError: (error) => {
                        console.error('Conversation error:', error);
                        updateBackground('idle');
                        startButton.classList.remove('active');
                        startButton.textContent = 'Start Conversation';
                    }
                });

            } catch (error) {
                console.error('Error starting conversation:', error);
                updateBackground('idle');
                startButton.classList.remove('active');
                startButton.textContent = 'Start Conversation';
            }
        };

        const endConversation = async () => {
            if (conversation) {
                try {
                    await conversation.endSession();
                } catch (error) {
                    console.error('Error ending conversation:', error);
                } finally {
                    conversation = null;
                    updateBackground('idle');
                    startButton.classList.remove('active');
                    startButton.textContent = 'Start Conversation';
                }
            }
        };

        startButton.addEventListener('click', async () => {
            if (conversation) {
                await endConversation();
            } else {
                await startConversation();
            }
        });

        window.shareCharacter = () => {
            if (navigator.share) {
                navigator.share({
                    title: 'Chat with Eva on Talkidz',
                    text: 'Come chat with Eva, your new AI friend!',
                    url: window.location.href
                }).catch(console.error);
            } else {
                const shareText = 'Come chat with Eva, your new AI friend! ' + window.location.href;
                navigator.clipboard.writeText(shareText).then(() => {
                    alert('Link copied to clipboard!');
                }).catch(console.error);
            }
        };

        // Initialize with idle state
        preloadVideos();
        updateBackground('idle');
    }).catch(error => {
        console.error('Failed to load Conversation module:', error);
    });
}
