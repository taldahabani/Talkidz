// chat.js

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
   // Add 13 more characters here
   char1: {
       id: 'char1',
       name: 'Luna',
       agentId: 'AgentID1',
       assets: {
           idle: '/characters/luna/assets/luna-idle.mp4',
           talking: '/characters/luna/assets/luna-talk.mp4',
           preview: '/characters/luna/assets/luna.jpg',
           icon: '/characters/luna/assets/luna-icon.jpg'
       }
   },
   char2: {
       id: 'char2',
       name: 'Max',
       agentId: 'AgentID2',
       assets: {
           idle: '/characters/max/assets/max-idle.mp4',
           talking: '/characters/max/assets/max-talk.mp4',
           preview: '/characters/max/assets/max.jpg',
           icon: '/characters/max/assets/max-icon.jpg'
       }
   },
   char3: {
       id: 'char3',
       name: 'Sophie',
       agentId: 'AgentID3',
       assets: {
           idle: '/characters/sophie/assets/sophie-idle.mp4',
           talking: '/characters/sophie/assets/sophie-talk.mp4',
           preview: '/characters/sophie/assets/sophie.jpg',
           icon: '/characters/sophie/assets/sophie-icon.jpg'
       }
   },
   char4: {
       id: 'char4',
       name: 'Leo',
       agentId: 'AgentID4',
       assets: {
           idle: '/characters/leo/assets/leo-idle.mp4',
           talking: '/characters/leo/assets/leo-talk.mp4',
           preview: '/characters/leo/assets/leo.jpg',
           icon: '/characters/leo/assets/leo-icon.jpg'
       }
   },
   char5: {
       id: 'char5',
       name: 'Mia',
       agentId: 'AgentID5',
       assets: {
           idle: '/characters/mia/assets/mia-idle.mp4',
           talking: '/characters/mia/assets/mia-talk.mp4',
           preview: '/characters/mia/assets/mia.jpg',
           icon: '/characters/mia/assets/mia-icon.jpg'
       }
   },
   char6: {
       id: 'char6',
       name: 'Oliver',
       agentId: 'AgentID6',
       assets: {
           idle: '/characters/oliver/assets/oliver-idle.mp4',
           talking: '/characters/oliver/assets/oliver-talk.mp4',
           preview: '/characters/oliver/assets/oliver.jpg',
           icon: '/characters/oliver/assets/oliver-icon.jpg'
       }
   },
   char7: {
       id: 'char7',
       name: 'Ava',
       agentId: 'AgentID7',
       assets: {
           idle: '/characters/ava/assets/ava-idle.mp4',
           talking: '/characters/ava/assets/ava-talk.mp4',
           preview: '/characters/ava/assets/ava.jpg',
           icon: '/characters/ava/assets/ava-icon.jpg'
       }
   },
   char8: {
       id: 'char8',
       name: 'Ethan',
       agentId: 'AgentID8',
       assets: {
           idle: '/characters/ethan/assets/ethan-idle.mp4',
           talking: '/characters/ethan/assets/ethan-talk.mp4',
           preview: '/characters/ethan/assets/ethan.jpg',
           icon: '/characters/ethan/assets/ethan-icon.jpg'
       }
   },
   char9: {
       id: 'char9',
       name: 'Isabella',
       agentId: 'AgentID9',
       assets: {
           idle: '/characters/isabella/assets/isabella-idle.mp4',
           talking: '/characters/isabella/assets/isabella-talk.mp4',
           preview: '/characters/isabella/assets/isabella.jpg',
           icon: '/characters/isabella/assets/isabella-icon.jpg'
       }
   },
   char10: {
       id: 'char10',
       name: 'James',
       agentId: 'AgentID10',
       assets: {
           idle: '/characters/james/assets/james-idle.mp4',
           talking: '/characters/james/assets/james-talk.mp4',
           preview: '/characters/james/assets/james.jpg',
           icon: '/characters/james/assets/james-icon.jpg'
       }
   },
   char11: {
       id: 'char11',
       name: 'Sophia',
       agentId: 'AgentID11',
       assets: {
           idle: '/characters/sophia/assets/sophia-idle.mp4',
           talking: '/characters/sophia/assets/sophia-talk.mp4',
           preview: '/characters/sophia/assets/sophia.jpg',
           icon: '/characters/sophia/assets/sophia-icon.jpg'
       }
   },
   char12: {
       id: 'char12',
       name: 'Benjamin',
       agentId: 'AgentID12',
       assets: {
           idle: '/characters/benjamin/assets/benjamin-idle.mp4',
           talking: '/characters/benjamin/assets/benjamin-talk.mp4',
           preview: '/characters/benjamin/assets/benjamin.jpg',
           icon: '/characters/benjamin/assets/benjamin-icon.jpg'
       }
   },
   char13: {
       id: 'char13',
       name: 'Charlotte',
       agentId: 'AgentID13',
       assets: {
           idle: '/characters/charlotte/assets/charlotte-idle.mp4',
           talking: '/characters/charlotte/assets/charlotte-talk.mp4',
           preview: '/characters/charlotte/assets/charlotte.jpg',
           icon: '/characters/charlotte/assets/charlotte-icon.jpg'
       }
   },
   char14: {
       id: 'char14',
       name: 'Henry',
       agentId: 'AgentID14',
       assets: {
           idle: '/characters/henry/assets/henry-idle.mp4',
           talking: '/characters/henry/assets/henry-talk.mp4',
           preview: '/characters/henry/assets/henry.jpg',
           icon: '/characters/henry/assets/henry-icon.jpg'
       }
   },
   char15: {
       id: 'char15',
       name: 'Amelia',
       agentId: 'AgentID15',
       assets: {
           idle: '/characters/amelia/assets/amelia-idle.mp4',
           talking: '/characters/amelia/assets/amelia-talk.mp4',
           preview: '/characters/amelia/assets/amelia.jpg',
           icon: '/characters/amelia/assets/amelia-icon.jpg'
       }
   }
};

