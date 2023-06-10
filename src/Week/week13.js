import React from 'react';
import '../Styles/weekblog.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { Link } from 'react-router-dom';
function WeekThree() {
  return (
    <div>
      <h1>Week 13 - Thought bubbles and memes!</h1>
      <p className="date">Posted on May 10, 2023</p>
      <main>
        <section className="blog-content">
          <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba" alt="Photo of a student studying" />
          <p>This week, I decided to tackle the biggest challenge I was facing—the blog section, specifically the blog entries. It has been a frustrating experience, leading to moments of frustration where I felt like banging the table, pulling my hair out, and breaking my code multiple times. Realizing that I might need assistance with this particular issue, I came to the conclusion that for the exam submission, I should have sought additional guidance and conducted more research to overcome it. However, instead of dwelling on what I couldn't achieve, I found an alternative solution that, although it doesn't meet my initial requirement of using props to feed the blog entry page information, will suffice for now. To navigate to the appropriate page, I created separate blog entry pages. While this approach isn't efficient in terms of code, defeating the purpose of using props, I added a property within the BlogContent that dynamically renders the blog cards. This property includes links, so when a blog card is clicked, it checks the link property and directs the user to the specific blog entry. Although it isn't as efficient as I had hoped, it still works, and I'm glad I have something functional. I will continue working on it for the exams. </p>

          <p>In addition, I decided to explore my internet art page. I had an idea of having randomly colored balls bouncing up and down the page, symbolizing the chaotic mind of a student filled with different elements. When a ball is clicked, it retrieves a random image from the College Memes subreddit, displays it for a few seconds, and then disappears. I wasn't satisfied with my previous internet art page, but with this concept, I believe I have something to build upon and potentially develop for my final submission. I'm considering using speech bubbles or thought bubbles of various colors instead of just balls. When a bubble is clicked, it could display posts made by college students, and I could expand beyond Reddit to include platforms like Quora and Twitter to gather more perspectives and thoughts from college students worldwide. To tie everything together, I may have these thought bubbles randomly appear on other pages, allowing users to click them to see someone else's feelings and thoughts before they disappear. Unfortunately, I haven't fully fleshed out this idea yet, but I believe that with the implementation of colored balls and memes, I have a starting point from which I can build, modify, and refine my final internet art page.</p>

          
        </section>

        <section className="button-container-bottom">
          <Link to = "/AfricanArt">
            <button className="button button-left-bottom">
              <ArrowCircleLeftIcon/> Previous
            </button>
            </Link>          
            <Link to = "/week14">
            <button className="button button-right-bottom">
              Next <ArrowCircleRightIcon/>
            </button>
            </Link>       
             </section>
      </main>
    </div>
  );
}

export default WeekThree;
