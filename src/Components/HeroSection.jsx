import { Col, Image, Row } from "react-bootstrap";
// eslint-disable-next-line no-unused-vars
import photo from "../assets/provaPhoto.png";
import photo2 from "../assets/provaImage-removebg-preview.png";
// eslint-disable-next-line no-unused-vars
import * as motion from "motion/react-client";
import ButtonCustom from "./ButtonCustom";
import { useState } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="vh-100 d-flex flex-column justify-content-center  "
    >
      <Row className="card-border ">
        <Col sm={12} md={12} lg={6} className="">
          <Image className="" fluid src={photo2} />
        </Col>
        <Col sm={12} md={12} lg={6} className="d-flex flex-column my-auto">
          <h1>Hi, Im Luis!</h1>
          <h4>Fullstack Developer</h4>
          <p style={{ textAlign: "justify" }}>
            Welcome to my portfolio! This is where I'll be sharing all my
            projects and creative work. I'm always open to collaborations and
            would love to hear your feedback or tips—feel free to get in touch!
          </p>
          <Row>
            <Col>
              <ButtonCustom isVisible={isVisible} setIsVisible={setIsVisible} />
            </Col>
            <Col xs={12} className="bold">
              {isVisible && <p>edinsonluis2014@gmail.com</p>}
            </Col>
          </Row>
        </Col>
      </Row>

      <div className="position-absolute bottom-0 start-50 translate-middle-x arrow-down">
        <svg
          stroke="currentColor"
          fill="#78DAD0"
          strokeWidth="0"
          viewBox="0 0 24 24"
          height="50px"
          width="50px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path d="M18 6.41 16.59 5 12 9.58 7.41 5 6 6.41l6 6z"></path>
          <path d="m18 13-1.41-1.41L12 16.17l-4.59-4.58L6 13l6 6z"></path>
        </svg>
      </div>
    </motion.div>
  );
};

export default HeroSection;
