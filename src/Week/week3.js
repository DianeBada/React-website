import React from 'react';
import '../Styles/weekblog.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { Link } from 'react-router-dom';
function WeekThree() {
  return (
    <div>
      <h1>Beauty and Chaos in Student Life</h1>
      <p className="date">Posted on April 28, 2023</p>
      <main>
        <section className="blog-content">
          <img src="https://schloss-post.com/content/uploads/screen-shot-2017-04-18-at-20.28.21.png" alt="Photo of an example of net art" />
          <p>The first article that I read, "Net Art, Post-Internet Art & New Aesthetics: The Fundamentals of Art on the Internet" by Danae Io, was about the different categories of internet art. It was interesting to see the various types of internet art that have emerged over the years, but I found it confusing to classify them. The article highlighted the diversity of internet art, including net art, software art, web art, and digital installation art. It was fascinating to see how artists have leveraged technology to create art that is interactive and engages with the audience in novel ways. As a developer, I appreciated the technical aspects of internet art and the way that artists have utilized programming languages to create their works.</p>

          <p>The second article, "The work of art in the age of the internet," I read was about the challenges of measuring developer productivity. It was a thought-provoking piece that examined the different metrics that are used to measure productivity in software development teams. The article argued that traditional metrics like lines of code and commits are not sufficient to capture the complexity of software development and proposed new metrics like code review feedback and knowledge sharing. As a developer, I found this article particularly relevant because it highlighted the importance of collaboration and communication in software development.</p>

          <p>Moving on to the JavaScript tutorial videos, I found them incredibly informative and engaging. Although they were quite long, I appreciated the thoroughness of the tutorials and how they explained concepts in a way that was accessible to beginners. As someone who loves to learn new ways to solve challenges, I found these tutorials to be a great resource. I enjoyed the way that the videos presented the material in a clear and concise manner, and I appreciated the focus on practical examples.</p>

          <p>Overall, these articles and videos were both informative and engaging. They reminded me of the importance of creativity, collaboration, and communication in software development and encouraged me to continue learning and exploring new technologies. I look forward to continuing to expand my knowledge and skills as a developer, and I am grateful for the resources that are available to support my journey.</p>
        </section>

        <section className="button-container-bottom">
          <Link to = "/Blog">
            <button className="button button-left-bottom">
              <ArrowCircleLeftIcon/> Previous
            </button>
            </Link>          
            <Link to = "/Week4">
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
