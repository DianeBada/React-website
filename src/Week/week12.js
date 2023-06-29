import React from 'react';
import '../Styles/weekblog.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { Link } from 'react-router-dom';
function WeekThree() {
  return (
    <div>
      <h1>Light at the end of the tunnel!</h1>
      <p className="date">Posted on May 10, 2023</p>
      <main>
        <section className="blog-content">
          <img src="https://static.vecteezy.com/system/resources/thumbnails/022/719/994/small/the-man-at-the-end-of-the-tunnel-and-the-light-ai-generated-photo.jpg" alt="Photo showing light at the end of the tunnel" />
          <p>This week, I focused on an area that I knew needed improvement. Initially, I encountered an issue with my wireframes. The container was meant to display three images per slide, and when the arrow buttons were pressed or swiped, the next three wireframes should appear. This functionality worked fine with vanilla JavaScript, but when attempting it in React, it seemed nearly impossible. In a previous project, I had used the Swiper module, which had both JavaScript and CSS functions. In the React environment, it appeared that the CSS was imported correctly, but the JavaScript function wasn't working. Additionally, the wireframe images were outside the container, adding to the confusion. Despite installing the Swiper module through the terminal in my project directory, it still didn't function as expected. Eventually, I managed to display three images within the container, but they were too small for users to see. This led me to explore an alternative approach. Instead, I assigned each image its own slide, aiming to improve readability for users, allowing them to focus on one wireframe at a time and examine the details. Once I achieved this, I felt relieved and moved on to the next task. </p>

          <p>Next, I wanted to enhance my homepage with a function I didn't have time to implement previously. The idea was to have the background image start off nearly invisible and gradually become brighter and more vivid with each click on a phrase. It sounded simple, but it proved challenging to implement. I encountered problems where either I could get the function of clicking the phrases and increasing the opacity to work, or I could have the phrases floating around without the ability to click on them for opacity control. It took several hours, or dare I say, a few days, to find a solution that allowed both functionalities to work simultaneously: floating phrases with clickable opacity increase. After reviewing my code, I realized that my functions were correct, but the order of logic was the issue that prevented the homepage from functioning as intended. Eventually, I managed to resolve it, and I was thrilled about the outcome. This addition has made my page more interactive and engaging for visitors. Overall, it has been a productive week.</p>

          
        </section>

        <section className="button-container-bottom">
          <Link to = "/AIndArt">
            <button className="button button-left-bottom">
              <ArrowCircleLeftIcon/> Previous
            </button>
            </Link>          
            <Link to = "/AfricanArt">
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
