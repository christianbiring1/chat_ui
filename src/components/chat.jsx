import React, { useState } from 'react';

const Chat = () => {
  const [messages, setMessages] = useState([
    { user: 'Allie', text: 'Hey, I wanted to check in on our financial metrics...' },
    { user: 'Allie', text: 'Hey, I wanted to check in on our financial metrics...' },
    { user: 'You', text: 'Yeah, I saw that too. It looks like our burn rate has increased...' },
    { user: 'Allie', text: 'Definitely. From what I can see on the dashboard...' },
    { user: 'You', text: 'Agreed. I noticed that our revenue growth rate...' },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleMessageChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { user: 'You', text: newMessage }]);
      setNewMessage('');
    }
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((msg, index) => {
          const showUserLabel = index === 0 || messages[index - 1].user !== msg.user;
          return (
            <div key={index} className={`message ${msg.user === 'You' ? 'user-message' : 'allie-message'}`}>
              {showUserLabel && <strong>{msg.user}</strong>}
              <div className="message-text">{msg.text}</div>
            </div>
          );
        })}
      </div>
      <div className="input-container">
        <textarea
          value={newMessage}
          onChange={handleMessageChange}
          onKeyDown={handleKeyDown}
          placeholder="Type your message..."
        ></textarea>
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
