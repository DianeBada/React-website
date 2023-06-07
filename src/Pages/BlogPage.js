import React from 'react';
import { Link } from 'react-router-dom';
import myImage from '../images/Author.jpg';
import '../Styles/blogcss.css';

const BlogPage = ({ posts }) => {
  return (
    <div className="post container">
      {posts.map((post) => (
        <div className="post-box" key={post.id}>
          <img src={post.image} alt="" className="post-img" />
          <h2 className="category">{`Week ${post.week}`}</h2>
          <Link to={`/week/${post.week}`} className="post-title">
  {post.title}
</Link>

          <span className="post-date">{post.date}</span>
          <p className="post-description">{post.content}</p>
          <div className="profile">
            <img src={myImage} alt="" className="profile-img" />
            <span className="profile-name">{post.author}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
