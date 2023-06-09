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
import BlogContent from './Pages/BlogContent';
import BlogPage from './Pages/BlogPage';

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
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
