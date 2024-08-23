import React from "react";
import heroImg from "../assets/img/hero-img.png"; // Uncomment if you're using an image

const Hero = () => {
  return (
    <section id="hero" className="hero section dark-background">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
            <h1>Find Web3 Jobs and Freelance Opportunities</h1>
            <p>
              Explore top Web3 vacancies in the blockchain industry or discover
              freelance projects that match your skills. NearGigs makes it easy
              to connect with exciting career paths and flexible work options.
            </p>
            <div className="d-flex">
              <a
                style={{ marginRight: "10px" }}
                href="#about"
                className="btn-get-started"
              >
                Find Job
              </a>
              <a href="#about" className="btn-get-started">
                Find Talent
              </a>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 hero-img">
            <img
              src={heroImg} // Update with actual path if you're using an image
              className="img-fluid animated"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
