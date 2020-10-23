import React from "react";
import {
  Carousel,
  Image,
  Container,
  Row,
  Col,
  Badge,
  Button,
} from "react-bootstrap";
import "../assets/css/landing-carousel.css";

// functional component for presentation only.
const LandingCarousel = () => {
  const CarouselContentData = [
    {
      imageSource: require("../assets/images/items/5.png"),
      headingText: "THE HYPERAUTOMATION",
      badgeText: "UI Path",
      locationText: "London",
    },
    {
      imageSource: require("../assets/images/items/15.jpg"),
      headingText: "Setting Up Your Business For AREP",
      badgeText: "UI Path",
      locationText: "New York",
    },
    {
      imageSource: require("../assets/images/items/27.jpg"),
      headingText: "Improve Performance With Employee-led Feedback",
      badgeText: "Human Resource",
      locationText: "Venice",
    },
  ];

  return (
    <div className="landing-carousel-bg">
      <Carousel controls={true} touch={true}>
        {CarouselContentData.map((item, index) => {
          return (
            <Carousel.Item
              key={index}
              style={{ height: "500px", width: "100%" }}
            >
              <Container fluid className="carousel-container">
                <Row>
                  <Col
                    xs={0}
                    sm={0}
                    md={0}
                    lg={5}
                    xl={5}
                    className="first-landing-col"
                  ></Col>
                  <Col
                    xs={12}
                    sm={12}
                    md={2}
                    lg={2}
                    xl={2}
                    className="second-landing-col"
                  >
                    <Image
                      style={{
                        borderRadius: "100px",
                      }}
                      heigh="100%"
                      width="100%"
                      className="carousel-container-image"
                      src={item.imageSource}
                    />
                  </Col>
                  <Col
                    xs={12}
                    sm={12}
                    md={12}
                    lg={5}
                    xl={5}
                    className="third-landing-col"
                  >
                    <h1 className="lead-text">{item.headingText}</h1>

                    <Badge variant="primary" className="p-2">
                      {item.badgeText}
                    </Badge>

                    <Badge
                      variant="primary"
                      className="location-badge p-2 ml-4"
                    >
                      <i className="fa fa-map-marker" aria-hidden="true">
                        <span className="ml-2 lead location-text">
                          {item.locationText}
                        </span>
                      </i>
                    </Badge>

                    <hr className="carousel-container-hr" />

                    <Button variant="outline-light" className="join-now-button">
                      <span className="join-now-text">JOIN NOW</span>
                    </Button>
                  </Col>
                </Row>
              </Container>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default LandingCarousel;
