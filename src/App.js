import './App.css';
import Navbar from './Components/Navbar'
import { Route, Routes} from 'react-router-dom';
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
    <div className="App">
      <Navbar/>
      <div className = "content">
    <Routes>
    <Route exact path ='/' element={<Home/>}/>
    <Route exact path="/Blog" element={<BlogHome/>} />
    <Route path="/blog/posts/:id" element={<BlogPage posts={BlogContent} />} />
     <Route exact path ='/DesignSection' element={<DesignSection/>}/>
     <Route exact path ='/Wireframe' element={<Wireframe/>}/>
     <Route exact path ='/StyleGuide' element={<StyleGuide/>}/>
     <Route exact path ='/IxDProcess' element={<IxDProcess/>}/>
     <Route exact path ='/DataArt' element={<DataArt/>}/>
     <Route exact path="/BlogHome" element={<BlogHome/>} />  










    </Routes>
    </div>
    <Footer/>
    </div>
    
  );
}

export default App;
