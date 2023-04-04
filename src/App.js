import "./App.css";
import About from "./components/aboutUs/About";
import Footer from "./components/footer/Footer";
import Header from "./components/hero/Header";
import Navbar from "./components/navbar/Navbar";
import Newsletter from "./components/newsletter/Newsletter";
import Project from "./components/project/Project";
import Review from "./components/reviews/Review";
import Services from "./components/services/Services";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/contactPage/Contact";
import AboutPage from "./pages/aboutPage/AboutPage";
import ProjectPage from "./pages/projectPage/ProjectPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Services />
                <Project />
                <About />
                <Review />
                <Newsletter />
              </>
            }
          ></Route>

          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/works" element={<ProjectPage />} />
        </Routes>
        <Footer />
      </BrowserRouter >
    </div>
  );
}

export default App;
