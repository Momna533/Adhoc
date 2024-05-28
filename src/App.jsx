import { Card, Container } from "react-bootstrap";
import NavbarComponent from "./components/NavbarComponent";
import funImg from "./assets/fun.png";
import experienceImg from "./assets/experienced.png";
import smartImg from "./assets/smart.png";
import CarouselComponent from "./components/CarouselComponent";

function App() {
  return (
    <>
      <NavbarComponent />
      <Container fluid className="jumbo__bg">
        <div className="overlay">
          <Container className="text-center banner-text">
            <h1>Administration made easy.</h1>
            <p>
              This is a simple hero unit, a simple Container-style component for
              calling extra attention to featured content or information.
            </p>
          </Container>
        </div>
      </Container>
      <Container className="about__container">
        <h2>
          Thanks to Adhoc we now have beautiful and faithful service every day.
          Our customers are happy and engagement has drastically increased.
          Highly recommend!
        </h2>
        <p>
          {" "}
          <span>-Dave Ellavar</span>, Academy of Code
        </p>
      </Container>
      <Container className="features__container">
        <h1>Why Adhoc?</h1>
        <Container className="features__content">
          <Card style={{ width: 300, border: "none" }}>
            <Card.Img src={experienceImg} />
            <Card.Body>
              <Card.Subtitle>
                Experience Lorem ipsum dolor sit amet.
              </Card.Subtitle>
            </Card.Body>
          </Card>
          <Card style={{ width: 300, border: "none" }}>
            <Card.Img src={funImg} />
            <Card.Body>
              <Card.Subtitle>Fun Lorem ipsum dolor sit amet.</Card.Subtitle>
            </Card.Body>
          </Card>
          <Card style={{ width: 300, border: "none" }}>
            <Card.Img src={smartImg} />
            <Card.Body>
              <Card.Subtitle>Smart Lorem ipsum dolor sit amet.</Card.Subtitle>
            </Card.Body>
          </Card>
        </Container>
      </Container>
      <div className="testimonials__container">
        <Container className="testimonials__content">
          <h1>Meet the team</h1>
          <CarouselComponent />
        </Container>
      </div>
    </>
  );
}

export default App;
