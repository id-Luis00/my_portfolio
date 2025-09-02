import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <Container id="footer" className="footer">
      <Row className="w-50 mx-auto">
        <Col>
          {/* tutti i miei contatti */}
          <p>Email: edinsonluis2014@gmail.com</p>
        </Col>
        <Col>
          <p>© 2025 My Portfolio. All rights reserved.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
