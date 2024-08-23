import React from "react";
import person from "../assets/img/testimonials/testimonials-2.jpg";

// Define your data structure for jobs, freelance jobs, and gigs
const jobsData = [
  {
    id: 1,
    logo: person,
    title: "Senior Graphic Designer",
    date: "Posted 2 days ago",
    location: "Boston, USA | Full-time | Remote",
    tags: ["Design & Creative", "Motion Design", "Graphic Design"],
  },
  {
    id: 2,
    logo: person,
    title: "Blockchain Developer",
    date: "Posted 5 days ago",
    location: "San Francisco, USA | Full-time | On-site",
    tags: ["Development", "Blockchain", "Solidity"],
  },
  {
    id: 3,
    logo: person,
    title: "Senior Graphic Designer",
    date: "Posted 2 days ago",
    location: "Boston, USA | Full-time | Remote",
    tags: ["Design & Creative", "Motion Design", "Graphic Design"],
  },
  {
    id: 4,
    logo: person,
    title: "Blockchain Developer",
    date: "Posted 5 days ago",
    location: "San Francisco, USA | Full-time | On-site",
    tags: ["Development", "Blockchain", "Solidity"],
  },
  {
    id: 5,
    logo: person,
    title: "Senior Graphic Designer",
    date: "Posted 2 days ago",
    location: "Boston, USA | Full-time | Remote",
    tags: ["Design & Creative", "Motion Design", "Graphic Design"],
  },
  {
    id: 6,
    logo: person,
    title: "Blockchain Developer",
    date: "Posted 5 days ago",
    location: "San Francisco, USA | Full-time | On-site",
    tags: ["Development", "Blockchain", "Solidity"],
  },
  // Add more jobs as needed
];

const freelanceJobsData = [
  {
    id: 1,
    logo: person,
    title: "Virtual Assistant for Marketing and Sales",
    assigner: "John Doe",
    description:
      "We're seeking a highly motivated and tech-savvy Virtual Assistant to join our dynamic team. You'll play a crucial role.",
    tags: ["Design & Creative", "Motion Design", "Graphic Design"],
    price: "$1,200",
  },
  {
    id: 2,
    logo: person,
    title: "Virtual Assistant for Marketing and Sales",
    assigner: "Jane Smith",
    description:
      "We're seeking a highly motivated and tech-savvy Virtual Assistant to join our dynamic team. You'll play a crucial role...",
    tags: ["Development", "Blockchain", "Solidity"],
    price: "$2,500",
  },
  {
    id: 3,
    logo: person,
    title: "Virtual Assistant for Marketing and Sales",
    assigner: "John Doe",
    description:
      "We're seeking a highly motivated and tech-savvy Virtual Assistant to join our dynamic team. You'll play a crucial role.",
    tags: ["Design & Creative", "Motion Design", "Graphic Design"],
    price: "$1,200",
  },
  {
    id: 4,
    logo: person,
    title: "Virtual Assistant for Marketing and Sales",
    assigner: "Jane Smith",
    description:
      "We're seeking a highly motivated and tech-savvy Virtual Assistant to join our dynamic team. You'll play a crucial role...",
    tags: ["Development", "Blockchain", "Solidity"],
    price: "$2,500",
  },
  // Add more freelance jobs as needed
];

const gigsData = [
  {
    id: 1,
    logo: person,
    title: "Junior Frontend Developer",
    assigner: "John Doe",
    description: "Promoting memecoin, crypto social media & investment sites",
    tags: ["React", "JavaScript", "HTML/CSS"],
    price: "$1200",
    rating: "★★★★☆",
  },
  {
    id: 2,
    logo: person,
    title: "Backend Developer",
    assigner: "Jane Smith",
    description: "Promoting memecoin, crypto social media & investment sites",
    tags: ["Node.js", "API", "MongoDB"],
    price: "$2500",
    rating: "★★★★☆",
  },
  {
    id: 3,
    logo: person,
    title: "Junior Frontend Developer",
    assigner: "John Doe",
    description: "Promoting memecoin, crypto social media & investment sites",
    tags: ["React", "JavaScript", "HTML/CSS"],
    price: "$1200",
    rating: "★★★★☆",
  },
  {
    id: 4,
    logo: person,
    title: "Backend Developer",
    assigner: "Jane Smith",
    description: "Promoting memecoin, crypto social media & investment sites",
    tags: ["Node.js", "API", "MongoDB"],
    price: "$2500",
    rating: "★★★★☆",
  },
  // Add more gigs as needed
];

