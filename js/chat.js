import { Conversation } from 'https://cdn.skypack.dev/@11labs/client';

// Languages Array
export const languages = [
    { code: 'en', flag: '🇺🇸', name: 'English (USA)' },
    { code: 'en', flag: '🇬🇧', name: 'English (UK)' },
    { code: 'ja', flag: '🇯🇵', name: 'Japanese' },
    { code: 'zh', flag: '🇨🇳', name: 'Chinese' },
    { code: 'de', flag: '🇩🇪', name: 'German' },
    { code: 'hi', flag: '🇮🇳', name: 'Hindi' },
    { code: 'fr', flag: '🇫🇷', name: 'French (France)' },
    { code: 'fr', flag: '🇨🇦', name: 'French (Canada)' },
    { code: 'ko', flag: '🇰🇷', name: 'Korean' },
    { code: 'pt', flag: '🇧🇷', name: 'Portuguese (Brazil)' },
    { code: 'pt', flag: '🇵🇹', name: 'Portuguese (Portugal)' },
    { code: 'it', flag: '🇮🇹', name: 'Italian' },
    { code: 'es', flag: '🇪🇸', name: 'Spanish (Spain)' },
    { code: 'es', flag: '🇲🇽', name: 'Spanish (Mexico)' },
    { code: 'id', flag: '🇮🇩', name: 'Indonesian' },
    { code: 'nl', flag: '🇳🇱', name: 'Dutch' },
    { code: 'tr', flag: '🇹🇷', name: 'Turkish' },
    { code: 'fil', flag: '🇵🇭', name: 'Filipino' },
    { code: 'pl', flag: '🇵🇱', name: 'Polish' },
    { code: 'sv', flag: '🇸🇪', name: 'Swedish' },
    { code: 'bg', flag: '🇧🇬', name: 'Bulgarian' },
    { code: 'ro', flag: '🇷🇴', name: 'Romanian' },
    { code: 'ar', flag: '🇸🇦', name: 'Arabic (Saudi Arabia)' },
    { code: 'ar', flag: '🇦🇪', name: 'Arabic (UAE)' },
    { code: 'cs', flag: '🇨🇿', name: 'Czech' },
    { code: 'el', flag: '🇬🇷', name: 'Greek' },
    { code: 'fi', flag: '🇫🇮', name: 'Finnish' },
    { code: 'hr', flag: '🇭🇷', name: 'Croatian' },
    { code: 'ms', flag: '🇲🇾', name: 'Malay' },
    { code: 'sk', flag: '🇸🇰', name: 'Slovak' },
    { code: 'da', flag: '🇩🇰', name: 'Danish' },
    { code: 'ta', flag: '🇮🇳', name: 'Tamil' },
    { code: 'uk', flag: '🇺🇦', name: 'Ukrainian' },
    { code: 'ru', flag: '🇷🇺', name: 'Russian' }
];

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
  duck: {
    id: 'duck',
    name: 'Quacky Duck',
    agentId: '2AnipCyOETtlieJLCfsr',
    assets: {
      idle: '/assets/duck-idle.mp4',
      talking: '/assets/duck-talk.mp4',
      preview: '/assets/duck.jpg',
      icon: '/assets/duck-icon.jpg'
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
  },
  fox: {
    id: 'fox',
    name: 'Foxxy',
    agentId: 'XJ3eFR10myzK01A10BlN',
    assets: {
      idle: '/characters/fox/assets/fox-idle.mp4',
      talking: '/characters/fox/assets/fox-talking.mp4',
      preview: '/characters/fox/assets/foxxy.jpg',
      icon: '/characters/fox/assets/fox.jpg'
    }
  },
  whimsy: {
    id: 'whimsy',
    name: 'Clumsy Whimsy',
    agentId: 'jvbiMPIQOUiUs5GkepcA',
    assets: {
      idle: '/characters/whimsy/assets/idle-whimsy.mp4',
      talking: '/characters/whimsy/assets/speaking-whimsy.mp4',
      preview: '/characters/whimsy/assets/whimsy.jpg',
      icon: '/characters/whimsy/assets/whimsy.png'
    }
  },
  cat: {
    id: 'cat',
    name: 'Noodles',
    agentId: '4gWkcgFThRtBuhM5akxT',
    assets: {
      idle: '/characters/cat/assets/cat-idle.mp4',
      talking: '/characters/cat/assets/cat-talking.mp4',
      preview: '/characters/cat/assets/cat.png',
      icon: '/characters/cat/assets/cat.jpg'
    }
  },
  emma: {
    id: 'emma',
    name: 'Emma',
    agentId: 'UFCiWykxf7I8pgANcBuJ',
    assets: {
      idle: '/characters/emma/assets/idle.mp4',
      talking: '/characters/emma/assets/speaking.mp4',
      preview: '/characters/emma/assets/emma.png',
      icon: '/characters/emma/assets/emma.jpg'
    }
  },
  cupcake: {
    id: 'cupcake',
    name: 'Cupcake',
    agentId: 'iogofk9qnqvE98RwV1Kk',
    assets: {
      idle: '/characters/cupcake/assets/cupcake-blinking.mp4',
      talking: '/characters/cupcake/assets/cupcake-talk.mp4',
      preview: '/characters/cupcake/assets/cupcake.png',
      icon: '/characters/cupcake/assets/cupcake.jpg'
    }
  }
};