class ChatController {
   constructor(characterId) {
       this.character = characters[characterId];
       this.conversation = null;
       this.videosLoaded = { idle: false, speaking: false };
       this.backgroundImage = document.querySelector('.background.image');
       this.idleVideo = document.getElementById('idleVideo');
       this.speakingVideo = document.getElementById('speakingVideo');
       this.startButton = document.getElementById('startButton');
       this.statusDot = document.querySelector('.status-dot');
       this.statusText = document.querySelector('.status-text');
       this.characterName = document.querySelector('.character-name');
       this.characterSelectButton = document.getElementById('characterSelectButton');
       this.characterMenu = document.getElementById('characterMenu');
       this.closeCharacterMenuButton = document.getElementById('closeCharacterMenu');
       this.characterOptionsContainer = document.getElementById('characterOptions');
       
       this.setupCharacter();
       this.setupEventListeners();
       this.preloadVideos();
       this.updateBackground('idle');
       this.populateCharacterOptions();
   }

   setupCharacter() {
       document.title = `${this.character.name} - Talkidz`;
       this.characterName.textContent = this.character.name;
       this.backgroundImage.style.background = `url('${this.character.assets.preview}') center/contain no-repeat`;
       this.idleVideo.src = this.character.assets.idle;
       this.speakingVideo.src = this.character.assets.talking;
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
                   this.startButton.innerHTML = 'Start Conversation';
               },
               onError: (error) => {
                   console.error('Conversation error:', error);
                   this.updateBackground('idle');
                   this.startButton.classList.remove('active');
                   this.startButton.innerHTML = 'Start Conversation';
               }
           });
       } catch (error) {
           console.error('Error starting conversation:', error);
           this.updateBackground('idle');
           this.startButton.classList.remove('active');
           this.startButton.innerHTML = 'Start Conversation';
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
               this.startButton.innerHTML = 'Start Conversation';
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

       this.characterSelectButton.addEventListener('click', () => {
           this.openCharacterMenu();
       });

       this.closeCharacterMenuButton.addEventListener('click', () => {
           this.closeCharacterMenu();
       });

       window.addEventListener('click', (e) => {
           if (e.target === this.characterMenu) {
               this.closeCharacterMenu();
           }
       });
   }

   populateCharacterOptions() {
       Object.values(characters).forEach(char => {
           const option = document.createElement('div');
           option.classList.add('character-option');
           option.dataset.characterId = char.id;
           option.innerHTML = `
               <img src="${char.assets.icon}" alt="${char.name}" class="character-icon">
               <span class="character-option-name">${char.name}</span>
           `;
           option.addEventListener('click', () => {
               this.selectCharacter(char.id);
           });
           this.characterOptionsContainer.appendChild(option);
       });
   }

   selectCharacter(characterId) {
       if (characters[characterId]) {
           this.endConversation().then(() => {
               this.character = characters[characterId];
               this.setupCharacter();
               this.preloadVideos();
               this.updateBackground('idle');
               this.updateURLParameter('character', characterId);
               this.closeCharacterMenu();
           });
       }
   }

   openCharacterMenu() {
       this.characterMenu.classList.add('active');
   }

   closeCharacterMenu() {
       this.characterMenu.classList.remove('active');
   }

   updateURLParameter(key, value) {
       const url = new URL(window.location);
       url.searchParams.set(key, value);
       window.history.replaceState({}, '', url);
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
