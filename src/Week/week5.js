import React from 'react';
import '../Styles/weekblog.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { Link } from 'react-router-dom';

function Week5() {
  return (
    <>
      <h1>Week 5</h1>
      <p className="date">Posted on April 15, 2023</p>
      <main>
        <section className="blog-content">
          <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba" alt="Photo of a student studying" />
          <p>This week, my creative pursuits led me towards the realm of internet art. Although I found myself initially drawn to the captivating phrases displayed on the front page of Reddit, I was uncertain if such content could truly be classified as a form of internet art. Therefore, I began to contemplate a more purposeful approach to developing my internet art page. Inspired by the success of utilizing a live API to retrieve images for the main page, I endeavored to incorporate this same method while focusing on images that encapsulate the unique experiences of university and college students.

            In my search for such images, I discovered an ideal subreddit entitled "college memes", which served as a catalyst for my innovative breakthrough. The multitude of memes created by students depicting the beauty amidst the chaos of the educational journey served as the perfect embodiment of my desired theme. My concept revolved around the use of floating colored circles on the page, which upon clicking, would trigger the display of an image retrieved via the live API.
            
            While the implementation of the floating circles was relatively smooth, I encountered a major challenge in retrieving unique images. Despite setting the parameters of the fetch function to retrieve up to 50 different images, I found myself facing the repeated display of a single image. I endeavored to troubleshoot this issue but instead found myself faced with unexpected errors which necessitated the installation of PRAW - a python Reddit wrapper. Despite my best efforts, I still encountered additional errors which ultimately led me to pause the development of my internet art page, leaving it at the stage of random circles generating on the screen.
            
            However, I remain undeterred and committed to exploring this innovative avenue further. I will continue to examine the potential causes of my issues and seek out additional resources and support to refine my concept or devise a new one altogether, with the goal of creating a truly unique and engaging internet art experience.</p>
          <p>Whether it's the satisfaction of finishing a challenging assignment, the excitement of learning something new, or the joy of connecting with classmates, there are moments of beauty that make it all worthwhile.</p>
        </section>

        <section className="button-container-bottom">
          <Link to = "/Week4Theory">
            <button className="button button-left-bottom">
              <ArrowCircleLeftIcon/> Previous
            </button>
            </Link>          
            <Link to = "/Week5Theory">
            <button className="button button-right-bottom">
              Next <ArrowCircleRightIcon/>
            </button>
            </Link>       
             </section>
      </main>
    </>
  );
}

export default Week5;
