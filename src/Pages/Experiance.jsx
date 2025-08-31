import React from "react";

const Experiance = () => {
  return (
    <>
      <div className="experience">
        <h1 data-aos="zoom-in">Experience</h1>
        <div className="links">

          <div className="custom-card">
            <div className="card-body">
              <h3 data-aos="zoom-in">Internship Certificate</h3>
              <p data-aos="zoom-in">
                Successfully completed internship program in Frontend Developement from Developer Hub Corporation.
              </p>
            </div>
            <div className="overlay">
              <a
                href="./src/assets/Completion Certificate (19)-93 (2).pdf"
                target="_blank"
                rel="noreferrer"
              >
                View Certificate
              </a>
            </div>
          </div>

          <div className="custom-card">
            <div className="card-body">
              <h3 data-aos="zoom-in">Offer Letter</h3>
              <p data-aos="zoom-in">
                Official offer letter for the role of Junior Web Developer.
              </p>
            </div>
            <div className="overlay">
              <a
                href="./src/assets/Nooruleman .pdf"
                target="_blank"
                rel="noreferrer"
              >
                View Letter
              </a>
            </div>
          </div>

          <div className="custom-card">
            <div className="card-body">
              <h3 data-aos="zoom-in">Fem Hack SMIT Certification</h3>
              <p data-aos="zoom-in">
                Completed Web & Mobile Application Development Hackathon from Saylani (2025).
              </p>
            </div>
            <div className="overlay">
              <a
                href="./src/assets/Copy of Nooruleman Femhack Certificate .pdf"
                target="_blank"
                rel="noreferrer"
              >
                View Certificate
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experiance;
