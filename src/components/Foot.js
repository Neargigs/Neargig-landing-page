import React from "react";

const Foot = () => {
  return (
    <footer id="footer" className="footer dark-background">
      <div className="container footer-top">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6 footer-about">
            <a href="index.html" className="logo d-flex align-items-center">
              <span className="sitename">NearGigs</span>
            </a>
            <div className="footer-contact pt-3">
              <p>
                NearGigs Decentralized freelance marketplace on the NEAR
                blockchain, offering lower fees, transparent operations, and
                secure payments, empowering freelancers and clients to connect
                directly and control their work through community-driven
                governance.
              </p>
            </div>
            <div className="social-links d-flex mt-4">
              <a href="#" aria-label="Twitter">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="#" aria-label="Facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" aria-label="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Premium</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Terms of service</a>
              </li>
              <li>
                <a href="#">Privacy policy</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-3 footer-links">
            <h4>Categories in Jobs</h4>
            <ul>
              <li>
                <a href="#">Design & Creative Jobs</a>
              </li>
              <li>
                <a href="#">Web, Mobile & Software Jobs</a>
              </li>
              <li>
                <a href="#">Writing Jobs</a>
              </li>
              <li>
                <a href="#">Sales & Marketing Jobs</a>
              </li>
              <li>
                <a href="#">IT & Networking Jobs</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-3 footer-links">
            <h4>Crypto Jobs</h4>
            <ul>
              <li>
                <a href="#">Freelance Jobs</a>
              </li>
              <li>
                <a href="#">Full-time Jobs </a>
              </li>
              <li>
                <a href="#">Gigs</a>
              </li>
              <li>
                <a href="#">Freelancers</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container copyright text-center mt-4">
        <p>
          © <span>Copyright</span>
          <strong className="px-1 sitename">NearGigs 2024</strong>
          <span>All Rights Reserved</span>
        </p>
      </div>

      {/* Scroll Top Button */}
      <a
        href="#"
        id="scroll-top"
        className="scroll-top d-flex align-items-center justify-content-center"
        aria-label="Scroll to top"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </footer>
  );
};

export default Foot;
