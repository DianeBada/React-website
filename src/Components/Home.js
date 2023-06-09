import React, { useEffect, useState } from 'react';
import '../Styles/Home.css';

const Home = () => {
  const [phrases, setPhrases] = useState([]);
  const [opacity, setOpacity] = useState(0.001);
  const [clickedCount, setClickedCount] = useState(0);
  const [showIntroText, setShowIntroText] = useState(true);

  const phrasesToShow = 60;
  const maxWordsPerPhrase = 14;

  const getRandomPosition = () => {
    const x = Math.floor(Math.random() * (window.innerWidth - 200));
    const y = Math.floor(Math.random() * (window.innerHeight - 50));
    return { x, y };
  };

  const getRandomVelocity = () => {
    const speed = Math.floor(Math.random() * 3) + 3;
    const angle = Math.random() * Math.PI * 2;
    const vx = Math.cos(angle) * speed;
    const vy = Math.sin(angle) * speed;
    return { vx, vy };
  };

  const getRedditPosts = async (subreddit, sorting) => {
    const url = `https://www.reddit.com/r/${subreddit}/${sorting}.json`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      const titles = data.data.children.map((child) => child.data.title);
      const filteredTitles = titles.filter(
        (title) => title.split(' ').length <= maxWordsPerPhrase
      );
      return filteredTitles;
    } catch (error) {
      console.error(`Error fetching Reddit posts: ${error}`);
      return [];
    }
  };

  const addPhrases = async () => {
    const phrases = await getRedditPosts('college', 'top');
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

  useEffect(() => {
    addPhrases();
  }, []);

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

        if (newX < 0 || newX > window.innerWidth - 200) {
          phrase.vx = -vx;
          newX = x - vx;
        }

        if (newY < 0 || newY > window.innerHeight - 50) {
          phrase.vy = -vy;
          newY = y - vy;
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
  }, []);

  useEffect(() => {
    updateVisibility();
  }, [clickedCount]);

  const renderPhrases = () => {
    return phrases.map((phrase, index) => (
      <div
        key={index}
        className="phrase"
        style={{ left: `${phrase.x}px`, top: `${phrase.y}px` }}
        onClick={handlePhraseClick}
      >
        {phrase.title}
      </div>
    ));
  };

  return (
    <div>
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
        <div className="background"></div>
      </section>
      <div className="phrases-container">{renderPhrases()}</div>
    </div>
  );
};

export default Home;
