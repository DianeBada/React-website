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
    } else if (activeTab === 'beauty') {
      fetchRedditPosts('CollegeMemes');
    }
  }, [activeTab]);

  const fetchRedditPosts = async (subreddit) => {
    try {
      const response = await axios.get(
        `https://www.reddit.com/r/${subreddit}/.json?limit=90`
      );

      const posts = response.data.data.children
        .map((post) => ({
          id: post.data.id,
          author: post.data.author,
          message: post.data.title,
          imageUrl: post.data.url,
          liked: false,
          disliked: false,
        }))
        .filter((post) => post.imageUrl && post.imageUrl.startsWith('http'));

      setMessages(posts);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim() !== '') {
      const newMessage = {
        id: Date.now(),
        author: 'User',
        message: inputValue,
        liked: false,
        disliked: false,
      };

      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setInputValue('');
    }
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleLike = (id) => {
    setMessages((prevMessages) =>
      prevMessages.map((message) =>
        message.id === id ? { ...message, liked: true, disliked: false } : message
      )
    );
  };

  const handleDislike = (id) => {
    setMessages((prevMessages) =>
      prevMessages.map((message) =>
        message.id === id ? { ...message, liked: false, disliked: true } : message
      )
    );
  };

  const isImageAccessible = (imageUrl) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = imageUrl;
    });
  };

  useEffect(() => {
    const loadImages = async () => {
      const updatedMessages = [];

      for (const message of messages) {
        if (message.imageUrl) {
          const isAccessible = await isImageAccessible(message.imageUrl);
          if (isAccessible) {
            updatedMessages.push(message);
          }
        } else {
          updatedMessages.push(message);
        }
      }

      if (updatedMessages.length > 0) {
        setMessages(updatedMessages);
      }
    };

    loadImages();
  }, []);

  return (
    <section>
      <article className="tabs">
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
      </article>

      {activeTab === 'chaos' && (
        <section className="chat-area">
          {messages.map((message) => (
            <article key={message.id} className="message">
              <section className="message-container">
                <p className="author">{message.author}</p>
                <p className="content">{message.message}</p>
              </section>
              <section className="reaction-buttons">
                <button
                  className={`like-button ${message.liked ? 'liked' : ''}`}
                  onClick={() => handleLike(message.id)}
                >
                  Like
                </button>
                <button
                  className={`dislike-button ${message.disliked ? 'disliked' : ''}`}
                  onClick={() => handleDislike(message.id)}
                >
                  Dislike
                </button>
              </section>
            </article>
          ))}
        </section>
      )}

      {activeTab === 'beauty' && (
        <article className="image-area">
          {messages.map((message) => (
            <section key={message.id} className="image-container">
              <p className="image-author">{message.author}</p>
              <img
                src={message.imageUrl}
                alt="Meme"
                className="meme-image"
                onError={() => {
                  setMessages((prevMessages) =>
                    prevMessages.filter((m) => m.id !== message.id)
                  );
                }}
              />
              <section className="reaction-buttons">
                <button
                  className={`like-button ${message.liked ? 'liked' : ''}`}
                  onClick={() => handleLike(message.id)}
                >
                  Like
                </button>
                <button
                  className={`dislike-button ${message.disliked ? 'disliked' : ''}`}
                  onClick={() => handleDislike(message.id)}
                >
                  Dislike
                </button>
              </section>
            </section>
          ))}
        </article>
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
    </section>
  );
};

export default InternetArt;
