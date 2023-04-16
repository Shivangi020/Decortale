import React, { Suspense } from "react";
import Loader from "../components/Loader/loader";
const AllComp = React.lazy(() => import("../pages/AllComp"));


function Home() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <AllComp/>
      </Suspense>
    </>
  );
}

export default Home;
