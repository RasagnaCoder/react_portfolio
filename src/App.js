import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import MyResume from './components/MyResume';
import MyProjects from './components/MyProjects';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import Activity from './components/Activity';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
const App=()=>{
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/AboutMe" element={<AboutMe/>}/>
        <Route path="/ContactMe" element={<ContactMe/>}/>
        <Route path="/Activity" element={<Activity/>}/>
        <Route path="/MyProjects" element={<MyProjects/>}/>
        <Route path="/MyResume" element={<MyResume/>}/>
        
      </Routes>
      
      <Footer/>
    </div>
    

  );

}
export default App;