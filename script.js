import { Conversation } from 'https://cdn.jsdelivr.net/npm/@11labs/client';

const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const connectionStatus = document.getElementById('connectionStatus');
const agentStatus = document.getElementById('agentStatus');
const chatHistory = document.getElementById('chatHistory');

let conversation;

async function startConversation() {
    try {
        // Request microphone permission
        await navigator.mediaDevices.getUserMedia({ audio: true });

        // Start the conversation
        conversation = await Conversation.startSession({
            agentId: 'UFCiWykxf7I8pgANcBuJ', // Replace with your agent ID
            onConnect: () => {
                connectionStatus.textContent = 'Connected';
                startButton.disabled = true;
                stopButton.disabled = false;
            },
            onDisconnect: () => {
                connectionStatus.textContent = 'Disconnected';
                startButton.disabled = false;
                stopButton.disabled = true;
            },
            onError: (error) => {
                console.error('Error:', error);
            },
            onModeChange: (mode) => {
                agentStatus.textContent = mode === 'speaking' ? 'speaking' : 'listening';
            },
            onMessage: (message) => {
                if (message.type === 'user_transcript') {
                    appendMessage('User', message.user_transcription_event.user_transcript);
                } else if (message.type === 'agent_response') {
                    appendMessage('Agent', message.agent_response_event.agent_response);
                }
            }
        });
    } catch (error) {
        console.error('Failed to start conversation:', error);
    }
}

async function stopConversation() {
    if (conversation) {
        await conversation.endSession();
    }
}

function appendMessage(sender, text) {
    const messageElement = document.createElement('div');
    messageElement.className = sender === 'User' ? 'user-message' : 'agent-message';
    messageElement.textContent = `${sender}: ${text}`;
    chatHistory.appendChild(messageElement);
    chatHistory.scrollTop = chatHistory.scrollHeight;
}

startButton.addEventListener('click', startConversation);
stopButton.addEventListener('click', stopConversation);
