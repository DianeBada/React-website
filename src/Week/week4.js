import React from 'react';
import '../Styles/weekblog.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { Link } from 'react-router-dom';

function Week4() {
  return (
    <>
      <h1>Boundless Creativity</h1>
      <p className="date">Posted on April 15, 2023</p>
      <main>
        <section className="blog-content">
          <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba" alt="Photo of a student studying" />
          <p>As I delved deeper into the world of internet art, I found myself captivated by the endless possibilities and the boundless creativity that this field has to offer. From exploring the intricacies of APIs to experimenting with AI-generated images, every step of the way has been a fascinating journey of discovery and learning.

            One of the most inspiring experiences that I had during this process was exploring "The Dumpster," an interactive web art project by Golan Levin and collaborators. This captivating artwork uses real postings extracted from millions of online blogs to create a visualization of the romantic lives of American teenagers. Visitors to the project can surf through tens of thousands of specific romantic relationships in which one person has "dumped" another, clicking on bubbles to reveal posts about breakups and rearranging the bubbles to create their own unique narrative.
            
            The Dumpster sparked my own creative ideas for an internet art project that I'm working on, exploring the theme of chaos and beauty in the life of a student. Drawing on AI-generated images based on prompts like "student," "chaos," "beautiful," "colorful," "drugs," and "books," I sought to capture the essence of a student's inner world - the chaos of their thoughts and emotions, the beauty of their aspirations and dreams.
            
            As I worked on developing my project, I found myself drawn to the idea of incorporating user-generated content from social media platforms like Reddit. This presented me with the challenge of working with APIs and learning how to pull data from social media platforms. It was a steep learning curve, but I was driven by my curiosity and passion to create something truly unique and captivating.
            
            Through my research, I discovered that internet art is a complex and multifaceted field that encompasses a wide range of techniques, mediums, and styles. From generative art and data visualization to interactive installations and online performances, the possibilities are virtually endless. What makes internet art so fascinating is that it blurs the lines between art, technology, and culture, creating a rich and dynamic space for exploration and experimentation.
            
            As I continued to develop my project, I realized that one of the most important aspects of internet art is the ability to engage with your audience in new and innovative ways. By incorporating elements of interactivity and user-generated content, I sought to create an immersive experience that would invite my audience to participate in the creation of the artwork itself.
            
            In the end, my internet art project took shape as a homepage that captured the essence of beauty in student chaos. Using an AI-generated image as the background, I added floating comments from Reddit about college and university life to create a sense of movement and dynamism. To enhance the immersive experience, I added audio of whispers, symbolizing the thoughts running through a student's head.
            Through this project, I discovered that internet art is not just about creating something visually stunning or technically impressive, but about connecting with your audience in a meaningful and memorable way. It's about exploring new ideas, pushing the boundaries of what's possible, and discovering the beauty in the chaos of life.</p>
        </section>

        <section className="button-container-bottom">
          <Link to = "/Week3">
            <button className="button button-left-bottom">
              <ArrowCircleLeftIcon/> Previous
            </button>
            </Link>          
            <Link to = "/Week4Theory">
            <button className="button button-right-bottom">
              Next <ArrowCircleRightIcon/>
            </button>
            </Link>       
             </section>
      </main>
    </>
  );
}

export default Week4;
