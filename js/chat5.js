class VirtualPet {
    constructor() {
        this.remainingTime = 120; // 2 minutes in seconds
        this.isSpeaking = false;
        this.inventory = { tomato: 3, cake: 1, noodles: 5 };
        this.xp = 0;
        this.level = 1;
        
        this.init();
    }

    init() {
        this.setupElements();
        this.setupEventListeners();
        this.updateUI();
        this.startTimer();
        this.hideSplash();
    }

    setupElements() {
        this.splash = document.querySelector('.splash-container');
        this.timerProgress = document.querySelector('.timer-progress');
        this.catMessage = document.querySelector('.cat-message');
        this.micButton = document.querySelector('#micButton');
        this.monetizationModal = document.querySelector('.monetization-modal');
        this.xpFill = document.querySelector('.xp-fill');
        this.levelElement = document.querySelector('#level');
    }

    setupEventListeners() {
        // Mic Button
        this.micButton.addEventListener('click', () => this.toggleConversation());
        
        // Food Drag and Drop
        document.querySelectorAll('.food-item').forEach(item => {
            item.addEventListener('dragstart', e => {
                e.dataTransfer.setData('text/plain', e.target.dataset.food);
            });
        });

        document.addEventListener('dragover', e => e.preventDefault());
        document.addEventListener('drop', e => this.handleFoodDrop(e));
        
        // Monetization Buttons
        document.querySelector('.watch-ad').addEventListener('click', () => this.handleWatchAd());
        document.querySelector('.buy-water').addEventListener('click', () => this.handleBuyWater());
        document.querySelector('.invite-friend').addEventListener('click', () => this.handleInviteFriend());
    }

    startTimer() {
        this.timerInterval = setInterval(() => {
            if (this.isSpeaking) {
                this.remainingTime--;
                this.updateTimer();
                
                if (this.remainingTime <= 0) {
                    this.showMonetizationModal();
                }
            }
        }, 1000);
    }

    updateTimer() {
        const percentage = (this.remainingTime / 120) * 100;
        this.timerProgress.style.width = `${percentage}%`;
    }

    updateInventory() {
        document.querySelectorAll('.food-item').forEach(item => {
            const count = this.inventory[item.dataset.food];
            item.style.display = count > 0 ? 'flex' : 'none';
        });
    }

    updateXP(amount) {
        this.xp += amount;
        const xpNeeded = this.level * 1000;
        
        if (this.xp >= xpNeeded) {
            this.levelUp();
        }
        
        this.xpFill.style.width = `${Math.min((this.xp / xpNeeded) * 100, 100)}%`;
    }

    levelUp() {
        this.level++;
        this.xp = 0;
        this.levelElement.textContent = this.level;
        this.showMessage(`Level Up! 🎉 Now Level ${this.level}`);
        this.triggerConfetti();
        
        // Add level rewards
        this.inventory.tomato += 2;
        this.inventory.noodles += 3;
        this.updateInventory();
    }

    async toggleConversation() {
        this.isSpeaking = !this.isSpeaking;
        this.micButton.classList.toggle('active', this.isSpeaking);
        
        if (this.isSpeaking) {
            await this.startConversation();
        } else {
            await this.endConversation();
        }
    }

    async startConversation() {
        try {
            // Add actual conversation implementation
            this.showMessage("Meow! Let's chat! 😺");
            this.updateXP(50);
        } catch (error) {
            console.error('Error starting conversation:', error);
        }
    }

    async endConversation() {
        // Add conversation cleanup
        this.showMessage("Bye for now! 😸");
    }

    handleFoodDrop(e) {
        e.preventDefault();
        const foodType = e.dataTransfer.getData('text/plain');
        
        if (this.inventory[foodType] > 0) {
            this.throwFood(foodType);
            this.inventory[foodType]--;
            this.updateInventory();
            this.handleFoodEffect(foodType);
        }
    }

    throwFood(foodType) {
        const foodElement = document.createElement('div');
        foodElement.className = `food-throw ${foodType}`;
        foodElement.textContent = this.getFoodEmoji(foodType);
        
        document.body.appendChild(foodElement);
        
        anime({
            targets: foodElement,
            top: ['20%', '50%'],
            left: ['20%', '50%'],
            rotate: '+=360',
            duration: 1000,
            easing: 'easeOutQuad',
            complete: () => foodElement.remove()
        });
    }

    handleFoodEffect(foodType) {
        const effects = {
            tomato: { time: 30, message: "Hey! My face! 😾", xp: 30 },
            cake: { time: 60, message: "Sugar rush! 😹", xp: 50 },
            noodles: { time: 45, message: "Noodle attack! 🍜", xp: 40 }
        };
        
        const effect = effects[foodType];
        this.remainingTime += effect.time;
        this.updateTimer();
        this.updateXP(effect.xp);
        this.showMessage(effect.message);
    }

    showMonetizationModal() {
        this.monetizationModal.classList.remove('hidden');
        this.isSpeaking = false;
        this.micButton.classList.remove('active');
    }

    handleWatchAd() {
        // Implement ad viewing logic
        this.remainingTime += 60;
        this.updateTimer();
        this.monetizationModal.classList.add('hidden');
        this.showMessage("Thanks! Let's keep playing! 😺");
    }

    handleBuyWater() {
        // Implement purchase logic
        this.remainingTime += 120;
        this.updateTimer();
        this.monetizationModal.classList.add('hidden');
        this.showMessage("*Glug glug* Refreshed! 💧");
    }

    handleInviteFriend() {
        // Implement referral logic
        this.remainingTime += 180;
        this.updateTimer();
        this.monetizationModal.classList.add('hidden');
        this.showMessage("Friends make everything better! 😸");
    }

    showMessage(text) {
        this.catMessage.textContent = text;
        setTimeout(() => {
            this.catMessage.textContent = '';
        }, 3000);
    }

    triggerConfetti() {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    }

    hideSplash() {
        setTimeout(() => {
            this.splash.style.opacity = '0';
            setTimeout(() => this.splash.remove(), 500);
        }, 2000);
    }

    updateUI() {
        this.updateInventory();
        this.updateTimer();
    }
}

// Initialize the app
window.addEventListener('DOMContentLoaded', () => {
    new VirtualPet();
});
