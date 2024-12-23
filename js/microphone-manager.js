// microphone-manager.js
export class MicrophoneManager {
    constructor() {
        this.micStream = null;
    }

    async getMicrophoneAccess() {
        try {
            const hasStoredPermission = localStorage.getItem('microphonePermission') === 'granted';
            
            if (hasStoredPermission && !this.micStream) {
                this.micStream = await navigator.mediaDevices.getUserMedia({ audio: true });
                return true;
            } else if (this.micStream) {
                return true;
            }

            this.micStream = await navigator.mediaDevices.getUserMedia({ audio: true });
            localStorage.setItem('microphonePermission', 'granted');
            return true;
        } catch (error) {
            console.error('Microphone access error:', error);
            localStorage.removeItem('microphonePermission');
            return false;
        }
    }

    cleanup() {
        if (this.micStream) {
            this.micStream.getTracks().forEach(track => track.stop());
            this.micStream = null;
        }
    }
}
