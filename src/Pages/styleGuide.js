import React from "react";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { Link } from 'react-router-dom';
import '../Styles/styleguide.css'

function StyleGuide() {
  return (
    <div className = "styleguide-home-container">
      <h1 className="style-title">Style Guide</h1>

      <section className="style-container">
        <p>This is the style guide for the website.</p>
        <h2>Font</h2>
        <p>
          The font being used is Poppins. It is a sans-serif font that is easy
          to read on screens and has a modern feel.
        </p>
        <p>   Being a sans-serif font, Poppins lacks the decorative strokes and flourishes found in serif fonts, giving it a clean and minimalistic appearance. This simplicity contributes to a modern and sleek aesthetic, aligning well with the overall design and theme of the website.</p>
     
     <p>The even spacing and consistent letterforms of Poppins further enhance its readability. Each character is carefully crafted to maintain clarity, making it effortless for users to absorb the information presented on the website. This aspect is particularly crucial for blogs and theory sections where the content's legibility and comprehension are paramount.</p>


        <h2>Colors</h2>
        <p>
          
        The color scheme for the website incorporates different hues of pink, blue, green, yellow, and red. These colors are carefully chosen to evoke a sense of vibrancy, energy, and creativity, while also reflecting the theme of beauty behind student chaos.
        </p>

          <p>One of the primary colors in the scheme is a pinkish-purplish shade, which serves as a focal point and adds a touch of elegance to the overall design. This color represents the essence of beauty and femininity, symbolizing the unique experiences and perspectives of students navigating through the chaos of their educational journey.</p>

          <p>
Grey is another key color in the primary palette. It complements the vibrant hues and adds balance and sophistication to the overall aesthetic. Grey represents stability, neutrality, and a sense of grounding, providing a strong foundation for the visual elements on the website.</p>

<p>The secondary colors, such as blue, green, yellow, and red, are strategically used throughout the website to convey different emotions and evoke specific reactions from the audience. Blue, for example, is often associated with trust, tranquility, and knowledge, reflecting the learning environment and the pursuit of academic growth. Green signifies freshness, growth, and balance, representing the personal development and discovery that students experience during their educational journey. Yellow adds a touch of optimism, energy, and creativity, reflecting the vibrant and dynamic nature of student life. Red, on the other hand, symbolizes passion, intensity, and determination, highlighting the drive and enthusiasm students have in pursuing their goals.</p>

<p>
The color scheme as a whole aims to strike a balance between the chaos and beauty of student life. It embraces the diverse range of emotions and experiences students encounter, from the challenges and struggles to the moments of inspiration and personal growth. The use of these colors creates a visually appealing and engaging environment that resonates with the target audience, capturing the essence of the theme and enhancing the overall user experience.</p>


        <section className="color-block grey"></section>
        <section className="color-block pink"></section>
        <section className="color-block blue"></section>
        <section className="color-block green"></section>
        <section className="color-block yellow"></section>
        <section className="color-block red"></section>
        <section className="color-block purple"></section>


        <section className="color-block black"></section>

<p>In addition to the primary and secondary colors mentioned earlier, another significant color in the website's color scheme is black. Black is predominantly used in the blog section, which represents the more serious and sophisticated aspect of the website. This section includes theory elements and development blogs, focusing on informative and educational content.</p>
<p> Black is chosen for this section to create a sense of elegance, professionalism, and seriousness. It provides a visually striking contrast against the white text, making the content stand out and ensuring readability. The use of black conveys a sense of authority and expertise, signaling that the blog section contains valuable and insightful information for the audience.

While black dominates the background of the blog section, the page still embodies vibrant colors through the inclusion of images within the blogs. These images add visual interest, inject color, and enhance the overall aesthetic of the website. By incorporating colorful images, the blog section maintains a balance between the seriousness of the content and the vibrancy associated with student life.</p>


        <h2>Buttons</h2>
        <p>
        The buttons on the website play a significant role in creating a consistent and cohesive user experience. They follow a uniform design pattern that helps establish a sense of familiarity and predictability for users, regardless of where they encounter the buttons throughout the website.</p>
      <p>The style of the buttons is defined by rounded shapes and a color scheme that complements the overall design of the website. The buttons are predominantly black, which gives them a sleek and sophisticated appearance, aligning with the serious and theory-focused aspects of the website. The black color also serves as a contrasting backdrop for the white text, ensuring that the button labels are easily visible and legible.</p>      
    <p>
To provide visual feedback and enhance interactivity, the buttons exhibit subtle changes when users interact with them. When hovering over a button, it fills up with a grey color. This visual cue signals to the user that the button is interactive and can be clicked. It adds a touch of interactivity and responsiveness to the design, making the user interface more engaging and intuitive.</p>


<button className="button btn-example">
          Button
        </button>

        <h2>Images</h2>
        <p>
        Images play a vital role in enhancing the overall style and aesthetic of the website. They not only serve as visual elements but also contribute to the storytelling and engagement of the content. The website incorporates two types of images: memes populated from the Reddit API and images retrieved from the internet for the blog section.
        </p>

        <p>The use of memes, sourced from the Reddit API, brings a touch of humor and relatability to the website. These user-generated images capture the essence of the student experience, portraying the beauty and chaos that often coexist in academic life. By integrating these memes, the website creates a lighthearted and playful atmosphere, connecting with the target audience and fostering a sense of shared experiences.</p>

        <p>In the blog section, images retrieved from the internet are carefully selected to complement the topic of each blog post. These images serve as visual aids, helping to illustrate concepts, enhance understanding, and create an immersive reading experience. Whether it's an image related to a specific theory, a relevant illustration, or a captivating photograph, they add depth and context to the written content.</p>
        <img
            src="https://blog.studentlifenetwork.com/wp-content/uploads/2018/02/Screen-Shot-2018-02-23-at-3.10.12-PM-660x670.png"
          /> 
           <img
            src="https://img.freepik.com/free-vector/flat-african-pattern-design_23-2149376292.jpg?w=2000"
            alt="Photo of African art"
          />
               </section>

      <section className="button-container-bottom">
          <Link to = "/Wireframe">
            <button className="button button-left-bottom">
              <ArrowCircleLeftIcon/> Previous
            </button>
            </Link>          
            <Link to = "/IxDProcess">
            <button className="button button-right-bottom">
              Next <ArrowCircleRightIcon/>
            </button>
            </Link>       
             </section>
    </div>
  );
}

export default StyleGuide;
