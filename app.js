import { Conversation } from '@11labs/client';

document.getElementById('send-button').addEventListener('click', sendMessage);
document.getElementById('user-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') sendMessage();
});

async function sendMessage() {
    const userInput = document.getElementById('user-input').value.trim();
    if (!userInput) return;

    displayMessage(userInput, 'user-message');
    document.getElementById('user-input').value = '';

    try {
        const agentResponse = await getAgentResponse(userInput);
        displayMessage(agentResponse, 'agent-message');
    } catch (error) {
        console.error('Error:', error);
        displayMessage('Sorry, something went wrong. Please try again.', 'agent-message');
    }
}

function displayMessage(message, className) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.className = `message ${className}`;
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

async function getAgentResponse(userInput) {
    const agentId = 'xiC8L3SOeHwYyCLLnYxF';
    const conversation = await Conversation.startSession({
        agentId: agentId,
        onMessage: (message) => {
            if (message.type === 'agent') {
                displayMessage(message.content, 'agent-message');
            }
        },
        onError: (error) => {
            console.error('Conversation error:', error);
        }
    });

    await conversation.sendMessage(userInput);
}
