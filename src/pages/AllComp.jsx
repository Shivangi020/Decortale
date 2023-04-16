
import React, { Suspense } from "react";
import Loader from "../components/Loader/loader";
import Header from "../components/hero/Header";
import Services from "../components/services/Services";
import About from "../components/aboutUs/About";
import Newsletter from "../components/newsletter/Newsletter";
const Project = React.lazy(() => import("../components/project/Project"));
const Review = React.lazy(() => import("../components/reviews/Review"));

function AllComp() {
  return (
    <>
      <Header />
      <Services />
      <Suspense fallback={<Loader />}>
        <Project />
      </Suspense>
      <About />
      <Suspense fallback={<Loader />}>
        <Review />
      </Suspense>
      <Newsletter />
    </>
  );
}

export default AllComp;
