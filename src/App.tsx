import React from 'react';
import './App.css';
import BlahHeader from './components/blah_header/blah_header';
import BlahFooter from './components/blah_footer/blah_footer';
// import photo from './assets/AshikPaul-BW.jpg';
// // import photo from './assets/AshikPaul.jpg';
import sqPhoto from './assets/Ash_color.jpg';
import Projects from './components/projects/projects';
import Showcase from './components/showcase/showcase';
import Experience from './components/experience/experience';
import Education from './components/education/education';
import Awards from './components/awards/awards';

function App() {
  return (
    <div className="App">  
      <BlahHeader/>
      <section className="resume-section" id="about">
        <a className="navbar-brand js-scroll-trigger" href="#page-top">
          <span className="d-block d-lg-none">Ashik Paul</span><span className="d-none d-lg-block">
            <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={sqPhoto} alt="" /></span>
        </a>
        <div className="resume-section-content">          
          <h1 className="mb-0">Ashik <span className="text-primary">Paul</span></h1>
          <div className="subheading mb-5">Bengaluru, Karnataka, India · (+91) 7090656470 · <a href="ashikpaul17@gmail.com">MAIL</a></div>
          <p className="lead mb-5">Innovative, customer-focused, and result-driven Web Developer with 3 years of hands-on experience in all phases of Software Development Life Cycle, building and maintaining web applications (Front- and Back-end) using React.js, TypeScript, JavaScript, C#. Passionate about code optimization and reusability. </p>
          <div>
            <button className="btn resume-btn">Resume</button>
          </div>
          <br/>
          <div className="social-icons">
              <a className="social-icon" href="https://www.linkedin.com/in/ashik-paul-2ab793130/"><i className="fab fa-linkedin-in"></i></a>
              <a className="social-icon" href="https://github.com/AshikPaul"><i className="fab fa-github"></i></a>             
              {/* <a className="social-icon" href="https://www.facebook.com/ashik.paul.908/"><i className="fab fa-facebook-f"></i></a> */}
          </div>
        </div>
      </section>
      <Experience/>      
      <Projects/>
      <Showcase/>
      <Awards/>
      <Education/>
      <BlahFooter/>
    </div>
  );
}

export default App;
