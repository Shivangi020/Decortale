import React from "react";
import Header from "../components/hero/Header";
import Services from "../components/services/Services";
import Project from "../components/project/Project";
import About from "../components/aboutUs/About";
import Review from "../components/reviews/Review";
import Newsletter from "../components/newsletter/Newsletter";

function Home() {
  return (
    <>
      <Header />
      <Services />
      <Project />
      <About />
      <Review />
      <Newsletter />
    </>
  );
}

export default Home;