class ChatController {
  constructor(characterId, languageCode) {
    // Store the selected character and language
    this.character = characters[characterId];
    // If languageCode is missing, default to 'en-US'
    this.language = languageCode || 'en-US';
    this.conversation = null;
    this.videosLoaded = { idle: false, speaking: false };

    this.setupElements();
    this.setupCharacter();
    this.setupLanguageMenu();
    this.setupEventListeners();
    this.preloadVideos();
    this.updateBackground('idle');
    this.loadingScreen.classList.remove('hidden');
  }

  setupElements() {
    // DOM elements used in the script
    this.backgroundImage = document.querySelector('.background.image');
    this.idleVideo = document.getElementById('idleVideo');
    this.speakingVideo = document.getElementById('speakingVideo');
    this.startButton = document.getElementById('startButton');
    this.statusDot = document.querySelector('.status-dot');
    this.statusText = document.querySelector('.status-text');
    this.characterName = document.querySelector('.character-name');
    
    // Character menu elements
    this.characterMenu = document.querySelector('.character-menu');
    this.characterMenuContent = document.querySelector('.character-menu-content');
    this.characterSelectButton = document.querySelector('.character-select-button');

    // Language menu elements
    this.languageMenu = document.querySelector('.language-menu');
    this.languageMenuContent = document.querySelector('.language-menu-content');
    this.languageSelectButton = document.querySelector('.language-select-button');
    this.selectedFlagSpan = document.querySelector('.selected-flag');

    this.loadingScreen = document.querySelector('.character-loading');
  }

  setupCharacter() {
    document.title = `${this.character.name} - Talkidz`;
    this.characterName.textContent = this.character.name;
    this.backgroundImage.style.background = `url('${this.character.assets.preview}') center/contain no-repeat`;
    this.idleVideo.src = this.character.assets.idle;
    this.speakingVideo.src = this.character.assets.talking;
    
    // Update the character icon in the circle button
    this.characterSelectButton.innerHTML = `
      <div class="character-icon">
        <img src="${this.character.assets.icon}" alt="${this.character.name}">
      </div>
    `;
  }

