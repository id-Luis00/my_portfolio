import { Col, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer">
      <Row>
        <Col>
          {/* tutti i miei contatti */}
          <p>Email: myemail@example.com</p>
          <p>Phone: +1234567890</p>
        </Col>
        <Col className="text-center">
          <p>© 2023 My Portfolio. All rights reserved.</p>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
