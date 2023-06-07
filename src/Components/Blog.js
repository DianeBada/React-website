// import React, { Component, useEffect } from 'react';
// import $ from 'jquery';
// import '../Styles/blogcss.css';
// import myImage from '../images/Author.jpg';
// import { Link } from 'react-router-dom';

// const BlogReact = () => {
//   useEffect(() => {
//     // nav background
//     const header = document.querySelector("header");
//     if (header) {
//       window.addEventListener("scroll", () => {
//         header.classList.toggle("shadow", window.scrollY > 0);
//       });
//     }

//     // Filter
//     $(".filter-item").click(function () {
//       const value = $(this).attr("data-filter");
//       if (value === "all") {
//         $(".post-box").show("1000");
//       } else {
//         $(".post-box")
//           .not("." + value)
//           .hide(1000);
//         $(".post-box")
//           .filter("." + value)
//           .show("1000");
//       }
//     });

//     $(".filter-item").click(function () {
//       $(this).addClass("active-filter").siblings().removeClass("active-filter");
//     });
//   }, []);


//     return (
//         <div>
        
//         <section className="home" id="home">
//         <div className="home-text container">
//           <h2 className="home-title">Trend Blogger</h2>
//           <span className="home-subtitle">Your source of great content</span>
//         </div>
//       </section>
//       <section className="about container" id="about">
//         <div className="contentBx">
//             <h2 className="titleText">Catch up with a university student</h2>
//             <p className="title-text">
//                 As a university student, the journey can be chaotic, stressful, and challenging. Yet, within that chaos, there is a certain beauty that exists. It is a beauty that emerges from the resilience, determination, and creativity of students who navigate through the ups and downs of academic life. This blog explores the beauty behind the chaos, delving into the unique experiences, perspectives, and insights that make the student journey so remarkable. Join me on this journey as we uncover the hidden beauty that lies behind the students' chaos.
//             </p>
//             <a href="#" class="btn2">Read more</a>
//         </div>
//         <div class="imgBx">
//             <img src={myImage} alt="" class="fitBg"/>
//         </div>
//     </section>
//       <div className="post-filter container">
//         <span className="filter-item active-filter" data-filter="all">All</span>
//         <span className="filter-item" data-filter="tech">Theory</span>
//         <span className="filter-item" data-filter="food">Dev Blog</span>
//     </div>
    