const Jobs = () => {
  return (
    <section id="crypto-jobs" className="crypto-jobs dark-background">
      <div className="container">
        <h3 className="sitename">Crypto Jobs</h3>
        <p>Find your next job in the crypto industry.</p>

        {/* Filter Section */}
        <div className="filter-section">
          <input
            type="text"
            className="search-bar"
            placeholder="Search for jobs..."
          />
          <select className="role-filter">
            <option value="">All Roles</option>
            <option value="design">Design</option>
            <option value="development">Development</option>
            <option value="marketing">Marketing</option>
            {/* Add more roles as needed */}
          </select>
          <select className="sort-by-filter">
            <option value="latest">Latest</option>
            <option value="oldest">Oldest</option>
            <option value="relevance">Relevance</option>
            {/* Add more sort options as needed */}
          </select>
        </div>

        {/* Job List Cards */}
        <div className="job-list">
          {jobsData.map((job) => (
            <div className="job-card" key={job.id}>
              <div className="job-card-header">
                <img
                  src={job.logo}
                  alt="Company Logo"
                  className="company-logo"
                />
                <h4 className="job-title">{job.title}</h4>
                <div className="job-meta">
                  <span className="job-date">{job.date}</span>
                  <i className="save-icon">&#9734;</i>
                </div>
              </div>
              <div className="job-info">
                <p>{job.location}</p>
                <div className="job-tags">
                  {job.tags.map((tag, index) => (
                    <span key={index}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="pagination">
          <a href="#">&laquo;</a>
          <a href="#" className="active">
            1
          </a>
          <a href="#">2</a>
          <a href="#">3</a>
          <a href="#">&raquo;</a>
        </div>

        {/* Freelance Jobs Section */}
        <div
          style={{ marginTop: "50px" }}
          id="freelancee"
          className="container"
        >
          <h3 className="sitename">New Freelance Crypto Jobs</h3>
          <p>663 Jobs on our Platform</p>

          {/* Freelance Job List Cards */}

          <div className="joblistcas">
            <div className="freelance-job-list">
              {freelanceJobsData.map((job) => (
                <div className="freelance-job-card" key={job.id}>
                  <div className="freelance-job-card-body">
                    <img
                      src={job.logo}
                      alt="Company Logo"
                      className="freelance-company-logo"
                    />
                    <div className="freelance-job-details">
                      <h4 className="freelance-job-title">{job.title}</h4>
                      <p className="freelance-task-assigner">{job.assigner}</p>
                      <p className="freelance-job-description">
                        {job.description}
                      </p>
                      <div className="freelance-job-tags">
                        {job.tags.map((tag, index) => (
                          <span key={index}>{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="freelance-job-card-footer">
                    <p className="freelance-job-price">{job.price}</p>
                    <button className="freelance-more-info-btn">
                      More Info
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <a
                style={{ textAlign: "center" }}
                href="/"
                className="btn-get-started"
              >
                Post New Job
              </a>
            </div>
          </div>

          {/* Gigs Section */}
          <div id="browsegig" className="gig-job-container">
            <div className="gig-job-list-wrapper">
              <div className="gig-job-header">
                <h3 className="gig-job-sitename">New Gigs</h3>
                <p>36,654 Gigs on our Platform</p>
                <a href="#" className="gig-job-show-all">
                  Show all gig jobs
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.5 4.5a.5.5 0 0 1 .5.5v3H12a.5.5 0 0 1 0 1H9v3a.5.5 0 0 1-.8.4l-5-4a.5.5 0 0 1 0-.8l5-4a.5.5 0 0 1 .8.4z"
                    />
                  </svg>
                </a>
              </div>
              <div className="gig-job-list">
                {gigsData.map((gig) => (
                  <div className="gig-job-card" key={gig.id}>
                    <div className="gig-job-card-body">
                      <img
                        src={gig.logo}
                        alt="Company Logo"
                        className="gig-job-company-logo"
                      />
                      <div className="gig-job-details">
                        <h4 className="gig-job-title">{gig.title}</h4>
                        <p className="gig-job-task-assigner">{gig.assigner}</p>
                        <p className="gig-job-description">{gig.description}</p>
                        <div className="gig-job-tags">
                          {gig.tags.map((tag, index) => (
                            <span key={index}>{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="gig-job-card-footer">
                      <span className="gig-job-price">{gig.price}</span>
                      <button className="freelance-more-info-btn">
                        More Info
                      </button>
                    </div>
                    <div className="gig-job-rating">{gig.rating}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jobs;
