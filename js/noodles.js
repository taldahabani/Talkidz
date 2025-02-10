document.querySelector('.splash-container').classList.remove('hidden');

import { Conversation } from 'https://cdn.skypack.dev/@11labs/client';

const firstMessages = {
  cat: {
    en: "Hey it's noodles! nice to see you!",
    ja: "やあ、ヌードルズだよ！会えて嬉しい！",
    zh: "嘿，是Noodles！很高兴见到你！",
    de: "Hey, hier sind Noodles! Schön dich zu sehen!",
    hi: "अरे, ये नूडल्स हैं! आपको देखकर अच्छा लगा!",
    fr: "Hey, c'est Noodles ! Ravi de te voir !",
    ko: "안녕, 누들스야! 만나서 반가워!",
    pt: "Ei, são os Noodles! Bom te ver!",
    it: "Ehi, sono i Noodles! Bello vederti!",
    es: "¡Hola, soy Noodles! ¡Encantado de verte!",
    id: "Hai, ini Noodles! Senang bertemu denganmu!",
    nl: "Hé, dit is Noodles! Leuk je te zien!",
    tr: "Hey, bunlar Noodles! Seni gördüğüme sevindim!",
    fil: "Hoy, Noodles ito! Ikinagagalak kitang makita!",
    pl: "Hej, to Noodles! Miło cię widzieć!",
    sv: "Hej, det är Noodles! Kul att se dig!",
    bg: "Хей, това са Нудълс! Радвам се да те видя!",
    ro: "Hei, sunt Noodles! Mă bucur să te văd!",
    ar: "مرحباً، إنه نودلز! سعيد برؤيتك!",
    cs: "Ahoj, tady Noodles! Rád tě vidím!",
    el: "Γεια, είμαι o Noodles! Χαίρομαι που σε βλέπω!",
    fi: "Hei, tässä on Noodles! Kiva nähdä sinua!",
    hr: "Bok, to je Noodles! Drago mi je što te vidim!",
    ms: "Hai, ini Noodles! Seronok berjumpa kamu!",
    sk: "Ahoj, to sú Noodles! Rád ťa vidím!",
    da: "Hej, det er Noodles! Rart at se dig!",
    ta: "ஹே, இது நூடுல்ஸ்! உங்களைச் சந்தித்ததில் மகிழ்ச்சி!",
    uk: "Гей, це Noodles! Радий тебе бачити!",
    ru: "Привет, это Noodles! Рад тебя видеть!"
  }
};

