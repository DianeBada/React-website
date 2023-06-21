import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Styles/internet.css';

const InternetArt = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [activeTab, setActiveTab] = useState('chaos');

  useEffect(() => {
    if (activeTab === 'chaos') {
      fetchRedditPosts('youngadults');
    }
  }, [activeTab]);

  const fetchRedditPosts = async (subreddit) => {
    try {
      const response = await axios.get(
        `https://www.reddit.com/r/${subreddit}/.json?limit=30`
      );

      const posts = response.data.data.children.map((post) => ({
        id: post.data.id,
        author: post.data.author,
        message: post.data.title,
      }));

      setMessages(posts);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim() !== '') {
      setMessages((prevMessages) => [
        ...prevMessages,
        { id: Date.now(), message: inputValue },
      ]);
      setInputValue('');
    }
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="tabs">
        <button
          className={activeTab === 'chaos' ? 'active' : ''}
          onClick={() => handleTabChange('chaos')}
        >
          Chaos
        </button>
        <button
          className={activeTab === 'beauty' ? 'active' : ''}
          onClick={() => handleTabChange('beauty')}
        >
          Beauty
        </button>
      </div>

      {activeTab === 'chaos' && (
        <div className="chat-area">
          {messages.map((message) => (
            <div key={message.id} className="message">
              <div className="message-container">
                <p className="author">{message.author}</p>
                <p className="content">{message.message}</p>
              </div>
              <div className="reaction-buttons">
                <button>Like</button>
                <button>Dislike</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'beauty' && (
        <div className="image-area">
          {/* Add your code here to retrieve and display images */}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type your message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default InternetArt;
