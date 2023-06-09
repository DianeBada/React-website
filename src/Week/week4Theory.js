import React from 'react';
import '../Styles/weekblog.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { Link } from 'react-router-dom';


function WeekFourTheory() {
  return (
    <>
      <h1>Context and Conventions - creating meaning on the web</h1>
      <p className="date">Posted on April 15, 2023</p>
      <main>
        <section className="blog-content">
          <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba" alt="Photo of a student studying" />
          <p>
            "Conventions and Context" by Steven Mailloux discusses the role of conventions in shaping meaning in literature. Mailloux argues that conventions are not arbitrary, but are instead shaped by the historical and cultural contexts in which they are used. Conventions are not fixed or rigid, but are instead flexible and adaptable to changing circumstances. Furthermore, conventions are not simply rules that must be followed, but are resources that writers can use to create meaning. Mailloux also emphasizes the role of context in shaping literary conventions, arguing that conventions are constantly evolving in response to changing cultural and historical contexts.
            The concepts Mailloux discusses are also relevant to web development, internet art, and interactive media. These fields have their own set of conventions that are shaped by the cultural and historical contexts in which they exist. Understanding these conventions and the contexts that shape them is crucial for creating effective and meaningful web content and interactive experiences.
            In web development, conventions play a significant role in shaping the user experience. Websites and web applications rely on a set of conventions that users have come to expect. For example, users expect to find navigation menus at the top or side of a webpage, and they expect hyperlinks to be underlined and change color when they are hovered over. These conventions are not arbitrary, but have evolved over time in response to user needs and expectations. Web developers must be aware of these conventions and use them effectively to create intuitive and user-friendly web experiences.
            At the same time, web developers must also be aware of the context in which their websites and applications will be used. Different user groups may have different expectations and needs, and web developers must be able to adapt to these different contexts. For example, a website designed for an older demographic may need to use larger fonts and simpler navigation menus than a website designed for a younger demographic. By understanding the context in which their websites and applications will be used, web developers can create content that is more effective and engaging.
            In internet art, conventions play a similar role in shaping the meaning of the work. Like literature, internet art has its own set of conventions that are shaped by the historical and cultural contexts in which it exists. Internet art is often characterized by its use of digital media, interactivity, and networked communication. These conventions have evolved over time as artists have explored the possibilities of digital technology and the internet.
            However, like literary conventions, internet art conventions are not fixed or rigid. Instead, they are constantly evolving in response to changes in technology and cultural context. For example, internet art in the 1990s often emphasized the use of glitch and error as a way of challenging the conventions of traditional media. In contrast, contemporary internet art often emphasizes the use of social media and networked communication as a way of exploring the social and political implications of digital technology.
            Understanding the conventions and context of internet art is crucial for creating effective and meaningful works. Internet artists must be aware of the historical and cultural context in which their works exist, and they must be able to use the conventions of the medium effectively to create works that are engaging and thought-provoking.
            In interactive media, conventions also play a significant role in shaping the user experience. Interactive media includes a wide range of digital media, such as video games, virtual reality experiences, and interactive installations. These media rely on a set of conventions that users have come to expect, such as intuitive controls and feedback systems. Like web development, understanding these conventions and using them effectively is crucial for creating engaging and effective interactive experiences.
            At the same time, interactive media creators must also be aware of the context in which their works will be experienced. Different user groups may have different expectations and needs, and interactive media creators must be able to adapt to these different contexts. For example, a virtual reality experience designed for children may need to have simpler controls and shorter play times than a virtual reality experience designed for adults.
            In all of these fields, the concepts of conventions and context are closely intertwined. Conventions are shaped by the historical and cultural contexts in which they exist, and are constantly evolving in response to changing circumstances. At the same time, conventions are resources that creators can use to create meaning, and must be used effectively in order to create engaging and effective works.
            Understanding the role of conventions and context in web development, internet art, and interactive media is crucial for creating works that are engaging, effective, and meaningful. By understanding the conventions and context of these fields, creators can use them effectively to create works that are innovative and thought-provoking. However, creators must also be aware of the ways in which conventions and context can limit creativity and reinforce existing power structures. By critically examining the conventions and context of their respective fields, creators can work to challenge and subvert these structures, creating works that are truly revolutionary.
          </p>        
        </section>
        <section className="button-container-bottom">
          <Link to = "/Week4">
            <button className="button button-left-bottom">
              <ArrowCircleLeftIcon/> Previous
            </button>
            </Link>          
            <Link to = "/Week5">
            <button className="button button-right-bottom">
              Next <ArrowCircleRightIcon/>
            </button>
            </Link>       
             </section>
      </main>
    </>
  );
}

export default WeekFourTheory;