const languages = [
  { code: 'en', flag: '🇺🇸', name: 'English (USA)', firstMessage: "Hey, Nice To See You!" },
  { code: 'en', flag: '🇬🇧', name: 'English (UK)', firstMessage: "Hey, Nice To See You!" },
  { code: 'ja', flag: '🇯🇵', name: 'Japanese', firstMessage: "やあ、お会いできて嬉しいです！" },
  { code: 'zh', flag: '🇨🇳', name: 'Chinese', firstMessage: "嘿，很高兴见到你！" },
  { code: 'de', flag: '🇩🇪', name: 'German', firstMessage: "Hey, schön dich zu sehen!" },
  { code: 'hi', flag: '🇮🇳', name: 'Hindi', firstMessage: "अरे, आपसे मिलकर खुशी हुई!" },
  { code: 'fr', flag: '🇫🇷', name: 'French (France)', firstMessage: "Hey, ravi de te voir !" },
  { code: 'fr', flag: '🇨🇦', name: 'French (Canada)', firstMessage: "Hey, content de te voir !" },
  { code: 'ko', flag: '🇰🇷', name: 'Korean', firstMessage: "안녕, 만나서 반가워!" },
  { code: 'pt', flag: '🇧🇷', name: 'Portuguese (Brazil)', firstMessage: "Ei, que bom te ver!" },
  { code: 'pt', flag: '🇵🇹', name: 'Portuguese (Portugal)', firstMessage: "Ei, é bom ver-te!" },
  { code: 'it', flag: '🇮🇹', name: 'Italian', firstMessage: "Ehi, è bello vederti!" },
  { code: 'es', flag: '🇪🇸', name: 'Spanish (Spain)', firstMessage: "¡Hola, encantado de verte!" },
  { code: 'es', flag: '🇲🇽', name: 'Spanish (Mexico)', firstMessage: "¡Hola, qué gusto verte!" },
  { code: 'id', flag: '🇮🇩', name: 'Indonesian', firstMessage: "Hai, senang bertemu denganmu!" },
  { code: 'nl', flag: '🇳🇱', name: 'Dutch', firstMessage: "Hé, leuk je te zien!" },
  { code: 'tr', flag: '🇹🇷', name: 'Turkish', firstMessage: "Hey, seni gördüğüme sevindim!" },
  { code: 'fil', flag: '🇵🇭', name: 'Filipino', firstMessage: "Hey, ikinagagalak kitang makita!" },
  { code: 'pl', flag: '🇵🇱', name: 'Polish', firstMessage: "Hej, miło cię widzieć!" },
  { code: 'sv', flag: '🇸🇪', name: 'Swedish', firstMessage: "Hej, kul att se dig!" },
  { code: 'bg', flag: '🇧🇬', name: 'Bulgarian', firstMessage: "Хей, радвам се да те видя!" },
  { code: 'ro', flag: '🇷🇴', name: 'Romanian', firstMessage: "Hei, mă bucur să te văd!" },
  { code: 'ar', flag: '🇸🇦', name: 'Arabic (Saudi Arabia)', firstMessage: "مرحباً، سعيد برؤيتك!" },
  { code: 'ar', flag: '🇦🇪', name: 'Arabic (UAE)', firstMessage: "مرحباً، سعيد برؤيتك!" },
  { code: 'cs', flag: '🇨🇿', name: 'Czech', firstMessage: "Ahoj, rád tě vidím!" },
  { code: 'el', flag: '🇬🇷', name: 'Greek', firstMessage: "Γεια, χαίρομαι που σε βλέπω!" },
  { code: 'fi', flag: '🇫🇮', name: 'Finnish', firstMessage: "Hei, kiva nähdä sinua!" },
  { code: 'hr', flag: '🇭🇷', name: 'Croatian', firstMessage: "Hej, drago mi je što te vidim!" },
  { code: 'ms', flag: '🇲🇾', name: 'Malay', firstMessage: "Hai, gembira dapat berjumpa kamu!" },
  { code: 'sk', flag: '🇸🇰', name: 'Slovak', firstMessage: "Ahoj, rád ťa vidím!" },
  { code: 'da', flag: '🇩🇰', name: 'Danish', firstMessage: "Hej, rart at se dig!" },
  { code: 'ta', flag: '🇮🇳', name: 'Tamil', firstMessage: "ஹே, உங்களை சந்திப்பதில் சந்தோஷமாக உள்ளது!" },
  { code: 'uk', flag: '🇺🇦', name: 'Ukrainian', firstMessage: "Гей, радий тебе бачити!" },
  { code: 'ru', flag: '🇷🇺', name: 'Russian', firstMessage: "Привет, рад тебя видеть!" }
];

const characters = {
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

    this.characterSelectButton.innerHTML = `
      <div class="character-icon">
        <img src="${this.character.assets.icon}" alt="${this.character.name}">
      </div>`;
  }

  setupCharacterMenu() {
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
    const allLangOptions = document.querySelectorAll('.language-option');
    allLangOptions.forEach(opt => opt.classList.remove('active'));

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
      await this.endConversation();
    }
    const url = new URL(window.location);
    url.searchParams.set('language', newCode);
    window.history.pushState({}, '', url);

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

createParticles() {
    const container = document.querySelector('.main-container');
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.width = Math.random() * 10 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.5)`;
        particle.style.borderRadius = '50%';
        particle.style.position = 'absolute';
        this.restartParticle(particle);
        container.appendChild(particle);
    }
}

restartParticle(particle) {
    const startX = Math.random() * window.innerWidth;
    const startY = window.innerHeight + 10;
    const endX = startX + (Math.random() - 0.5) * 200;
    const endY = -10;
    
    particle.style.left = startX + 'px';
    particle.style.top = startY + 'px';
    particle.style.setProperty('--tx', (endX - startX) + 'px');
    particle.style.setProperty('--ty', (endY - startY) + 'px');
    
    particle.style.animation = 'none';
    particle.offsetHeight; // Force reflow
    particle.style.animation = `float ${Math.random() * 2 + 3}s linear infinite`;
}

  async startConversation() {
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });
      this.triggerConfetti();
      this.createParticles();
      this.startButton.classList.add('active');
      this.startButton.innerHTML = `
        <svg width="24" height="24" viewBox="0 0 24 24"
             fill="none" stroke="white" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      `;

      const charMessages = firstMessages[this.character.id] || {};
      const selectedMsg = charMessages[this.currentLanguage] || "Hello!";

      this.conversation = await Conversation.startSession({
        agentId: this.character.agentId,
        overrides: {
          agent: {
            language: this.currentLanguage || 'en',
            firstMessage: selectedMsg
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

const urlParams = new URLSearchParams(window.location.search);
const characterId = urlParams.get('character') || 'jonny';
const languageCode = urlParams.get('language') || 'en';

const chat = new ChatController(characterId, languageCode);
