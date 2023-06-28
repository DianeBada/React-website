import './App.css';
import Navbar from './Components/Navbar';
import React, { useRef, useState } from 'react'; // Import useRef directly
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Footer from './Components/footer';
import DesignSection from './Pages/DesignSection';
import Wireframe from './Pages/Wireframe';
import StyleGuide from './Pages/styleGuide';
import IxDProcess from './Pages/IxDProcess';
import BlogHome from './Pages/blogHome';
import Week3 from './Week/week3';
import Week4 from './Week/week4';
import Week4Theory from './Week/week4Theory';
import Week5 from './Week/week5';
import Week5Theory from './Week/week5Theory';
import Week6 from './Week/week6';
import Week7 from './Week/week7';
import WeekReflection from './Week/WeekReflection';
import Week9 from './Week/week9';
import CodeArt from './Week/CodeArt';
import AIndArt from './Week/AIndArt';
import AfricanArt from './Week/AfricanArt';
import WeekUIUX from './Week/WeekUIUX';
import Week11 from './Week/week11';
import Week12 from './Week/week12';
import Week13 from './Week/week13';
import Week14 from './Week/week14';
import Internet from './Components/IternetArt';
import RoadTo from './Week/RooadTo';
import UIX from './Week/UIXTwo';
import End from './Week/End';

function App() {
  const screenRef = useRef(null);
  const aluminumBodyRef = useRef(null);
  const [isBlogPage, setIsBlogPage] = useState(false);

  return (
    <Router>
      <div className={`mac-desktop ${isBlogPage ? 'blog-page' : ''}`}>
        <div className="macbook-container">
          <div className="macbook">
            <Navbar />
            <div className="screen" ref={screenRef}>
              <Routes>
                <Route
                  path="/"
                  element={<Home screenRef={screenRef} />}
                />
                <Route
                  path="/Blog"
                  element={
                    <BlogHome setIsBlogPage={setIsBlogPage} />
                  }
                />
              <Route exact path ='/DesignSection' element={<DesignSection/>}/>
              <Route exact path ='/Wireframe' element={<Wireframe/>}/>
              <Route exact path ='/StyleGuide' element={<StyleGuide/>}/>
              <Route exact path ='/IxDProcess' element={<IxDProcess/>}/>
              <Route exact path ='/Internet' element={<Internet/>}/>
              <Route exact path ='/week3' element={<Week3/>}/>
              <Route exact path ='/week4' element={<Week4/>}/>
              <Route exact path ='/week4Theory' element={<Week4Theory/>}/>
              <Route exact path ='/week5' element={<Week5/>}/>
              <Route exact path ='/week5Theory' element={<Week5Theory/>}/>
              <Route exact path ='/week6' element={<Week6/>}/>
              <Route exact path ='/week7' element={<Week7/>}/>
              <Route exact path ='/week9' element={<Week9/>}/>
              <Route exact path ='/week11' element={<Week11/>}/>
              <Route exact path ='/week12' element={<Week12/>}/>
              <Route exact path ='/week13' element={<Week13/>}/>
              <Route exact path ='/week14' element={<Week14/>}/>
              <Route exact path ='/WeekUIUX' element={<WeekUIUX/>}/>
              <Route exact path ='/week9' element={<Week9/>}/>
              <Route exact path ='/WeekReflection' element={<WeekReflection/>}/>
              <Route exact path ='/AfricanArt' element={<AfricanArt/>}/>
              <Route exact path ='/AIndArt' element={<AIndArt/>}/>
              <Route exact path ='/CodeArt' element={<CodeArt/>}/>
              <Route exact path ='/End' element={<End/>}/>
              <Route exact path ='/UIXTwo' element={<UIX/>}/>
              <Route exact path ='/RoadTo' element={<RoadTo/>}/>











              </Routes>
              <Footer />
            </div>
          </div>
          <div className="aluminum-body" ref={aluminumBodyRef}></div>
          <div className="webcam"></div>
        </div>
        <div className="stand"></div>
      </div>
    </Router>
  );
}


export default App;
