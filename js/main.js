// main.js

import { Conversation } from 'https://cdn.skypack.dev/@11labs/client';

// Initialize variables
let conversation = null;
let videosLoaded = { idle: false, speaking: false };
const CONVERSATION_TIME = 180;

// DOM Elements
const backgroundImage = document.querySelector('.background.image');
const idleVideo = document.getElementById('idleVideo');
const speakingVideo = document.getElementById('speakingVideo');
const startButton = document.getElementById('startButton');
const statusDot = document.querySelector('.status-dot');
const statusText = document.querySelector('.status-text');
const categoryPills = document.querySelectorAll('.category-pill');

// Share Functions
function shareApp() {
    if (navigator.share) {
        navigator.share({
            title: 'Talkidz - AI Friends to Chat With',
            text: 'Check out Talkidz, where you can chat with AI friends!',
            url: window.location.href
        })
        .catch((error) => console.error('Error sharing:', error));
    } else {
        // Fallback for unsupported browsers
        const shareText = 'Check out Talkidz, where you can chat with AI friends! ' + window.location.href;
        navigator.clipboard.writeText(shareText)
            .then(() => alert('Link copied to clipboard!'))
            .catch((error) => console.error('Error copying text:', error));
    }
}

function shareCharacter() {
    if (navigator.share) {
        navigator.share({
            title: 'Chat with Your Favorite AI Character on Talkidz',
            text: 'Come chat with your favorite AI character on Talkidz!',
            url: window.location.href
        })
        .catch((error) => console.error('Error sharing:', error));
    } else {
        // Fallback for unsupported browsers
        const shareText = 'Come chat with your favorite AI character on Talkidz! ' + window.location.href;
        navigator.clipboard.writeText(shareText)
            .then(() => alert('Link copied to clipboard!'))
            .catch((error) => console.error('Error copying text:', error));
    }
}

// Initialize Share Functions
window.shareApp = shareApp;
window.shareCharacter = shareCharacter;

// Update Status Indicator
function updateStatus(mode) {
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
}

// Preload Videos
function preloadVideos() {
    idleVideo.load();
    idleVideo.addEventListener('loadeddata', () => {
        videosLoaded.idle = true;
        backgroundImage.style.opacity = '0';
        idleVideo.classList.add('active');
        idleVideo.play().catch(console.error);
    }, { once: true });

    speakingVideo.load();
    speakingVideo.addEventListener('loadeddata', () => {
        videosLoaded.speaking = true;
    }, { once: true });
}

// Update Background Based on Mode
function updateBackground(mode) {
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
}

// Trigger Confetti Animation
function triggerConfetti() {
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

// Start Conversation
async function startConversation() {
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
                startButton.innerHTML = 'Start Conversation';
            },
            onError: (error) => {
                console.error('Conversation error:', error);
                updateBackground('idle');
                startButton.classList.remove('active');
                startButton.innerHTML = 'Start Conversation';
            }
        });

    } catch (error) {
        console.error('Error starting conversation:', error);
        updateBackground('idle');
        startButton.classList.remove('active');
        startButton.innerHTML = 'Start Conversation';
    }
}

// End Conversation
async function endConversation() {
    if (conversation) {
        try {
            await conversation.endSession();
        } catch (error) {
            console.error('Error ending conversation:', error);
        } finally {
            conversation = null;
            updateBackground('idle');
            startButton.classList.remove('active');
            startButton.innerHTML = 'Start Conversation';
        }
    }
}

// Event Listener for Start Button
startButton.addEventListener('click', async () => {
    if (conversation) {
        await endConversation();
    } else {
        await startConversation();
    }
});

// Handle Category Pill Selection and Filtering
categoryPills.forEach(pill => {
    pill.addEventListener('click', () => {
        // Remove active class from all pills
        categoryPills.forEach(p => p.classList.remove('active'));
        // Add active class to the clicked pill
        pill.classList.add('active');
        // Get the selected category
        const selectedCategory = pill.textContent.trim();
        // Filter characters based on the selected category
        filterCharacters(selectedCategory);
    });
});

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

// Particle Creation for Loader
function createParticles() {
    const particlesContainer = document.querySelector('.particles');
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

// Initialize Particles and Preload Videos on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    preloadVideos();
    updateBackground('idle');
});
