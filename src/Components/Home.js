import React, { useEffect, useState } from 'react';

const Home = () => {
  const [phrases, setPhrases] = useState([]);
  const [clickedIndex, setClickedIndex] = useState(-1);

  const maxWordsPerPhrase = 14;
  const phrasesToShow = 60;

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

  useEffect(() => {
    const addPhrases = async () => {
      await getRedditPosts('college', 'top');
    };

    addPhrases();
  }, []);

  const handlePhraseClick = (index) => {
    setClickedIndex(index);
  };

  const renderPhrases = () => {
    return phrases.slice(0, phrasesToShow).map((phrase, index) => {
      if (index === clickedIndex) {
        return null; // Skip rendering the clicked phrase
      }

      const phraseClass = `phrase ${clickedIndex === index ? 'visible' : ''}`; // Include the 'visible' class

      return (
        <div
          key={index}
          className={phraseClass}
          onClick={() => handlePhraseClick(index)}
        >
          {phrase.split(' ').slice(0, maxWordsPerPhrase).join(' ')}
        </div>
      );
    });
  };

  return (
    <div>
      <section className="hero">
        <h1 className="title1">Beauty in</h1>
        <h1 className="title2">Student Chaos</h1>
        <div className="background-color"></div>
      </section>
      <div className="phrases-container">
        {renderPhrases()}
      </div>
    </div>
  );
};

export default Home;
