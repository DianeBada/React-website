import React from 'react';
import { Link } from 'react-router-dom';
import myImage from '../images/Author.jpg';
import '../Styles/blogcss.css';
import blogContent from './BlogContent'; // Import the blog content data

const BlogPage = () => {
  return (
    <div className="post container">
      {blogContent.map((post) => (
        <section className="post-box" key={post.id}>
          <img src={post.image} alt="" className="post-img" />
          <h2 className="category">{post.category}</h2>
          <Link to={post.link} className="post-title">
            {post.title}
          </Link>
          <span className="post-date">{post.date}</span>
          <p className="post-description">{post.description}</p>
          <section className="profile">
            <img src={myImage} alt="" className="profile-img" />
            <span className="profile-name">{post.author}</span>
          </section>
        </section>
      ))}
    </div>
  );
};

export default BlogPage;
