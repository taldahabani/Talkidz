// microphone-manager.js
export class MicrophoneManager {
    constructor() {
        this.micStream = null;
    }

    async getMicrophoneAccess() {
        try {
            // Check the current permission state
            const permissionStatus = await navigator.permissions.query({ name: 'microphone' });

            if (permissionStatus.state === 'granted') {
                if (!this.micStream) {
                    this.micStream = await navigator.mediaDevices.getUserMedia({ audio: true });
                }
                return true;
            } else if (permissionStatus.state === 'prompt') {
                // Request access since it's not yet granted
                this.micStream = await navigator.mediaDevices.getUserMedia({ audio: true });
                return true;
            } else {
                // Permission denied
                return false;
            }
        } catch (error) {
            console.error('Microphone access error:', error);
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
