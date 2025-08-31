import React from "react";

const Project = () => {
  return (
    <>
      <div className="project">
        <h1 data-aos="fade-down">Projects</h1>
        <div className="links">

          <div className="custom-card">
            <img data-aos="fade-down" src="./src/assets/card1.jpg" alt="Expense Tracker" />
            <div className="card-body">
              <h3 data-aos="fade-down">Expense Tracker</h3>
              <p data-aos="fade-down">
                A simple app to track your daily expenses with add, edit, and delete features.
              </p>
            </div>
            <div className="overlay">
              <a href="https://my-expense-tracker-woad.vercel.app/?authuser=0" target="_blank" rel="noreferrer">
                View Project
              </a>
            </div>
          </div>

          <div className="custom-card">
            <img src="./src/assets/card2.jpg" alt="Hijab Studio" />
            <div className="card-body">
              <h3>Hijab Studio</h3>
              <p>
                An e-commerce website for hijabs with product catalog, comments and rating system.
              </p>
            </div>
            <div className="overlay">
              <a href="https://final-q1q4.vercel.app/" target="_blank" rel="noreferrer">
                View Project
              </a>
            </div>
          </div>

          <div className="custom-card">
            <img data-aos="fade-down" src="./src/assets/card3.jpg" alt="Web Dev Club" />
            <div className="card-body">
              <h3 data-aos="fade-down">Web Dev Club</h3>
              <p data-aos="fade-down">
                A community website for developers to share resources and projects.
              </p>
            </div>
            <div className="overlay">
              <a href="https://node-js-aplication.vercel.app/" target="_blank" rel="noreferrer">
                View Project
              </a>
            </div>
          </div>

          <div className="custom-card">
            <img data-aos="fade-down" src="./src/assets/card4.png" alt="News Wire" />
            <div className="card-body">
              <h3 data-aos="fade-down">News Wire</h3>
              <p data-aos="fade-down">
                A news portal fetching real-time articles from APIs with categories.
              </p>
            </div>
            <div className="overlay">
              <a href="https://news-wire-jet.vercel.app/" target="_blank" rel="noreferrer">
                View Project
              </a>
            </div>
          </div>

          <div className="custom-card">
            <img data-aos="fade-down" src="./src/assets/card5.jpg" alt="Flags Spotlight" />
            <div className="card-body">
              <h3 data-aos="fade-down">Flags Spotlight</h3>
              <p data-aos="fade-down">
                An educational app to explore country flags with details and search.
              </p>
            </div>
            <div className="overlay">
              <a href="https://flags-spotlight.vercel.app/?authuser=0" target="_blank" rel="noreferrer">
                View Project
              </a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Project;
