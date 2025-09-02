import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
// eslint-disable-next-line no-unused-vars
import * as motion from "motion/react-client";
import { useState } from "react";
import HeroSection from "./Components/HeroSection";
import SingleCardProject from "./Components/ProjectsCarousel.jsx";
import CoolMarquee from "./Components/CoolMarquee.jsx";
import AboutComponent from "./Components/AboutComponent.jsx";
import CoverImage from "./assets/Music-Hall-Screen.png";
import ProjectsCarousel from "./Components/ProjectsCarousel.jsx";
import Footer from "./Components/Footer.jsx";

function App() {
  const ball = {
    width: 220,
    height: 220,
    backgroundColor: "#c8d5b9",
    borderRadius: "50%",
  };

  // ora inizializzo uno useState per far scomparire il cerchio al click
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      {isVisible ? (
        <Container className="vh-100 d-flex align-items-center justify-content-center">
          <motion.div
            className="d-flex align-items-center justify-content-center cursor-pointer"
            onClick={() => {
              setIsVisible(!isVisible);
            }}
            whileHover={{
              scale: 1.1,
              backgroundColor: "#78DAD0",
              border: "2px solid #78DAD0",
              borderRadius: "50%",
              boxShadow: "0 0 100px #78DAD0",
            }}
            whileTap={{ scale: 0.9, filter: "blur(10px)" }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.7,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
            style={ball}
          >
            <h1 style={{ color: "#0E1419" }}>Welcome!</h1>
          </motion.div>
        </Container>
      ) : (
        <>
          <Container className="position-relative">
            {/* componente che sarà la mia hero section */}
            <HeroSection />

            <hr className="my-5" />

            <AboutComponent />

            {/* componente che richiama i linguaggi che so usare tramite marquee */}
            <CoolMarquee />

            <hr className="my-5" />

            {/* componente che richiama i mie progetti, magari con una fetch? */}
            <h1 className="text-center">Projects</h1>

            <ProjectsCarousel />

            {/* componente che richiama i miei contatti */}
            {/* <Contacts /> */}
          </Container>
          <Container
            fluid
            style={{ backgroundColor: "#070a0cff" }}
            className=" text-light mt-5"
          >
            <Footer />
          </Container>
        </>
      )}
    </>
  );
}

export default App;
