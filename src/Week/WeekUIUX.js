import React from 'react';
import '../Styles/weekblog.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { Link } from 'react-router-dom';


function WeekUIUX() {
  return (
    <section>
      <h1>Critical Reflection on my UI and UX</h1>
      <p className="date">Posted on April 18, 2023</p>
      <main>
        <section className="blog-content">
          <img
            src="https://www.mindinventory.com/blog/wp-content/uploads/2021/03/mobile-app-design-fundamentals-the-difference-between-UI-and-UX.webp"
            alt="Photo showing the difference between UI and UX"
          />
          <p>As a web design student, I have evaluated the user interface (UI) and user experience (UX) of my website, and this is the reflection I came up with.
  First and foremost, the website's design is visually appealing and consistent with its theme. The color scheme is well-chosen, and the font style is appropriate for the content. However, I did notice a few issues with the layout. The website's structure is not entirely intuitive, and it may take users some time to find the content they are looking for, such as the design section page. The three buttons could perhaps be something else or bigger. The navigation menu is not prominent, and it could be improved by using larger font sizes or changing its placement (which I have increased the size of the nav bar and its text).
  Furthermore, the website's UI is not mobile-friendly, well not all the pages are responsiveness. When viewed on a mobile device, some of the images and text become distorted, making it difficult for users to read and navigate the site. This can lead to a frustrating user experience and may deter users from returning to the site in the future.
  Another issue that I noticed with the website's UX is its loading time. The website takes a long time to load, which can be frustrating for users, and may cause them to leave the site altogether. This can be a significant issue, as it could impact my site's search engine ranking and make it difficult for users to access my content. What I’ve done to try minimizing loading time is have the images file size reduced. 
  Right now, I’m quite unsure on some of the placements of my elements. Such as the wireframes, does the manner in which I positioned them and have them functioning right for users? Does it intuitively say, “hey click on these arrows to view more wireframes” or does it just look totally strange there. 
  In conclusion, while my website has an attractive design and visually appealing layout, there are several issues with its UI and UX that need to be addressed. These include improving the navigation menu, making the site mobile-friendly, reducing loading time. By addressing these issues, I can enhance the overall user experience of your website and make it more accessible and user-friendly for all visitors.
  
  </p>
        </section>
        <section className="button-container-bottom">
          <Link to = "/Week7">
            <button className="button button-left-bottom">
              <ArrowCircleLeftIcon/> Previous
            </button>
            </Link>          
            <Link to = "/WeekReflection">
            <button className="button button-right-bottom">
              Next <ArrowCircleRightIcon/>
            </button>
            </Link>       
             </section>
      </main>
    </section>
  );
}

export default WeekUIUX;
