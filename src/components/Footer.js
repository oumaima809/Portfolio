import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/Oumaima.png";
import navIcon1 from "../assets/img/linkedin.png";
import navIcon2 from "../assets/img/github.png";
import navIcon3 from "../assets/img/nav-icon2.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          
          <Col size={12} >
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12}  className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/oumaima-guesmi-9a04611b6/"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/oumaima809"><img src={navIcon2} alt="" /></a>
                <a href="https://www.facebook.com/profile.php?id=100088887193073&locale=fr_FR"><img src={navIcon3} alt="" /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
export default Footer