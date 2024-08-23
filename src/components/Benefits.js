import React from "react";
import reputationBanner from "../assets/img/reputation-banner-2x.png"; // Uncomment if using this image

const Benefits = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-6 position-relative order-lg-last">
            <img
              src={reputationBanner} // Update with the correct path to your image
              className="img-fluid"
              alt=""
            />
          </div>

          <div className="col-lg-6 content">
            <h3>Benefits</h3>

            <ul>
              <li>
                <i className="bi bi-fullscreen-exit"></i>
                <div>
                  <h5>Low Commissions</h5>
                  <p>
                    While popular freelancing platforms charge users as much as
                    20%, our blockchain-based decentralised approach means our
                    commissions are as low as 10% for Freelancers and 0% for
                    Customers. Premium account holders will enjoy fee-free use
                    of LaborX, and other major benefits!
                  </p>
                </div>
              </li>

              <li>
                <i className="bi bi-fullscreen-exit"></i>
                <div>
                  <h5>Reputation</h5>
                  <p>
                    The ‘Reputation’ module protects users while providing a
                    feedback system to help select the best Freelancers and
                    Clients. Our algorithm accounts for factors such as previous
                    experience and education, reviews, completed contracts and
                    more. Variables are weighted according to their importance
                    and overall relevance.
                  </p>
                </div>
              </li>

              <li>
                <i className="bi bi-fullscreen-exit"></i>
                <div>
                  <h5>Crypto Payments</h5>
                  <p>
                    NearGigs supports a range of popular tokens on the Near
                    networks, providing fast, efficient settlement between
                    Customers and Freelancers anywhere in the world.
                  </p>
                </div>
              </li>

              <li>
                <i className="bi bi-fullscreen-exit"></i>
                <div>
                  <h5>Digital Contract</h5>
                  <p>
                    Set the conditions of how you'll work together, including
                    deadlines and payment terms, using the Contract module. We
                    protect your financial engagement through digital escrow by
                    locking all funds once the contract is signed - releasing
                    them automatically once the work has been completed and
                    accepted.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
