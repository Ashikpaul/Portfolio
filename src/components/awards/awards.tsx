import React from 'react';
import './awards.css';

function Awards() {
  return (
    <div className="awards">
      <section className="resume-section" id="awards">
        <div className="resume-section-content">
            <h1 className="mb-5">Awards & Certifications</h1>
            <ul className="fa-ul mb-0">
                <li>
                  <span className="fa-li">
                    <i className="fas fa-trophy text-warning"></i>
                  </span>Awarded <b>Star of the Month</b> in March 2017 at Ellucian 
                </li>
                <li>
                  <span className="fa-li">
                    <i className="fas fa-trophy text-warning"></i>
                  </span>Nominated for <b>Top Performer of the Year</b> 2018-2019 at SACHA Engineering Pvt. Ltd. 
                </li>
                <li>
                  <span className="fa-li">
                    <i className="fas fa-trophy text-warning"></i>
                  </span>Award of Excellence in Academics 2012-2013
                </li>
                <li>
                  <span className="fa-li">
                    <i className="fas fa-trophy text-warning"></i>
                  </span>Award of Excellence in Academics 2008-2011
                </li>
                <li>
                  <span className="fa-li">
                    <i className="fas fa-trophy text-warning"></i>
                  </span>Awarded certificate of appreciation for being regular and punctual student – SJPUC 2010-2011 and 2011-2012
                </li>              
            </ul>
        </div>
      </section>
    </div>
  );
}

export default Awards;