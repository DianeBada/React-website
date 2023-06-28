import React from 'react';
import '../Styles/weekblog.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { Link } from 'react-router-dom';
function WeekThree() {
  return (
    <div>
      <h1>Mini Reflection!</h1>
      <p className="date">Posted on May 10, 2023</p>
      <main>
        <section className="blog-content">
          <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba" alt="Photo of a student studying" />
          <p>Being an IM student and delving into the world of internet art has been a captivating and challenging experience. Throughout my journey, I have encountered various struggles that tested my perseverance and problem-solving skills. The process of mastering concepts like using states and props within React, implementing dynamic rendering, and ensuring code efficiency has been both rewarding and frustrating. Despite the difficulties, I have found alternative solutions and sought assistance when needed, realizing the importance of resourcefulness and collaboration. </p>

          <p>Exploring internet art has allowed me to unleash my creativity and think outside the box. From incorporating random images from online communities to envisioning interactive elements like colored balls or thought bubbles, I have sought to create engaging and immersive experiences for users. While there have been moments of self-doubt and dissatisfaction with initial attempts, I recognize that these are opportunities for growth and refinement.</p>

<p>Looking towards the future, I am excited about the potential of my projects and the possibilities they hold. The struggles I have faced have only deepened my determination to refine my work, to strive for greater substance, and to enhance user experiences. I envision further development, incorporating diverse perspectives and platforms to create a more holistic and thought-provoking internet art experience. As I continue to learn and adapt, I am confident in my ability to overcome future challenges and create meaningful, visually compelling digital experiences that leave a lasting impact.</p>
          
        </section>

        <section className="button-container-bottom">
          <Link to = "/week13">
            <button className="button button-left-bottom">
              <ArrowCircleLeftIcon/> Previous
            </button>
            </Link>          
            <Link to = "/UIXTwo">
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
