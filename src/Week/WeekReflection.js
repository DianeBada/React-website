import React from 'react';
import '../Styles/weekblog.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { Link } from 'react-router-dom';


function WeekReflection() {
  return (
    <div>
      <h1>Rationale and Reflection of Internet Art</h1>
      <p className="date">Posted on April 18, 2023</p>
      <main>
        <section className="blog-content">
          <img
            src="https://images.unsplash.com/photo-1519681393784-d120267933ba"
            alt="Photo of a student studying"
          />
         <p> The overall theme of my website is, “the beauty behind student chaos”. I chose this due to student’s chaos has universally proven to be a catalyst for creativity and innovation. When students are faced with a challenging and chaotic environment, they are forced to think outside the box and come up with new and creative solutions. This can lead to a wide range of interesting and exciting ideas, many of which can be expressed through art. The point of my internet art was to display the creative ways students have dealt with chaos – and that is the creativity that we call, memes. 
  Memes are a unique form of visual communication that combine humor, satire, and cultural references to create a shared experience that can be enjoyed by people from all walks of life. They are often used as a way of expressing complex ideas in a simple and accessible way, making them a perfect fit for the fast-paced and chaotic world of the internet.
  The beauty of memes is that they can be created by anyone, regardless of their artistic ability or technical expertise. All that is required is a basic understanding of internet culture and a sense of humour. This means that memes are a truly democratic form of art that anyone can participate in, regardless of their background or education.
  Furthermore, memes can be a relief for students who are experiencing the stress and chaos of university and college life. In a world where students are constantly bombarded with information and competing demands on their time and attention, memes can provide a much-needed break from the seriousness and intensity of academic life. They can be a way of expressing the frustrations and anxieties of student life in a light-hearted and humorous way, helping students to feel more connected and less alone in their experiences.
  In addition, memes can also be a way of creating a sense of community among students. By sharing memes with one another, students can create a shared language and culture that is unique to their particular institution or program. This can help to foster a sense of belonging and camaraderie among students, making it easier for them to navigate the often-overwhelming world of university and college life.
  Overall, the beauty behind student chaos is that it can be a source of inspiration and creativity, leading to new and exciting forms of art and expression. Memes are just one example of how students are using their experiences to create something unique and meaningful. By embracing the chaos of student life and finding new ways to express themselves, students are contributing to a vibrant and dynamic culture that is constantly evolving and changing.
  
  </p>
        </section>
        <section className="button-container-bottom">
          <Link to = "/WeekUIUX">
            <button className="button button-left-bottom">
              <ArrowCircleLeftIcon/> Previous
            </button>
            </Link>          
            <Link to = "/week9">
            <button className="button button-right-bottom">
              Next <ArrowCircleRightIcon/>
            </button>
            </Link>       
             </section>
      </main>
    </div>
  );
}

export default WeekReflection;
