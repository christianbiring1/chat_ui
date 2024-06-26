import React, { useState } from 'react';
import moment from 'moment';

import { Avatar } from '@mui/material';
import { SendOutlined } from '@mui/icons-material';

const Chat = () => {

  const users = {
    Allie: {
      photo: 'https://picsum.photos/id/64/200/300'
    },
    You: {
      photo: 'https://picsum.photos/id/91/200/300'
    }
  };
  const [messages, setMessages] = useState([
    { user: 'You', text: 'Hey, I wanted to check in on our financial metrics, I have been looking at our DartMetrics dashboard, and it seems like our runway is shorter than we anticipated. Hav you noticed that?', timestamp: new Date() },
    { user: 'Allie', text: 'Yeah, I saw that too. It looks like our burn rate has increased over the past couple months. We need to dive into what is driving those costs up', timestamp: new Date() },
    { user: 'You', text: "Definitely. From what I can see on the dashboard, our marketing spend has been a significant factor. We'been investigating heavily in lead generation but it doesn't seem to be converting as well as we hope", timestamp: new Date() },
    { user: 'Allie', text: "Agreed. I noticed that our revenue growth rate isn't keeping up with the increased spending. we might need to adjust our strategy there. Should we consider rellocating some of that budget to more cost-effective channels", timestamp: new Date() }
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
      setMessages([...messages, { user: 'You', text: newMessage, timestamp: new Date() }]);
      setNewMessage('');
    }
  };

  const formatTimestamp = (timestamp) => {
    const now = moment();
    const sentTime = moment(timestamp);
    const minutesDiff = now.diff(sentTime, 'minutes');

    if (minutesDiff < 1) {
      return 'Just now';
    } else if (minutesDiff < 60) {
      return `${minutesDiff} minutes ago`;
    } else if (now.isSame(sentTime, 'day')) {
      return sentTime.format('h:mm A');
    } else {
      return sentTime.format('MMMM D, YYYY');
    }
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((msg, index) => {
          const showUserLabel = index === 0 || messages[index - 1].user !== msg.user;
          const showTimestamp = index === 0 || messages[index - 1].user !== msg.user || moment(messages[index - 1].timestamp).diff(moment(msg.timestamp), 'minutes') >= 1;
          return (
            <div
              key={index}
              className={`message ${msg.user === 'You' ? 'user-message' : 'allie-message'}`}
              style={showUserLabel ? { marginBottom: '2rem' } : {}}
            >
              {showUserLabel && (
                <div className="message-header">
                  <Avatar src={users[msg.user].photo}/>
                  <p style={{ display: 'flex', alignItems: 'center', gap: `${msg.user === 'You' ? '1rem' : '10rem'}`}}>
                    <span style={{ fontWeight: '600'}}>{msg.user}</span>
                    {showTimestamp && (
                      <div className="message-timestamp">{formatTimestamp(msg.timestamp)}</div>
                    )}
                  </p>
                </div>
              )}
              <div className="message-text_container">
                <div className="message-text">{msg.text}</div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="input-container">
        <div className="textarea-wrapper">
          <textarea
            value={newMessage}
            onChange={handleMessageChange}
            onKeyDown={handleKeyDown}
            placeholder="Type your message..."
          ></textarea>
          <div className='button'>
            <SendOutlined style={{ color: '#fff' }} onClick={handleSendMessage} />
          </div>
        </div>
      </div>
      <p style={{ margin: '0 1rem', fontSize: '1.2rem'}}>Press <span style={{ textDecoration: 'underline', fontWeight: '700'}}>Shift+Enter</span> to start a new line</p>
    </div>
  );
};

export default Chat;
