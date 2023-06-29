import React, { useEffect, useState } from 'react';
import '../Styles/blogcss.css';
import myImage from '../images/Author.jpg';
import BlogPage from './BlogPage';
import blogContent from './BlogContent';

const BlogHome = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredPosts, setFilteredPosts] = useState(blogContent);

  useEffect(() => {
    const header = document.querySelector('header');
    if (header) {
      window.addEventListener('scroll', () => {
        header.classList.toggle('shadow', window.scrollY > 0);
      });
    }
  }, []);

  useEffect(() => {
    filterPosts(activeFilter);
  }, [activeFilter]);

  const filterPosts = (category) => {
    if (category === 'all') {
      setFilteredPosts(blogContent);
    } else {
      const filtered = blogContent.filter((post) => post.category.toLowerCase() === category.toLowerCase());
      console.log(filtered);
      setFilteredPosts(filtered);
    }
  };

  const handleFilterClick = (category) => {
    setActiveFilter(category);
  };

  return (
    <div className="blog-home-container">
    <section className="home" id="home">
        <section className="home-text container">
          <h2 className="home-title">Trend Blogger</h2>
          <span className="home-subtitle">Your source of great content</span>
        </section>
      </section>
      <section className="about container" id="about">
        <section className="contentBx">
          <h2 className="titleText">Catch up with a university student</h2>
          <p className="title-text">
            As a university student, the journey can be chaotic, stressful, and challenging. Yet, within that chaos, there is a certain beauty that exists. It is a beauty that emerges from the resilience, determination, and creativity of students who navigate through the ups and downs of academic life. This blog explores the beauty behind the chaos, delving into the unique experiences, perspectives, and insights that make the student journey so remarkable. Join me on this journey as we uncover the hidden beauty that lies behind the students' chaos.
          </p>
          <a href="#" className="btn2">
            Read more
          </a>
        </section>
        <section className="imgBx">
          <img src={myImage} alt="" className="fitBg" />
        </section>
      </section>
      <section className="post-filter container">
        <span
          className={`filter-item ${activeFilter === 'all' ? 'active-filter' : ''}`}
          onClick={() => handleFilterClick('all')}
        >
          All
        </span>
        <span
          className={`filter-item ${activeFilter === 'theory' ? 'active-filter' : ''}`}
          onClick={() => handleFilterClick('theory')}
        >
          Theory
        </span>
        <span
          className={`filter-item ${activeFilter === 'dev blog' ? 'active-filter' : ''}`}
          onClick={() => handleFilterClick('dev blog')}
        >
          Dev Blog
        </span>
      </section>
      <BlogPage posts={filteredPosts} />
    </div>
  );
};

export default BlogHome;