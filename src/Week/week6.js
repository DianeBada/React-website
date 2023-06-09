import React from 'react';
import '../Styles/weekblog.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { Link } from 'react-router-dom';

function Week6() {
  return (
    <div>
      <h1>Hey, its Memes!</h1>
      <p className="date">Posted on April 15, 2023</p>
      <main>
        <section className="blog-content">
          <img
            src="https://images.unsplash.com/photo-1519681393784-d120267933ba"
            alt="Photo of a student studying"
          />
          <p>
            This week's foray into the world of internet art has been quite an
            adventure. After much contemplation, I decided to shift my approach
            and come up with a new concept. I began by researching PRAW and how
            to implement it correctly using Visual Studio Code. To my surprise,
            I discovered that I didn't even need to install it. I could
            retrieve images solely by using the fetch function in JavaScript.
            This led me to my next biggest issue: learning a lot about
            JavaScript and how to work with functions and create my own
            functions to bring my concept to life.
          </p>
          <p>
            After much brainstorming, I came up with a new concept. I would
            have an introduction that states what the beauty in student chaos
            really is, followed by a collage of memes. Each image would be
            retrieved from the college memes subreddit and placed randomly until
            a collage is made. My biggest struggle with this task was that some
            of the posts in this subreddit were not images but words. To ensure
            that only images were retrieved and not words, I had to make sure
            that the fetch function only retrieved posts that ended with a .png
            or .jpeg.
          </p>
          <p>
            Another issue that I encountered was having the introductory words
            disappear first and then having the memes appear. I tried playing
            with the duration of how long texts are displayed, but even so, the
            last text that reads "Memes" has a meme that appears first before
            the canvas is erased and then given the space for memes to populate.
            This is something that I will work on in the next iteration.
          </p>
          <p>
            A small issue that I have left unaddressed is the last text that's
            supposed to display after the explosion of the images that says
            "Thank you for watching." Even though there's a function for that,
            it does not show at the end. I tried rearranging the function and
            placing it elsewhere within my script, but it didn't work in the way
            that it should have. Despite these issues, I feel that I managed to
            implement this internet art project well. It took the most time, but
            I really wanted to see my vision come to life.
          </p>
          <p>
            However, I do worry that I might not have enough time to implement
            everything else and make my website look overall clean and good. I
            still need to make final decisions regarding the overall aesthetic
            of the page and how things will be laid out. It's important to me
            that I take the time to get this right and ensure that the user
            experience is enjoyable and easy to navigate.
          </p>
          <p>
            Overall, this experience has been quite challenging, but also
            rewarding. I've learned a lot about JavaScript and functions and how
            to implement APIs correctly. I'm excited to continue working on this
            project and see it come to fruition.
          </p>
        </section>
        <section className="button-container-bottom">
          <Link to = "/Week5Theory">
            <button className="button button-left-bottom">
              <ArrowCircleLeftIcon/> Previous
            </button>
            </Link>          
            <Link to = "/Week7">
            <button className="button button-right-bottom">
              Next <ArrowCircleRightIcon/>
            </button>
            </Link>       
             </section>
      </main>
    </div>
  );
}

export default Week6;
