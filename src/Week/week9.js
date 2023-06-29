import React from 'react';
import '../Styles/weekblog.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { Link } from 'react-router-dom';
function WeekThree() {
  return (
    <div>
      <h1>Hello there, React!</h1>
      <p className="date">Posted on April 28, 2023</p>
      <main>
        <section className="blog-content">
          <img src="https://repository-images.githubusercontent.com/37153337/9d0a6780-394a-11eb-9fd1-6296a684b124" alt="Photo of React js" />
          <p>This week, we embarked on our journey with React, and I must admit, it felt a bit daunting at first. Being relatively new to JavaScript, I found myself slightly overwhelmed by the prospect of using JSX throughout my entire codebase to deploy our website. Initially, I attempted to implement my homepage using traditional HTML, only to realize that React operates quite differently. However, with the help of a few tutorials, I started to grasp the fundamentals.</p>

          <p>Navigating the usage of components and understanding how to implement Routes posed some challenges for me. The video tutorial we were provided with seemed to work seamlessly, but when I attempted to apply it myself, I encountered some difficulties. Thankfully, Stack Overflow came to the rescue with a solution. Another area where I struggled was differentiating between class components and functional components. Even now, I still have some uncertainties, but somehow, it all comes together and functions as expected. I managed to successfully implement my homepage and design section within React, and surprisingly, it didn't take as long as I initially anticipated.</p>

          <p>One aspect that fascinated me was how linking works in React. Every link needs to be initiated and called in the app.js file, which is quite distinct from what we're used to in traditional HTML websites. Despite the initial unfamiliarity, I have grown to appreciate the efficiency and reusability of components. For instance, the footer and navbar are perfect examples of this. With just one code modification, the changes are automatically applied to all the pages. This streamlined approach is a stark contrast to our previous struggles with implementing JavaScript-based navbars. So, overall, I can confidently say that I'm managing well so far.</p>

          <p>Moving forward, I've begun exploring concepts such as props and useState. While I still lack full confidence in my understanding of these areas, I am aware of their importance and know that I will need to utilize them. My next objective is to implement my blog page and my internet art page. Naturally, a few concerns have arisen, particularly with regards to my internet art. Will I need to make significant code changes to ensure it aligns with React? Will the limited extent of my React knowledge necessitate altering the concept of my internet art? These questions continue to occupy my thoughts, but I am eager to explore the possibilities and find creative solutions.</p>
        </section>

        <section className="button-container-bottom">
          <Link to = "/WeekReflection">
            <button className="button button-left-bottom">
              <ArrowCircleLeftIcon/> Previous
            </button>
            </Link>          
            <Link to = "/CodeArt">
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
