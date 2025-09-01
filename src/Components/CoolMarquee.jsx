import { Col, Row } from "react-bootstrap";
import { LOGOS } from "../constants/logos";
import IconLanguage from "./IconLanguage.jsx";
import Marquee from "react-fast-marquee";

// componente che conterrà tutti i liinguaggi che so usare in un marquee

const CoolMarquee = () => {
  return (
    <Row className="d-flex justify-content-center my-5">
      <Col xs={12} className="d-flex justify-content-center">
        <Marquee
          autoFill
          gradient
          gradientWidth={200}
          gradientColor="#111C1E"
          speed={50}
          className="my-4"
        >
          {LOGOS.map((logo, index) => (
            <IconLanguage key={index} url={logo.url} />
          ))}
        </Marquee>
      </Col>
    </Row>
  );
};

export default CoolMarquee;
