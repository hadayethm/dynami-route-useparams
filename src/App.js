import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./page";
import About from './page/about';
import Service from './page/service';
import Details from './page/details';
import Blog from './page/blog';
import Navbar from './component/Navbar';
function App() {
  return (
    <div className="App">




      <Router>
      <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/blog" element={<Blog/>}/>
          <Route exact path="/service" element={<Service/>}/>
          <Route exact path="/blogs/:id" element={<Details/>}/>
        </Routes>
    </Router>
    </div>
  );
}

export default App;
