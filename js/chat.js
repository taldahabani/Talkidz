import { Conversation } from 'https://cdn.skypack.dev/@11labs/client';

// Same languages array, now including a "firstMessage" property for each.
const languages = [
  {
    code: 'en',
    flag: '🇺🇸',
    name: 'English (USA)',
    firstMessage: "Hey, Nice To See You!"
  },
  {
    code: 'en',
    flag: '🇬🇧',
    name: 'English (UK)',
    firstMessage: "Hey, Nice To See You!"
  },
  {
    code: 'ja',
    flag: '🇯🇵',
    name: 'Japanese',
    firstMessage: "やあ、お会いできて嬉しいです！"
  },
  {
    code: 'zh',
    flag: '🇨🇳',
    name: 'Chinese',
    firstMessage: "嘿，很高兴见到你！"
  },
  {
    code: 'de',
    flag: '🇩🇪',
    name: 'German',
    firstMessage: "Hey, schön dich zu sehen!"
  },
  {
    code: 'hi',
    flag: '🇮🇳',
    name: 'Hindi',
    firstMessage: "अरे, आपसे मिलकर खुशी हुई!"
  },
  {
    code: 'fr',
    flag: '🇫🇷',
    name: 'French (France)',
    firstMessage: "Hey, ravi de te voir !"
  },
  {
    code: 'fr',
    flag: '🇨🇦',
    name: 'French (Canada)',
    firstMessage: "Hey, content de te voir !"
  },
  {
    code: 'ko',
    flag: '🇰🇷',
    name: 'Korean',
    firstMessage: "안녕, 만나서 반가워!"
  },
  {
    code: 'pt',
    flag: '🇧🇷',
    name: 'Portuguese (Brazil)',
    firstMessage: "Ei, que bom te ver!"
  },
  {
    code: 'pt',
    flag: '🇵🇹',
    name: 'Portuguese (Portugal)',
    firstMessage: "Ei, é bom ver-te!"
  },
  {
    code: 'it',
    flag: '🇮🇹',
    name: 'Italian',
    firstMessage: "Ehi, è bello vederti!"
  },
  {
    code: 'es',
    flag: '🇪🇸',
    name: 'Spanish (Spain)',
    firstMessage: "¡Hola, encantado de verte!"
  },
  {
    code: 'es',
    flag: '🇲🇽',
    name: 'Spanish (Mexico)',
    firstMessage: "¡Hola, qué gusto verte!"
  },
  {
    code: 'id',
    flag: '🇮🇩',
    name: 'Indonesian',
    firstMessage: "Hai, senang bertemu denganmu!"
  },
  {
    code: 'nl',
    flag: '🇳🇱',
    name: 'Dutch',
    firstMessage: "Hé, leuk je te zien!"
  },
  {
    code: 'tr',
    flag: '🇹🇷',
    name: 'Turkish',
    firstMessage: "Hey, seni gördüğüme sevindim!"
  },
  {
    code: 'fil',
    flag: '🇵🇭',
    name: 'Filipino',
    firstMessage: "Hey, ikinagagalak kitang makita!"
  },
  {
    code: 'pl',
    flag: '🇵🇱',
    name: 'Polish',
    firstMessage: "Hej, miło cię widzieć!"
  },
  {
    code: 'sv',
    flag: '🇸🇪',
    name: 'Swedish',
    firstMessage: "Hej, kul att se dig!"
  },
  {
    code: 'bg',
    flag: '🇧🇬',
    name: 'Bulgarian',
    firstMessage: "Хей, радвам се да те видя!"
  },
  {
    code: 'ro',
    flag: '🇷🇴',
    name: 'Romanian',
    firstMessage: "Hei, mă bucur să te văd!"
  },
  {
    code: 'ar',
    flag: '🇸🇦',
    name: 'Arabic (Saudi Arabia)',
    firstMessage: "مرحباً، سعيد برؤيتك!"
  },
  {
    code: 'ar',
    flag: '🇦🇪',
    name: 'Arabic (UAE)',
    firstMessage: "مرحباً، سعيد برؤيتك!"
  },
  {
    code: 'cs',
    flag: '🇨🇿',
    name: 'Czech',
    firstMessage: "Ahoj, rád tě vidím!"
  },
  {
    code: 'el',
    flag: '🇬🇷',
    name: 'Greek',
    firstMessage: "Γεια, χαίρομαι που σε βλέπω!"
  },
  {
    code: 'fi',
    flag: '🇫🇮',
    name: 'Finnish',
    firstMessage: "Hei, kiva nähdä sinua!"
  },
  {
    code: 'hr',
    flag: '🇭🇷',
    name: 'Croatian',
    firstMessage: "Hej, drago mi je što te vidim!"
  },
  {
    code: 'ms',
    flag: '🇲🇾',
    name: 'Malay',
    firstMessage: "Hai, gembira dapat berjumpa kamu!"
  },
  {
    code: 'sk',
    flag: '🇸🇰',
    name: 'Slovak',
    firstMessage: "Ahoj, rád ťa vidím!"
  },
  {
    code: 'da',
    flag: '🇩🇰',
    name: 'Danish',
    firstMessage: "Hej, rart at se dig!"
  },
  {
    code: 'ta',
    flag: '🇮🇳',
    name: 'Tamil',
    firstMessage: "ஹே, உங்களை சந்திப்பதில் சந்தோஷமாக உள்ளது!"
  },
  {
    code: 'uk',
    flag: '🇺🇦',
    name: 'Ukrainian',
    firstMessage: "Гей, радий тебе бачити!"
  },
  {
    code: 'ru',
    flag: '🇷🇺',
    name: 'Russian',
    firstMessage: "Привет, рад тебя видеть!"
  }
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
    this.character = characters[characterId];
    this.currentLanguage = languageCode || 'en';
    this.conversation = null;
    this.videosLoaded = { idle: false, speaking: false };

    this.setupElements();
    this.setupCharacter();
    this.setupEventListeners();
    this.preloadVideos();
    this.updateBackground('idle');
    this.setupCharacterMenu();
    this.setupLanguageMenu();
    
    // Show loading screen until at least the idle video is loaded
    this.loadingScreen.classList.remove('hidden');
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
    this.loadingScreen = document.querySelector('.character-loading');

    // Language dropdown elements
    this.languageSelectButton = document.getElementById('languageSelectButton');
    this.currentLanguageFlag = document.getElementById('currentLanguageFlag');
    this.languageMenu = document.getElementById('languageMenu');
    this.languageMenuContent = document.getElementById('languageMenuContent');
  }

  setupCharacter() {
    document.title = `${this.character.name} - Talkidz`;
    this.characterName.textContent = this.character.name;
    this.backgroundImage.style.background =
      `url('${this.character.assets.preview}') center/contain no-repeat`;
    this.idleVideo.src = this.character.assets.idle;
    this.speakingVideo.src = this.character.assets.talking;

    // Update character icon button
    this.characterSelectButton.innerHTML = `
      <div class="character-icon">
        <img src="${this.character.assets.icon}" alt="${this.character.name}">
      </div>`;
  }

  setupCharacterMenu() {
    // Re-render the character options
    this.characterMenuContent.innerHTML = '';
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
      const insideMenu = this.characterMenu.contains(e.target);
      const clickedButton = this.characterSelectButton.contains(e.target);
      if (!insideMenu && !clickedButton) {
        this.characterMenu.classList.remove('active');
      }
    });
  }

  // Language menu with flags
  setupLanguageMenu() {
    this.languageMenuContent.innerHTML = '';

    languages.forEach(lang => {
      const option = document.createElement('div');
      option.className = 'language-option';
      if (lang.code === this.currentLanguage) {
        option.classList.add('active');
      }
      option.innerHTML = `
          <span class="language-option-flag">${lang.flag}</span>
          <span>${lang.name}</span>
      `;
      option.addEventListener('click', () => this.changeLanguage(lang.code));
      this.languageMenuContent.appendChild(option);
    });

    // Update the main button’s flag
    this.updateLanguageFlag(this.currentLanguage);

    this.languageSelectButton.addEventListener('click', (e) => {
      e.stopPropagation();
      this.languageMenu.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
      const insideMenu = this.languageMenu.contains(e.target);
      const clickedButton = this.languageSelectButton.contains(e.target);
      if (!insideMenu && !clickedButton) {
        this.languageMenu.classList.remove('active');
      }
    });
  }

  updateLanguageFlag(langCode) {
    const selectedLang = languages.find(l => l.code === langCode)
                       || languages.find(l => l.code === 'en');
    if (selectedLang) {
      this.currentLanguageFlag.textContent = selectedLang.flag;
    } else {
      this.currentLanguageFlag.textContent = '🇺🇸';
    }
  }

  markActiveLanguage(newCode) {
    // Clear old 'active' markings
    const allLangOptions = document.querySelectorAll('.language-option');
    allLangOptions.forEach(opt => opt.classList.remove('active'));

    // Mark new one active
    const newActive = Array.from(allLangOptions).find(
      opt => opt.innerText.includes(this.getLangName(newCode))
    );
    if (newActive) newActive.classList.add('active');
  }

  getLangName(code) {
    const found = languages.find(l => l.code === code);
    return found ? found.name : '';
  }

  async changeLanguage(newCode) {
    if (this.conversation) {
      // End current conversation if active
      await this.endConversation();
    }
    // Update URL param
    const url = new URL(window.location);
    url.searchParams.set('language', newCode);
    window.history.pushState({}, '', url);

    // Update internal reference and UI
    this.currentLanguage = newCode;
    this.updateLanguageFlag(newCode);
    this.markActiveLanguage(newCode);
    this.languageMenu.classList.remove('active');
  }

  async changeCharacter(characterId) {
    if (this.conversation) {
      await this.endConversation();
    }
    this.loadingScreen.classList.remove('hidden');
    this.videosLoaded = { idle: false, speaking: false };

    // Update URL param
    const url = new URL(window.location);
    url.searchParams.set('character', characterId);
    window.history.pushState({}, '', url);

    this.character = characters[characterId];
    this.setupCharacter();
    this.preloadVideos();
    this.updateBackground('idle');

    // highlight newly active
    document.querySelectorAll('.character-option').forEach(option => {
      option.classList.toggle('active', option.querySelector('img').src.includes(characterId));
    });

    // close menu
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
      [this.idleVideo, this.speakingVideo].forEach(video =>
        video.classList.remove('active')
      );
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
      // request mic
      await navigator.mediaDevices.getUserMedia({ audio: true });
      this.triggerConfetti();
      this.startButton.classList.add('active');
      this.startButton.innerHTML = `
        <svg width="24" height="24" viewBox="0 0 24 24"
             fill="none" stroke="white" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      `;

      // Find the matching language object
      const selectedLang = languages.find(l => l.code === this.currentLanguage) || {};

      this.conversation = await Conversation.startSession({
        agentId: this.character.agentId,
        overrides: {
          agent: {
            language: this.currentLanguage || 'en',
            firstMessage: selectedLang.firstMessage || "Hello!"
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

// Grab URL params
const urlParams = new URLSearchParams(window.location.search);
const characterId = urlParams.get('character') || 'jonny';
const languageCode = urlParams.get('language') || 'en';

const chat = new ChatController(characterId, languageCode);