//     <div className="post container">
//         {/* Post 1 */}
//         <div className="post-box tech">
//             <img src="images/img1.jpg" alt="" class="post-img"/>
//             <h2 className="category">Theory</h2>
//             <Link to ="/Week3"  class="post-title">Week 3</Link>
//             <span className="post-date">15 March 2023</span>
//             <p className="post-description">A reflection on week 3</p>
//             <div className="profile">
//                 <img src= {myImage} alt="" class="profile-img"/>
//                 <span className="profile-name">Diane Bada</span>
//             </div>
//         </div>
//         {/* Post 1 */}
//         <div className="post-box food">
//             <img src="images/img1.jpg" alt="" class="post-img"/>
//             <h2 className="category">Dev Blog</h2>
//             <Link to ="/Week4"  class="post-title">Week 4</Link>
//             <span className="post-date">17 March 2023</span>
//             <p className="post-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, similique, rerum excepturi harum, vitae facilis corrupti vel modi debitis est perferendis aut quasi ea unde repudiandae iste architecto. Corporis, voluptates.</p>
//             <div className="profile">
//             <img src= {myImage} alt="" class="profile-img"/>
//                 <span className="profile-name">Diane Bada</span>
//             </div>
//         </div>

        
//         {/* Post 1 */}
//         <div className="post-box tech">
//             <img src="images/img1.jpg" alt="" class="post-img"/>
//             <h2 className="category">Theory</h2>
//             <Link to ="/Week4Theory"  class="post-title">Week 4 Readings</Link>
//             <span className="post-date">23 March 2023</span>
//             <p className="post-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, similique, rerum excepturi harum, vitae facilis corrupti vel modi debitis est perferendis aut quasi ea unde repudiandae iste architecto. Corporis, voluptates.</p>
//             <div className="profile">
//             <img src= {myImage} alt="" class="profile-img"/>
//                 <span className="profile-name">Diane Bada</span>
//             </div>
//         </div>
//         {/* Post 1 */}
//         <div className="post-box food">
//             <img src="images/img1.jpg" alt="" class="post-img"/>
//             <h2 className="category">Dev Blog</h2>
//             <Link to ="/Week5"  class="post-title">Week 5</Link>
//             <span className="post-date">23 March 2023</span>
//             <p className="post-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, similique, rerum excepturi harum, vitae facilis corrupti vel modi debitis est perferendis aut quasi ea unde repudiandae iste architecto. Corporis, voluptates.</p>
//             <div className="profile">
//             <img src= {myImage} alt="" class="profile-img"/>
//                 <span className="profile-name">Diane Bada</span>
//             </div>
//         </div>
//         {/* Post 1 */}
//         <div className="post-box tech">
//             <img src="images/img1.jpg" alt="" class="post-img"/>
//             <h2 className="category">Theory</h2>
//             <Link to ="/Week5Theory"  class="post-title">Week 5 - Readings</Link>
//             <span className="post-date">12 Feb 2022</span>
//             <p className="post-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, similique, rerum excepturi harum, vitae facilis corrupti vel modi debitis est perferendis aut quasi ea unde repudiandae iste architecto. Corporis, voluptates.</p>
//             <div className="profile">
//             <img src= {myImage} alt="" class="profile-img"/>
//                 <span className="profile-name">Diane Bada</span>
//             </div>
//         </div>
//         {/* Post 1 */}
//         <div className="post-box food">
//             <img src="images/img1.jpg" alt="" class="post-img"/>
//             <h2 className="category">Dev Blog</h2>
//             <Link to ="/Week6"  class="post-title">Week 6</Link>
//             <span className="post-date">5 April 2023</span>
//             <p className="post-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, similique, rerum excepturi harum, vitae facilis corrupti vel modi debitis est perferendis aut quasi ea unde repudiandae iste architecto. Corporis, voluptates.</p>
//             <div className="profile">
//             <img src= {myImage} alt="" class="profile-img"/>
//                 <span className="profile-name">Diane Bada</span>
//             </div>
//         </div>
//         {/* Post 1 */}
//         <div className="post-box food">
//             <img src="images/img1.jpg" alt="" class="post-img"/>
//             <h2 className="category">Dev Blog</h2>
//             <Link to ="/Week7"  class="post-title">Week 7</Link>
//             <span className="post-date">10 April 2023</span>
//             <p className="post-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, similique, rerum excepturi harum, vitae facilis corrupti vel modi debitis est perferendis aut quasi ea unde repudiandae iste architecto. Corporis, voluptates.</p>
//             <div className="profile">
//             <img src= {myImage} alt="" class="profile-img"/>
//                 <span className="profile-name">Diane Bada</span>
//             </div>
//         </div>
//         {/* Post 1 */}
//         <div className="post-box tech">
//             <img src="images/img1.jpg" alt="" class="post-img"/>
//             <h2 className="category">Theory</h2>
//             <Link to ="/WeekUIUX"  class="post-title">Critical Reflection on UI and UX</Link>
//             <p className="post-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, similique, rerum excepturi harum, vitae facilis corrupti vel modi debitis est perferendis aut quasi ea unde repudiandae iste architecto. Corporis, voluptates.</p>
//             <div className="profile">
//             <img src= {myImage} alt="" class="profile-img"/>
//                 <span className="profile-name">Diane Bada</span>
//             </div>
//         </div>
//         {/* Post 1 */}
//         <div className="post-box food">
//             <img src="images/img1.jpg" alt="" class="post-img"/>
//             <h2 className="category">Dev Blog</h2>
//             <Link to ="/WeekReflection"  class="post-title">Rationale and Reflection on Internet Art</Link>
//             <span className="post-date">21 April 2023</span>
//             <p className="post-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, similique, rerum excepturi harum, vitae facilis corrupti vel modi debitis est perferendis aut quasi ea unde repudiandae iste architecto. Corporis, voluptates.</p>
//             <div className="profile">
//             <img src= {myImage} alt="" class="profile-img"/>
//                 <span className="profile-name">Diane Bada</span>
//             </div>
//         </div>
//     </div>

   
       
//       </div>
//     );
//   }


// export default BlogReact;
