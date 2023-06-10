import React from 'react';
import '../Styles/weekblog.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { Link } from 'react-router-dom';
function WeekThree() {
  return (
    <div>
      <h1>Week 11 - Stupid Props and State!</h1>
      <p className="date">Posted on May 10, 2023</p>
      <main>
        <section className="blog-content">
          <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba" alt="Photo of a student studying" />
          <p>This week, I delved into using states and props within React. Initially, I was perplexed about determining which elements required value changes and what could be reusable. Honestly, I'm not even sure if that explanation makes sense. Nevertheless, I have successfully implemented my website, which closely resembles the old version. Everything functions properly except for a CSS stylesheet that seems to be affecting all the pages. I'm unsure how this issue arose, but there's a significant amount of whitespace between the page content and the footer, resulting in an unappealing appearance. I examined each stylesheet but found no apparent problems, which is quite perplexing. </p>

          <p>Shifting my focus, I started utilizing props for my blog cards and entries. Initially, I felt confident that my React website was completed well before the submission deadline. However, I recently discovered that my code efficiency and reusability would be evaluated, with props and state playing crucial roles in achieving this. Creating a template or function to display the desired information (week, title, author, image, and description) for the blog cards was a breeze. The objective was to dynamically render the blog cards without duplicating efforts. The underlying message here is to work smart, not hard. My challenge was to create a blog page that would retrieve the information stored in BlogContent. After watching some videos, including Andre's, I finally grasped the concept, or at least most of it. I also attempted to employ the same method for dynamically creating blog entries and linking them to each blog card. Hence, I introduced IDs so that if the blog card's ID matched the entry's blogID, it would render the entry. .</p>

          <p>One aspect that fascinated me was how linking works in React. Every link needs to be initiated and called in the app.js file, which is quite distinct from what we're used to in traditional HTML websites. Despite the initial unfamiliarity, I have grown to appreciate the efficiency and reusability of components. For instance, the footer and navbar are perfect examples of this. With just one code modification, the changes are automatically applied to all the pages. This streamlined approach is a stark contrast to our previous struggles with implementing JavaScript-based navbars. So, overall, I can confidently say that I'm managing well so far.</p>

          <p>This task turned out to be more challenging than I anticipated, as none of the methods I tried seemed to work. Moreover, I somehow managed to break the filtering functions for the blog cards. Previously, clicking on the Theory tab would display all theory sections, and the same for dev blogs. However, the console shows an array for the different categories, but this update isn't reflected on the page. It has been an incredibly stressful week, and I've been stuck on the blog section alone. I'm utterly exhausted. I'll revisit it in a few days' time. However, the struggle continues.</p>
        </section>

        <section className="button-container-bottom">
          <Link to = "/CodeArt">
            <button className="button button-left-bottom">
              <ArrowCircleLeftIcon/> Previous
            </button>
            </Link>          
            <Link to = "/AIndArt">
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
