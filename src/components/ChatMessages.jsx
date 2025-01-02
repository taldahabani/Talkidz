import React, { useState, useEffect, useRef } from 'react';

const ChatMessages = () => {
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Add messages when events are received
  const addMessage = (text, isUser = false) => {
    setMessages(prevMessages => [...prevMessages, {
      id: Date.now(),
      text,
      isUser
    }]);
  };

  // Example method to be called when receiving messages
  const handleNewMessage = (event) => {
    if (event.type === "user_transcript") {
      addMessage(event.user_transcription_event.user_transcript, true);
    } else if (event.type === "agent_response") {
      addMessage(event.agent_response_event.agent_response, false);
    }
  };

  return (
    <div className="messages-wrapper">
      {messages.map(message => (
        <div 
          key={message.id}
          className={`message ${message.isUser ? 'user' : 'agent'}`}
        >
          {message.text}
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatMessages;
