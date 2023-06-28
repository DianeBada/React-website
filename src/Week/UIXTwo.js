import React from 'react';
import '../Styles/weekblog.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { Link } from 'react-router-dom';


function UIX() {
  return (
    <section>
      <h1>Enhancing User Experience through Thoughtful Design Choices: Back to UI and UX </h1>
      <p className="date">Posted on June 20, 2023</p>
      <main>
        <section className="blog-content">
          <img
            src="https://images.unsplash.com/photo-1519681393784-d120267933ba"
            alt="Photo of a student studying"
          />
        <h2>Visual Design, Navigation, and Readability: </h2>
        <p>The website employs a well-structured and intuitive layout, complemented by a clear and accessible navigation bar. Each page is accurately labeled, allowing users to easily identify and access different sections. When hovering over the navigation items, they are visually highlighted, providing visual feedback and aiding in user orientation. Furthermore, upon landing on a specific page, a prominent heading immediately communicates the user's current location, ensuring clarity and navigation ease.</p>
        <p>To ensure readability, the website implements appropriate font sizes, enabling users to comfortably read the content without straining their eyes. The color contrast between the background and font color is carefully considered, avoiding any readability issues. This thoughtful approach to typography contributes to an enjoyable reading experience for users.
In the case of the integration of a monitor-styled layout, it creates a visually engaging and immersive experience. The monitor motif not only aligns with the overarching concept of the website but also allows users to identify with the student experience, symbolizing the digital environment in which students spend a significant amount of their time. This unique and creative design choice sets the stage for an immersive and relatable experience.
</p>

<h2>Responsiveness and Accessibility: </h2>
<p>The website demonstrates responsiveness by optimizing its design for different screen sizes. Whether accessed from a desktop, tablet, or mobile device, the website adapts its layout and elements to provide a consistent and visually pleasing experience. This responsiveness allows users to engage with the website seamlessly, regardless of the device they are using. Moreover, the website prioritizes accessibility by implementing alt image texts. These texts describe the content of images, ensuring that users with visual impairments can understand the visual elements presented. By including these alternative texts, the website promotes inclusivity and enables all users to engage with the content effectively.</p>

<h2>Semantic Markup and Accessibility: </h2>
<p>The website embraces semantic markup to provide a more accessible experience for all users, including those with disabilities. By utilizing semantic HTML elements like header, nav, main, article, section, and footer, the website's content becomes more structured and comprehensible. This semantic structure not only benefits screen readers in interpreting and conveying information accurately but also enables users to navigate the website more efficiently.</p>

<h2>Functionality and User Engagement: </h2>
<p>The website employs several interactive elements to enhance user engagement and provide a satisfying user experience. Clear and intuitive buttons, such as the backward and forward buttons, guide users through the website, inviting them to navigate effortlessly. These buttons serve as calls to action (CTAs), encouraging users to explore further and facilitating a seamless browsing experience.</p>
<p>The homepage of the website cleverly prompts users to click on phrases to uncover the beauty hidden within the chaos. This interactive element creates an element of surprise and curiosity, inviting users to engage actively with the content. By incorporating such interactive features, the website fosters a sense of exploration and personal connection, keeping users engaged and interested.
The inclusion of like and dislike buttons for memes and posts enables users to express their preferences and actively participate in the content curation process. This interactive element not only encourages users to connect with the content but also fosters a sense of community by allowing them to engage with other users' contributions.
</p>
<p>Additionally, the decision to integrate an API from Reddit demonstrates a strategic move to bring relevant and relatable content to the website. By leveraging an existing platform known for its vibrant communities, the website taps into a vast pool of content that resonates with its target audience. This integration enriches the overall user experience, ensuring a constant stream of fresh and engaging content. Managing state using Redact’s useState and useEffect hooks played a key role in enabling this dynamic behaviour.</p>  

<p>While the website excels in many aspects, ongoing efforts can focus on overcoming challenges, such as implementing a functioning message bar for user-generated comments, to further enhance user interaction and community building. By continuing to prioritize usability, accessibility, and interactivity, the website can continue to evolve and provide an exceptional user experience for students navigating the digital landscape.</p>
      </section>
        <section className="button-container-bottom">
          <Link to = "/Week14">
            <button className="button button-left-bottom">
              <ArrowCircleLeftIcon/> Previous
            </button>
            </Link>          
            <Link to = "/RoadTo">
            <button className="button button-right-bottom">
              Next <ArrowCircleRightIcon/>
            </button>
            </Link>       
             </section>
      </main>
    </section>
  );
}

export default UIX;
