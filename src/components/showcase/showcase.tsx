import React from 'react';
import './showcase.css'
// import JS  from '../../assets/Javascript.png';
// import Node  from '../../assets/Node.png';

function Showcase() {
  return (
    <div className="showcaseSection">
      <section className="resume-section" id="skills">
          <div className="resume-section-content">
              <h1 className="mb-5">Skills</h1>
              <div className="subheading mb-3">Programming Languages & Tools</div>
              <ul className="list-inline dev-icons">
                <li className="list-inline-item"><i className="fab fa-html5"></i></li>
                <li className="list-inline-item"><i className="fab fa-css3-alt"></i></li>
                <li className="list-inline-item"><i className="fab fa-js-square"></i></li>
                <li className="list-inline-item"><i className="fab fa-react"></i></li>
                <li className="list-inline-item"><i className="fab fa-node-js"></i></li>
                <li className="list-inline-item"><i className="fab fa-sass"></i></li>
                <li className="list-inline-item"><i className="fab fa-gulp"></i></li>
                <li className="list-inline-item"><i className="fab fa-npm"></i></li>
              </ul>
          </div>
      </section>
      <hr className="m-0" />  
    </div>
  );
}

export default Showcase;