import { Col, Container, Row } from "react-bootstrap";
import header from "../assets/img/header-img.svg";

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span>Welcome to my Portfolio!</span>
            <h1>
              {`Hi I'm Shadiya Iffath \n`}
              <span className="wrap">Full-Stack Developer</span>
            </h1>
            <p>About me</p>
            <button> Lets Connect!</button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={header} alt="header img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
