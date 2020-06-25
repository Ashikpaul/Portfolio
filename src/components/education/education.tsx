import React from 'react';
import './education.css';

function Education() {
  return (
    <div>
      <section className="resume-section" id="education">
          <div className="resume-section-content">
            <h1 className="mb-5">Education</h1>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                    <h3 className="mb-0">New Horizon College of Engineering</h3>
                    <div className="subheading mb-3">Bachelor of Engineering</div>
                    <div>Computer Science and Engineering</div>                    
                </div>
                <div className="flex-shrink-0"><span className="text-primary">August 2013 - June 2017</span></div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between">
                <div className="flex-grow-1">
                    <h3 className="mb-0">St. Joseph's Pre-University College</h3>
                </div>
                <div className="flex-shrink-0"><span className="text-primary">June 2011 - May 2013</span></div>
            </div>
          </div>
      </section>
      <hr className="m-0" />
    </div>
  );
}

export default Education;