import React, { useEffect, useState } from 'react';

const Home = () => {
  const [phrases, setPhrases] = useState([]);
  const [clickedIndex, setClickedIndex] = useState(-1);

  const maxWordsPerPhrase = 14;
  const phrasesToShow = 60;

  const getRandomPosition = () => {
    const x = Math.floor(Math.random() * (window.innerWidth - 200));
    const y = Math.floor(Math.random() * (window.innerHeight - 50));
    return { x, y };
  };

  const getRandomVelocity = () => {
    const speed = Math.floor(Math.random() * 1.5) + 1.5; // Decreased speed
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
      const filteredTitles = titles.filter((title) => title.split(' ').length <= maxWordsPerPhrase);
      setPhrases(filteredTitles);
    } catch (error) {
      console.error(`Error fetching Reddit posts: ${error}`);
      setPhrases([]);
    }
  };

  const handlePhraseClick = (index) => {
    setClickedIndex(index);
  };

  useEffect(() => {
    const addPhrases = async () => {
      await getRedditPosts('college', 'top');
    };

    addPhrases();
  }, []);

  useEffect(() => {
    const updatePhrases = () => {
      const phraseElements = document.querySelectorAll('.phrase');
      phraseElements.forEach((phraseElement) => {
        const vx = Number(phraseElement.dataset.vx);
        const vy = Number(phraseElement.dataset.vy);
        const x = Number(phraseElement.style.left.replace('px', ''));
        const y = Number(phraseElement.style.top.replace('px', ''));
    
        let newX = x + vx;
        let newY = y + vy;
    
        if (newX < 0 || newX > window.innerWidth - 200) {
          phraseElement.dataset.vx = -vx;
          newX = x - vx;
        }
    
        if (newY < 0 || newY > window.innerHeight - 50) {
          phraseElement.dataset.vy = -vy;
          newY = y - vy;
        }
    
        phraseElement.style.left = `${newX}px`;
        phraseElement.style.top = `${newY}px`;
      });
    };
    

    const intervalId = setInterval(updatePhrases, 50);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const renderPhrases = () => {
    return phrases.slice(0, phrasesToShow).map((phrase, index) => {
      const position = getRandomPosition();
      const velocity = getRandomVelocity();

      if (index === clickedIndex) {
        return null; // Skip rendering the clicked phrase
      }
      const phraseClass = `phrase ${clickedIndex === index ? 'visible' : ''} flying`;

      return (
        <div
          key={index}
          className="phrase"
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            transform: `translate(${velocity.vx}px, ${velocity.vy}px)`,
          }}
          data-vx={velocity.vx}
          data-vy={velocity.vy}
          onClick={() => handlePhraseClick(index)}
        >
          {phrase.split(' ').slice(0, maxWordsPerPhrase).join(' ')}
        </div>
      );
    });
  };

  return <div className="phrases-container">{renderPhrases()}</div>;
};

export default Home;
