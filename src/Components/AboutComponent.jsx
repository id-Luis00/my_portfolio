// eslint-disable-next-line no-unused-vars
import * as motion from "motion/react-client";
import { Col, Image, Row } from "react-bootstrap";
import information from "../assets/information.png";

const AboutComponent = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ margin: "-200px" }}
    >
      <Row className="my-5 p-3  ">
        <Col sm={12} md={12} lg={4} className=" pb-4">
          <div className="d-flex align-items-center gap-2">
            <Image
              src={information}
              className="img-fluid"
              style={{ maxHeight: "50px" }}
            />
            <h1 className=" m-0 " style={{ fontSize: "50px" }}>
              About
            </h1>
          </div>
        </Col>

        <Col
          sm={12}
          md={12}
          lg={8}
          className="d-flex align-items-center p-3 pt-0"
        >
          <p
            className="m-0 h2 "
            style={{ textAlign: "justify", fontWeight: "350" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
            ullam esse, officia maiores cum rerum recusandae unde animi id quo a
            blanditiis corporis, maxime voluptas est vitae quas consectetur.
            Quasi. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Iure labore, animi provident voluptatibus dolor autem? Perspiciatis
            numquam ab repudiandae
          </p>
        </Col>
      </Row>
    </motion.div>
  );
};

export default AboutComponent;
