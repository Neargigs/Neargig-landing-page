import React from "react";
import aboutImage from "../assets/img/about.jpg"; // Uncomment and update the path if needed

const Blogs = () => {
  return (
    <section id="recent-blog-posts" className="recent-blog-posts section">
      {/* Section Title */}
      <div className="container section-title">
        <h2>Recent Blog Posts</h2>
      </div>
      {/* End Section Title */}

      <div className="container">
        <div className="row gy-5">
          {/* Post Item 1 */}
          <div className="col-xl-4 col-md-6">
            <div className="post-item position-relative h-100">
              <div className="post-img position-relative overflow-hidden">
                <img src={aboutImage} className="img-fluid" alt="" />
                <span className="post-date">December 12</span>
              </div>

              <div className="post-content d-flex flex-column">
                <h3 className="post-title">
                  Inside Web3 HR: Insights from De.Fi’s Head of HR
                </h3>

                <div className="meta d-flex align-items-center">
                  <p id="blogpara">
                    Discover how Web3 is reshaping HR practices with insights
                    from a leading expert in the field...
                  </p>
                </div>

                <hr />

                <a href="blog-details.html" className="readmore stretched-link">
                  <span>Read More</span>
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          {/* End Post Item 1 */}

          {/* Post Item 2 */}
          <div className="col-xl-4 col-md-6">
            <div className="post-item position-relative h-100">
              <div className="post-img position-relative overflow-hidden">
                <img src={aboutImage} className="img-fluid" alt="" />
                <span className="post-date">July 17</span>
              </div>

              <div className="post-content d-flex flex-column">
                <h3 className="post-title">
                  Embracing Change: HR in the World of Digital Assets
                </h3>

                <div className="meta d-flex align-items-center">
                  <p id="blogpara">
                    Hotcoin’s HR shares her journey from traditional industries
                    to the world of Web3 and crypto, highlighting key insights
                    on thriving in this...
                  </p>
                </div>

                <hr />

                <a href="blog-details.html" className="readmore stretched-link">
                  <span>Read More</span>
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          {/* End Post Item 2 */}

          {/* Post Item 3 */}
          <div className="col-xl-4 col-md-6">
            <div className="post-item position-relative h-100">
              <div className="post-img position-relative overflow-hidden">
                <img src={aboutImage} className="img-fluid" alt="" />
                <span className="post-date">September 05</span>
              </div>

              <div className="post-content d-flex flex-column">
                <h3 className="post-title">
                  Introducing Base and the Birth of Base Incubator by NearGigs
                </h3>

                <div className="meta d-flex align-items-center">
                  <p id="blogpara">
                    Discover Base's innovative L2 solution addressing
                    scalability, security, and user experience challenges in
                    crypto. Learn about...
                  </p>
                </div>

                <hr />

                <a href="blog-details.html" className="readmore stretched-link">
                  <span>Read More</span>
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          {/* End Post Item 3 */}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
