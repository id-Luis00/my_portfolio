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
            Salve e benvenuti nel mio portfolio! io sono Luis e qui pubblicherò
            tutti i miei lavori. Mi occupo di progettazione e sviluppo web, sia
            Front-end che Back-end. Studio e sperimento costantemente per
            arricchire il mio bagaglio di conoscenze e competenze. Spero ti/vi
            possano piacere i miei lavori! Per qualsiasi dubbio o richiesta non
            esitate a contattarmi!
          </p>
        </Col>
      </Row>
    </motion.div>
  );
};

export default AboutComponent;
