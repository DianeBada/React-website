import './App.css';
import Navbar from './Components/Navbar'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Footer from './Components/footer';
import DesignSection from './Pages/DesignSection';
import Wireframe from './Pages/Wireframe';
import StyleGuide from './Pages/styleGuide';
import IxDProcess from './Pages/IxDProcess';
import DataArt from './Pages/DataArt';
import BlogHome from './Pages/blogHome';
import BlogContent from './Pages/BlogContent'; // Update the import statement
import BlogPage from './Pages/BlogPage';
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






function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Blog" element={<BlogHome />} />
            <Route path="/blog/posts/:id" element={<BlogPage posts={BlogContent} />} />
            <Route path="/DesignSection" element={<DesignSection />} />
            <Route path="/Wireframe" element={<Wireframe />} />
            <Route path="/StyleGuide" element={<StyleGuide />} />
            <Route path="/IxDProcess" element={<IxDProcess />} />
            <Route path="/DataArt" element={<DataArt />} />
            <Route path="/BlogHome" element={<BlogHome />} />
            <Route path="/week3" element={<Week3 />} />
            <Route path="/week4" element={<Week4 />} />
            <Route path="/week4Theory" element={<Week4Theory />} />
            <Route path="/week5" element={<Week5 />} />
            <Route path="/week5Theory" element={<Week5Theory />} />
            <Route path="/week6" element={<Week6 />} />
            <Route path="/week7" element={<Week7 />} />
            <Route path="/WeekUIUX" element={<WeekUIUX />} />
            <Route path="/WeekReflection" element={<WeekReflection/>} />
            <Route path="/week9" element={<Week9 />} />
            <Route path="/CodeArt" element={<CodeArt />} />
            <Route path="/AfricanArt" element={<AfricanArt />} />
            <Route path="/AIndArt" element={<AIndArt />} />
            <Route path="/week11" element={<Week11 />} />       
                 <Route path="/week12" element={<Week12 />} />
                 <Route path="/week13" element={<Week13 />} />
                 <Route path="/week14" element={<Week14 />} />









          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
