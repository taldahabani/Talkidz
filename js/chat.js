import { Conversation } from 'https://cdn.skypack.dev/@11labs/client';

const characters = {
    jonny: {
        id: 'jonny',
        name: 'Jonny',
        agentId: 'xiC8L3SOeHwYyCLLnYxF',
        assets: {
            idle: '/characters/jonny/assets/jonny-idle.mp4',
            talking: '/characters/jonny/assets/jonny-talk.mp4',
            preview: '/characters/jonny/assets/jonny.jpg',
            icon: '/characters/jonny/assets/jonny-icon.jpg'
        }
    },
    cupcake: {
        id: 'cupcake',
        name: 'Cupcake',
        agentId: 'xiC8L3SOeHwYyCLLnYxF',
        assets: {
            idle: '/characters/jonny/assets/cupcake-blinking.mp4',
            talking: '/characters/jonny/assets/jonny-talk.mp4',
            preview: '/characters/jonny/assets/cupcake.png',
            icon: '/characters/jonny/assets/cupcake.jpg'
        }
    },
    eva: {
        id: 'eva',
        name: 'Eva',
        agentId: 'UWxUKTTWxyHwoEfDDic2',
        assets: {
            idle: '/characters/robo/assets/eva-idle.mp4',
            talking: '/characters/robo/assets/eva-talking.mp4',
            preview: '/characters/robo/assets/eva.jpg',
            icon: '/characters/robo/assets/eva-icon.jpg'
        }
    }
};

class ChatController {
    constructor(characterId) {
        this.character = characters[characterId];
        this.conversation = null;
        this.videosLoaded = { idle: false, speaking: false };
        this.setupElements();
        this.setupCharacter();
        this.setupEventListeners();
        this.preloadVideos();
        this.updateBackground('idle');
        this.setupCharacterMenu();
    }

    setupElements() {
        this.backgroundImage = document.querySelector('.background.image');
        this.idleVideo = document.getElementById('idleVideo');
        this.speakingVideo = document.getElementById('speakingVideo');
        this.startButton = document.getElementById('startButton');
        this.statusDot = document.querySelector('.status-dot');
        this.statusText = document.querySelector('.status-text');
        this.characterName = document.querySelector('.character-name');
        this.characterMenu = document.querySelector('.character-menu');
        this.characterMenuContent = document.querySelector('.character-menu-content');
        this.characterSelectButton = document.querySelector('.character-select-button');
    }

    setupCharacter() {
        document.title = `${this.character.name} - Talkidz`;
        this.characterName.textContent = this.character.name;
        this.backgroundImage.style.background = `url('${this.character.assets.preview}') center/contain no-repeat`;
        this.idleVideo.src = this.character.assets.idle;
        this.speakingVideo.src = this.character.assets.talking;
    }

    setupCharacterMenu() {
        Object.values(characters).forEach(char => {
            const option = document.createElement('div');
            option.className = `character-option ${char.id === this.character.id ? 'active' : ''}`;
            option.innerHTML = `<img src="${char.assets.icon}" alt="${char.name}">`;
            option.addEventListener('click', () => this.changeCharacter(char.id));
            this.characterMenuContent.appendChild(option);
        });

        this.characterSelectButton.addEventListener('click', (e) => {
            e.stopPropagation();
            this.characterMenu.classList.toggle('active');
        });

        document.addEventListener('click', (e) => {
            if (!this.characterMenu.contains(e.target)) {
                this.characterMenu.classList.remove('active');
            }
        });
    }

    async changeCharacter(characterId) {
        if (this.conversation) {
            await this.endConversation();
        }

        const url = new URL(window.location);
        url.searchParams.set('character', characterId);
        window.history.pushState({}, '', url);

        this.character = characters[characterId];
        this.setupCharacter();
        this.preloadVideos();
        this.updateBackground('idle');

        document.querySelectorAll('.character-option').forEach(option => {
            option.classList.toggle('active', option.querySelector('img').src.includes(characterId));
        });

        this.characterMenu.classList.remove('active');
    }

    updateStatus(mode) {
        this.statusDot.classList.remove('listening');
        switch(mode) {
            case 'listening':
                this.statusText.textContent = 'Listening...';
                this.statusDot.classList.add('listening');
                this.statusDot.style.background = '#22c55e';
                break;
            case 'speaking':
                this.statusText.textContent = 'Speaking...';
                this.statusDot.style.background = '#3b82f6';
                break;
            default:
                this.statusText.textContent = 'Ready to chat';
                this.statusDot.style.background = '#22c55e';
        }
    }

    preloadVideos() {
        this.idleVideo.load();
        this.idleVideo.addEventListener('loadeddata', () => {
            this.videosLoaded.idle = true;
            this.backgroundImage.style.opacity = '0';
            this.idleVideo.classList.add('active');
            this.idleVideo.play().catch(console.error);
        });

        this.speakingVideo.load();
        this.speakingVideo.addEventListener('loadeddata', () => {
            this.videosLoaded.speaking = true;
        });
    }

    updateBackground(mode) {
        if (mode === 'speaking' && this.videosLoaded.speaking) {
            this.idleVideo.classList.remove('active');
            this.speakingVideo.classList.add('active');
            this.speakingVideo.play().catch(console.error);
        } else if (this.videosLoaded.idle) {
            this.speakingVideo.classList.remove('active');
            this.idleVideo.classList.add('active');
            this.idleVideo.play().catch(console.error);
        } else {
            this.backgroundImage.style.opacity = '1';
            [this.idleVideo, this.speakingVideo].forEach(video => video.classList.remove('active'));
        }
        this.updateStatus(mode);
    }

    triggerConfetti() {
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

    async startConversation() {
        try {
            await navigator.mediaDevices.getUserMedia({ audio: true });
            this.triggerConfetti();
            this.startButton.classList.add('active');
            this.startButton.innerHTML = `
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            `;

            this.conversation = await Conversation.startSession({
                agentId: this.character.agentId,
                onModeChange: (mode) => this.updateBackground(mode.mode),
                onConnect: () => this.updateBackground('listening'),
                onDisconnect: () => {
                    this.updateBackground('idle');
                    this.startButton.classList.remove('active');
                    this.startButton.textContent = 'Start Conversation';
                },
                onError: (error) => {
                    console.error('Conversation error:', error);
                    this.updateBackground('idle');
                    this.startButton.classList.remove('active');
                    this.startButton.textContent = 'Start Conversation';
                }
            });
        } catch (error) {
            console.error('Error starting conversation:', error);
            this.updateBackground('idle');
            this.startButton.classList.remove('active');
            this.startButton.textContent = 'Start Conversation';
        }
    }

    async endConversation() {
        if (this.conversation) {
            try {
                await this.conversation.endSession();
            } catch (error) {
                console.error('Error ending conversation:', error);
            } finally {
                this.conversation = null;
                this.updateBackground('idle');
                this.startButton.classList.remove('active');
                this.startButton.textContent = 'Start Conversation';
            }
        }
    }

    setupEventListeners() {
        this.startButton.addEventListener('click', async () => {
            if (this.conversation) {
                await this.endConversation();
            } else {
                await this.startConversation();
            }
        });
    }
}

window.shareCharacter = () => {
    if (navigator.share) {
        navigator.share({
            title: `Chat with ${chat.character.name} on Talkidz`,
            text: `Come chat with ${chat.character.name}, your new AI friend!`,
            url: window.location.href
        }).catch(console.error);
    }
};

const urlParams = new URLSearchParams(window.location.search);
const characterId = urlParams.get('character') || 'jonny';
const chat = new ChatController(characterId);
