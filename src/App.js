import React from "react";

import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Jobs from "./components/Jobs";
import Benefits from "./components/Benefits";
import Blogs from "./components/Blogs";
import Faq from "./components/Faq";
import Foot from "./components/Foot";

import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "./assets/vendor/aos/aos.css";
import "./assets/vendor/glightbox/css/glightbox.min.css";
import "./assets/vendor/swiper/swiper-bundle.min.css";
import "./assets/css/main.css";

function App() {
  return (
    <>
      <Nav />
      <main class="main">
        <Hero />
        <Jobs />
        <Benefits />
        <Blogs />
        <Faq />
      </main>
      <Foot />
    </>
  );
}

export default App;
