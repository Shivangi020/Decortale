import React, { Suspense } from "react";
// import Header from "../components/hero/Header";
// import Services from "../components/services/Services";
// import Project from "../components/project/Project";
// import About from "../components/aboutUs/About";
// import Review from "../components/reviews/Review";
// import Newsletter from "../components/newsletter/Newsletter";
import Loader from "../components/Loader/loader";
const Header = React.lazy(() => import("../components/hero/Header"));
const Services = React.lazy(() => import("../components/services/Services"));
const Project = React.lazy(() => import("../components/project/Project"));
const About = React.lazy(() => import("../components/aboutUs/About"));
const Review = React.lazy(() => import("../components/reviews/Review"));
const Newsletter = React.lazy(() =>
  import("../components/newsletter/Newsletter")
);

function Home() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Header />
        <Services />
        <Project />
        <About />
        <Review />
        <Newsletter />
      </Suspense>
    </>
  );
}

export default Home;
