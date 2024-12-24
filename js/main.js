// js/main.js

import { languages } from './languages.js';
import { characters } from './characters.js';
import { Conversation } from 'https://cdn.skypack.dev/@11labs/client';

let currentCharacter = characters[0];
let currentLanguage = 'en-US';
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
const languageButton = document.getElementById('languageButton');
const languageDropdown = document.getElementById('languageDropdown');
const characterSelector = document.getElementById('characterSelect');
const characterName = document.querySelector('.character-name');

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    const savedCharacterId = localStorage.getItem('selectedCharacter');

    if (savedLanguage && languages.some(lang => lang.code === savedLanguage)) {
        currentLanguage = savedLanguage;
    }

    if (savedCharacterId && characters.some(char => char.id === savedCharacterId)) {
        currentCharacter = characters.find(char => char.id === savedCharacterId);
        characterSelector.value = savedCharacterId;
    }

    initializeCharacter();
    populateLanguageDropdown();
    populateCharacterSelector();
    updateLanguageButton();

    const currentLangObj = languages.find(lang => lang.code === currentLanguage);
    if (currentLangObj) {
        languageButton.innerHTML = `${currentLangObj.flag}`;
    }
});

// Function to initialize character media and agent ID
function initializeCharacter() {
    characterName.textContent = currentCharacter.name;
    backgroundImage.style.backgroundImage = `url('${currentCharacter.assets.image}')`;
    idleVideo.querySelector('source').src = currentCharacter.assets.idleVideo;
    speakingVideo.querySelector('source').src = currentCharacter.assets.speakingVideo;

    // Reload videos with new sources
    idleVideo.load();
    speakingVideo.load();
    preloadVideos();
}

// Function to preload videos
function preloadVideos() {
    videosLoaded = { idle: false, speaking: false };

    idleVideo.addEventListener('loadeddata', () => {
        videosLoaded.idle = true;
        backgroundImage.style.opacity = '0';
        idleVideo.classList.add('active');
        idleVideo.play().catch(console.error);
    }, { once: true });

    speakingVideo.addEventListener('loadeddata', () => {
        videosLoaded.speaking = true;
    }, { once: true });
}

// Function to update status indicator
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

// Function to update background based on mode
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

// Function to trigger confetti
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

// Function to start conversation
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

        const agentId = currentCharacter.agentIds[currentLanguage] || currentCharacter.agentIds['en-US'];

        conversation = await Conversation.startSession({
            agentId: agentId,
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
        startButton.textContent = 'Start Conversation';
    }
}

// Function to end conversation
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
            startButton.textContent = 'Start Conversation';
        }
    }
}

// Event listener for start button
startButton.addEventListener('click', async () => {
    if (conversation) {
        await endConversation();
    } else {
        await startConversation();
    }
});

// Function to share character
window.shareCharacter = () => {
    if (navigator.share) {
        navigator.share({
            title: `Chat with ${currentCharacter.name} on Talkidz`,
            text: `Come chat with ${currentCharacter.name}, your new AI friend!`,
            url: window.location.href
        }).catch(console.error);
    } else {
        const shareText = `Come chat with ${currentCharacter.name}, your new AI friend! ${window.location.href}`;
        navigator.clipboard.writeText(shareText).then(() => {
            alert('Link copied to clipboard!');
        }).catch(console.error);
    }
};

// Function to share app
window.shareApp = () => {
    if (navigator.share) {
        navigator.share({
            title: 'Talkidz - AI Friends to Chat With',
            text: 'Check out Talkidz, where you can chat with AI friends!',
            url: window.location.href
        }).catch(console.error);
    }
};

// Function to populate language dropdown
function populateLanguageDropdown() {
    languageDropdown.innerHTML = '';
    languages.forEach(lang => {
        const option = document.createElement('div');
        option.classList.add('language-option');
        option.setAttribute('role', 'menuitem');
        option.setAttribute('tabindex', '0');
        option.onclick = () => selectLanguage(lang.code);
        option.innerHTML = `
            ${lang.flag} <span>${lang.name}</span>
        `;
        languageDropdown.appendChild(option);
    });
}

// Function to populate character selector
function populateCharacterSelector() {
    characters.forEach(char => {
        const option = document.createElement('option');
        option.value = char.id;
        option.textContent = char.name;
        characterSelector.appendChild(option);
    });
}

// Event listener for language button
languageButton.addEventListener('click', (e) => {
    e.stopPropagation();
    const isActive = languageDropdown.classList.toggle('active');
    languageButton.setAttribute('aria-expanded', isActive);
});

// Event listener for character selector
characterSelector.addEventListener('change', (e) => {
    const selectedId = e.target.value;
    const selectedCharacter = characters.find(char => char.id === selectedId);
    if (selectedCharacter) {
        currentCharacter = selectedCharacter;
        localStorage.setItem('selectedCharacter', selectedId);
        initializeCharacter();
        if (conversation) {
            endConversation();
        }
    }
});

// Close language dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (!languageButton.contains(e.target) && !languageDropdown.contains(e.target)) {
        languageDropdown.classList.remove('active');
        languageButton.setAttribute('aria-expanded', 'false');
    }
});

// Function to select language
function selectLanguage(langCode) {
    const langExists = languages.some(lang => lang.code === langCode);
    if (!langExists) {
        console.warn(`Language code ${langCode} not found.`);
        return;
    }

    currentLanguage = langCode;
    localStorage.setItem('preferredLanguage', langCode);
    languageDropdown.classList.remove('active');
    languageButton.setAttribute('aria-expanded', 'false');

    const selectedLang = languages.find(lang => lang.code === langCode);
    if (selectedLang) {
        languageButton.innerHTML = `${selectedLang.flag}`;
    }

    if (conversation) {
        endConversation().then(() => {
            startConversation();
        });
    }
}

// Function to update language button on load
function updateLanguageButton() {
    const currentLangObj = languages.find(lang => lang.code === currentLanguage);
    if (currentLangObj) {
        languageButton.innerHTML = `${currentLangObj.flag}`;
    }
}
