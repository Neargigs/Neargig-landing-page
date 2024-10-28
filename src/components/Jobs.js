import React from "react";
import person from "../assets/img/testimonials/avater.jpg";

// Define your data structure for jobs, freelance jobs, and gigs
const jobsData = [
  {
    id: 1,
    logo: person,
    title: "Senior Graphic Designer",
    date: "Posted 3 days ago",
    location: "Boston, USA | Full-time | Remote",
    tags: ["Design & Creative", "Motion Design", "Graphic Design"],
  },
  {
    id: 2,
    logo: person,
    title: "Blockchain Developer",
    date: "Posted 5 days ago",
    location: "San Francisco, USA | Full-time | On-site",
    tags: ["Development", "Blockchain", "Solidity", "Ethereum"],
  },
  {
    id: 3,
    logo: person,
    title: "Marketing Specialist",
    date: "Posted 1 week ago",
    location: "London, UK | Part-time | Remote",
    tags: ["Marketing", "Digital Marketing", "SEO"],
  },
  {
    id: 4,
    logo: person,
    title: "Product Manager",
    date: "Posted 10 days ago",
    location: "Berlin, Germany | Full-time | Hybrid",
    tags: ["Product Management", "Agile", "Scrum"],
  },
  {
    id: 5,
    logo: person,
    title: "Front-End Developer",
    date: "Posted 2 weeks ago",
    location: "Toronto, Canada | Contract | Remote",
    tags: ["Development", "JavaScript", "React", "CSS"],
  },
  {
    id: 6,
    logo: person,
    title: "Data Scientist",
    date: "Posted 3 weeks ago",
    location: "Sydney, Australia | Full-time | On-site",
    tags: ["Data Science", "Machine Learning", "Python", "SQL"],
  },
];

const freelanceJobsData = [
  {
    id: 1,
    logo: person,
    title: "Virtual Assistant for Marketing and Sales",
    assigner: "John Doe",
    description:
      "Seeking a tech-savvy Virtual Assistant to support our marketing and sales team with lead generation, social media management, and email outreach.",
    tags: ["Marketing", "Virtual Assistance", "Sales Support"],
    price: "$1,200",
  },
  {
    id: 2,
    logo: person,
    title: "Freelance Blockchain Consultant",
    assigner: "Jane Smith",
    description:
      "Looking for an experienced Blockchain Consultant to guide our team on smart contract development and best practices.",
    tags: ["Blockchain", "Consulting", "Smart Contracts"],
    price: "$2,500",
  },
  {
    id: 3,
    logo: person,
    title: "Graphic Designer for Social Media",
    assigner: "Carlos Gomez",
    description:
      "We need a talented Graphic Designer to create engaging social media graphics for a global audience, focusing on brand consistency and creativity.",
    tags: ["Graphic Design", "Social Media", "Branding"],
    price: "$900",
  },
  {
    id: 4,
    logo: person,
    title: "React Developer for eCommerce Site",
    assigner: "Alice Johnson",
    description:
      "Seeking a React Developer to build a responsive and optimized eCommerce site with a focus on user experience and performance.",
    tags: ["Web Development", "React", "eCommerce"],
    price: "$3,000",
  },
  {
    id: 5,
    logo: person,
    title: "Content Writer for Blog Articles",
    assigner: "Michael Lee",
    description:
      "In search of a Content Writer to produce well-researched articles on technology and innovation for our blog.",
    tags: ["Writing", "Content Creation", "SEO"],
    price: "$500",
  },
  {
    id: 6,
    logo: person,
    title: "UX Designer for Mobile App",
    assigner: "Emma Watson",
    description:
      "We’re looking for a UX Designer to enhance user experience in our mobile app, focusing on navigation flow and usability.",
    tags: ["UX Design", "Mobile App", "Prototyping"],
    price: "$1,800",
  },
];

const gigsData = [
  {
    id: 1,
    logo: person,
    title: "Junior Frontend Developer",
    assigner: "John Doe",
    description:
      "Developing a responsive user interface for a healthcare application with a focus on accessibility.",
    tags: ["React", "JavaScript", "HTML/CSS"],
    price: "$1,200",
    rating: "★★★★☆",
  },
  {
    id: 2,
    logo: person,
    title: "Backend Developer",
    assigner: "Jane Smith",
    description:
      "Building scalable APIs for a fintech app, ensuring secure and efficient transactions.",
    tags: ["Node.js", "API", "MongoDB"],
    price: "$2,500",
    rating: "★★★★☆",
  },
  {
    id: 3,
    logo: person,
    title: "Social Media Content Creator",
    assigner: "Carlos Mendoza",
    description:
      "Creating engaging social media content for a travel agency, focusing on visuals and storytelling.",
    tags: ["Content Creation", "Social Media", "Storytelling"],
    price: "$800",
    rating: "★★★☆☆",
  },
  {
    id: 4,
    logo: person,
    title: "SEO Specialist",
    assigner: "Alice Johnson",
    description:
      "Optimizing content and website structure for an e-commerce store to improve search engine rankings.",
    tags: ["SEO", "Content Optimization", "Digital Marketing"],
    price: "$1,500",
    rating: "★★★★★",
  },
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