  setupLanguageMenu() {
    // 1) Find the language object for the current this.language
    const currentLangObj = languages.find(lang => lang.code === this.language) 
                           || languages.find(lang => lang.code === 'en-US'); // fallback

    // 2) Update the selected flag in the button
    if (currentLangObj) {
      this.selectedFlagSpan.textContent = currentLangObj.flag;
    }

    // 3) Populate the dropdown
    this.languageMenuContent.innerHTML = ''; // clear old options if any
    languages.forEach(lang => {
      const div = document.createElement('div');
      div.className = `language-option ${lang.code === this.language ? 'active' : ''}`;
      div.innerHTML = `
        <span class="flag">${lang.flag}</span>
        <span>${lang.name}</span>
      `;
      div.addEventListener('click', () => this.changeLanguage(lang.code));
      this.languageMenuContent.appendChild(div);
    });

    // 4) Toggle the menu
    this.languageSelectButton.addEventListener('click', (e) => {
      e.stopPropagation();
      this.languageMenu.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
      if (!this.languageMenu.contains(e.target) 
          && e.target !== this.languageSelectButton) {
        this.languageMenu.classList.remove('active');
      }
    });
  }

  async changeLanguage(newLang) {
    // End any active conversation
    if (this.conversation) {
      await this.endConversation();
    }

    // Update local state
    this.language = newLang;
    // Update the URL param
    const url = new URL(window.location);
    url.searchParams.set('lang', newLang);
    window.history.pushState({}, '', url);

    // Re-setup the language menu so it shows the new selection
    this.setupLanguageMenu();
  }

  setupCharacterMenu() {
    // Create menu items for each character
    Object.values(characters).forEach(char => {
      const option = document.createElement('div');
      option.className = `character-option ${char.id === this.character.id ? 'active' : ''}`;
      option.innerHTML = `<img src="${char.assets.icon}" alt="${char.name}">`;
      option.addEventListener('click', () => this.changeCharacter(char.id));
      this.characterMenuContent.appendChild(option);
    });

    // Toggle the character menu
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

    this.loadingScreen.classList.remove('hidden');
    this.videosLoaded = { idle: false, speaking: false };

    const url = new URL(window.location);
    url.searchParams.set('character', characterId);
    // preserve the current language param if it exists
    if (this.language) {
      url.searchParams.set('lang', this.language);
    }
    window.history.pushState({}, '', url);

    this.character = characters[characterId];
    this.setupCharacter();

    // Re-preload videos
    this.preloadVideos();
    this.updateBackground('idle');

    // Update menu state
    document.querySelectorAll('.character-option').forEach(option => {
      const img = option.querySelector('img');
      const isActive = img && img.src.includes(characterId);
      option.classList.toggle('active', isActive);
    });
    
    this.characterMenu.classList.remove('active');
  }

  updateStatus(mode) {
    this.statusDot.classList.remove('listening');
    switch (mode) {
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
      this.loadingScreen.classList.add('hidden');
    }, { once: true }); // Use once to remove event listener after the first run

    this.speakingVideo.load();
    this.speakingVideo.addEventListener('loadeddata', () => {
      this.videosLoaded.speaking = true;
    }, { once: true });
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

      // Start a new conversation with language override
      this.conversation = await Conversation.startSession({
        agentId: this.character.agentId,
        overrides: {
          agent: {
            language: this.language // pass the chosen language
          }
        },
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
    // Start / End Conversation button
    this.startButton.addEventListener('click', async () => {
      if (this.conversation) {
        await this.endConversation();
      } else {
        await this.startConversation();
      }
    });

    // Build the character menu items once
    this.setupCharacterMenu();
  }
}

// For the share functionality
window.shareCharacter = () => {
  if (navigator.share) {
    navigator.share({
      title: `Chat with ${chat.character.name} on Talkidz`,
      text: `Come chat with ${chat.character.name}, your new AI friend!`,
      url: window.location.href
    }).catch(console.error);
  }
};

// Parse URL
const urlParams = new URLSearchParams(window.location.search);
const characterId = urlParams.get('character') || 'jonny';
const languageParam = urlParams.get('lang') || 'en-US';

// Create our ChatController
const chat = new ChatController(characterId, languageParam);
