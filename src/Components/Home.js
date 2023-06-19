import React, { useEffect, useState, useRef } from 'react';
import '../Styles/Home.css';
import '../Styles/Glitch.css';

const Home = ({ screenRef }) => {
  const [phrases, setPhrases] = useState([]);
  const [opacity, setOpacity] = useState(0.001);
  const [clickedCount, setClickedCount] = useState(0);
  const [showIntroText, setShowIntroText] = useState(true);

  const phrasesToShow = 30;
  const maxWordsPerPhrase = 40;
  const phrasesContainerRef = useRef(null); // Ref for phrases container

  const getRandomPosition = () => {
    const container = screenRef.current;
    const containerRect = container.getBoundingClientRect();
  
    const x = Math.floor(Math.random() * containerRect.width);
    const y = Math.floor(Math.random() * containerRect.height);
    return { x, y };
  };
  const getRandomVelocity = () => {
    const speed = Math.floor(Math.random() * 1.5) + 1.5;
    const angle = Math.random() * Math.PI * 2;
    const vx = Math.cos(angle) * speed;
    const vy = Math.sin(angle) * speed;
    return { vx, vy };
  };

  const getRedditPosts = async (subreddit) => {
    const url = `https://www.reddit.com/r/${subreddit}.json?limit=${phrasesToShow}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      const posts = data.data.children.map((child) => child.data.title);
      const filteredPosts = posts.filter(
        (post) => post.split(' ').length <= maxWordsPerPhrase
      );
      return filteredPosts;
    } catch (error) {
      console.error(`Error fetching Reddit posts: ${error}`);
      return [];
    }
  };
  

  const addPhrases = async () => {
    const phrases = await getRedditPosts('youngadults');
    const numPhrasesToShow = Math.min(phrases.length, phrasesToShow);
    const newPhrases = [];
  
    for (let i = 0; i < numPhrasesToShow; i++) {
      const position = getRandomPosition();
      const velocity = getRandomVelocity();

      const phrase = {
        title: phrases[i].split(' ').slice(0, maxWordsPerPhrase).join(' '),
        x: position.x,
        y: position.y,
        vx: velocity.vx,
        vy: velocity.vy,
      };

      newPhrases.push(phrase);
    }

    setPhrases(newPhrases);
  };

  const handlePhraseClick = () => {
    setClickedCount((prevClickedCount) => prevClickedCount + 1);
    setShowIntroText(false);
  };

  const updatePhrases = () => {
    setPhrases((prevPhrases) => {
      const updatedPhrases = prevPhrases.map((phrase) => {
        const vx = phrase.vx;
        const vy = phrase.vy;
        const x = phrase.x;
        const y = phrase.y;
  
        let newX = x + vx;
        let newY = y + vy;
  
        // Get the dimensions of the phrases container
        const container = screenRef.current;
        const containerRect = container.getBoundingClientRect();
        const containerWidth = containerRect.width;
        const containerHeight = containerRect.height;
  
        // Define the bounce distance from the bottom of the screen div
        const bounceDistance = 140; // Adjust this value as needed
  
        // Check if the phrase has reached or exceeded the edges of the container
        if (newX <= 0 || newX >= containerWidth - 200) {
          phrase.vx = -vx; // Reverse the horizontal velocity
          newX = x + phrase.vx; // Update the new x position
        }
  
        // Check if the phrase has reached the top or bottom edges of the container
        if (newY <= 0 || newY >= containerHeight - bounceDistance) {
          phrase.vy = -vy; // Reverse the vertical velocity
          newY = y + phrase.vy; // Update the new y position
  
          // Adjust the new y position to stay within the container bounds
          if (newY <= 0) {
            newY = 0;
          } else if (newY >= containerHeight - bounceDistance) {
            newY = containerHeight - bounceDistance;
          }
        }
  
        return {
          ...phrase,
          x: newX,
          y: newY,
        };
      });
  
      return updatedPhrases;
    });
  };
  
  

  const updateVisibility = () => {
    const opacityFactor = 0.005;
    const newOpacity = opacity + clickedCount * opacityFactor;
    setOpacity(newOpacity);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      updatePhrases();
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, [phrases]);

  useEffect(() => {
    updateVisibility();
  }, [clickedCount]);

  useEffect(() => {
    addPhrases();
  }, []);

  const renderPhrases = () => {
    return phrases.map((phrase, index) => (
      <div
      key={index}
      className="phrase"
      style={{ left: `${phrase.x}px`, top: `${phrase.y}px`, fontSize: '12px' }}
      onClick={handlePhraseClick}
    >
        {phrase.title}
      </div>
    ));
  };

  return (
    <div className="home-container" ref={phrasesContainerRef}>
      {showIntroText && (
        <div className="intro-text" onClick={handlePhraseClick}>
          <h1 className="intro-title">Click the phrases</h1>
          <p className="intro-description">
            Discover the beauty behind the madness!
          </p>
        </div>
      )}
      <section className="hero" style={{ opacity }}>
        <h1 className="title1">Beauty in</h1>
        <h1 className="title2">Student Chaos</h1>
      </section>
      <div className="phrases-container">{renderPhrases()}</div>
    </div>
  );
};

export default Home;
