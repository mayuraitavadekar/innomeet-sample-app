import React from "react";
import "../assets/css/event-carousel.css";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import {
  Container,
  Card,
  Button,
  Col,
  Row,
  Image,
  Dropdown,
} from "react-bootstrap";

// raw data for cards
const eventCarouselData = [
  {
    count: "55",
    eventType: "EVENT",
    image: require("../assets/images/items/10.jpg"),
    name: "City Tour",
    address: "63 Birch Street",
    starCount: 4,
    votes: "6",
  },
  {
    count: "20",
    eventType: "REAL ESTATE",
    image: require("../assets/images/items/28.jpg"),
    name: "Beautiful Luxury Villa",
    address: "59 Water Street",
    starCount: 3,
    votes: "12",
  },
  {
    count: "45",
    eventType: "BAR",
    image: require("../assets/images/items/12.jpg"),
    name: "Fiesta Bar",
    address: "3524 Bryan Avenue",
    starCount: 5,
    votes: "17",
  },
  {
    count: "65",
    eventType: "ADRENALINE",
    image: require("../assets/images/items/16.jpg"),
    name: "Senior C# Developer",
    address: "ERF Solutions",
    starCount: 4,
    votes: "6",
  },
  {
    count: "50",
    eventType: "RESTAURANT",
    image: require("../assets/images/items/1.jpg"),
    name: "MArkey's Restaurant",
    address: "63 Birch Street",
    starCount: 4,
    votes: "6",
  },
  {
    count: "25",
    eventType: "TRIP",
    image: require("../assets/images/items/11.jpg"),
    name: "Nascar Racing",
    address: "London Airport",
    starCount: 4,
    votes: "6",
  },
  {
    count: "87",
    eventType: "EVENT",
    image: require("../assets/images/items/4.jpg"),
    name: "Food Festival",
    address: "63 Birch Street",
    starCount: 4,
    votes: "6",
  },
  {
    count: "36",
    eventType: "LOUNGE",
    image: require("../assets/images/items/5.jpg"),
    name: "Cosmopolit",
    address: "4696 Jim Rosa Lane",
    starCount: 4,
    votes: "6",
  },
  {
    count: "70",
    eventType: "EVENT",
    image: require("../assets/images/items/6.jpg"),
    name: "Stand Up Show",
    address: "63 Birch Street",
    starCount: 4,
    votes: "6",
  },
];

// card breakpoints
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 3 },
  { width: 768, itemsToShow: 4 },
  { width: 1200, itemsToShow: 4 },
];

// class component to ease refer some third party functions
class EventsCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.FullStar = this.FullStar.bind(this);
    this.HalfStar = this.HalfStar.bind(this);
  }

  // local functions for stars
  FullStar = () => {
    return (
      <div>
        <span>
          <i
            className="fa fa-star"
            style={{ color: "white" }}
            aria-hidden="true"
          ></i>
        </span>
      </div>
    );
  };

  // local functions for stars
  HalfStar = () => {
    return (
      <div>
        <span>
          <i
            className="fa fa-star"
            style={{ color: "white", opacity: "50%" }}
            aria-hidden="true"
          ></i>
        </span>
      </div>
    );
  };

  render() {
    return (
      <div>
        <Container fluid className="event-carousel-bg">
          <Container fluid className="p-4">
            <Row>
              <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                <h1 className="text-white promoted-event-text">
                  Promoted Events
                </h1>
              </Col>
              <Col className="text-right mt-2">
                <Button variant="outline-light" className="join-now-button">
                  <span className="join-now-text ">PROMOTE YOURS</span>
                </Button>
              </Col>
              <Col className="text-right mr-4">
                <button
                  onClick={() => this.carousel.slidePrev()}
                  className="left-button ml-2"
                >
                  <Image src={require("../assets/images/items/ar-left.png")} />
                </button>

                <button
                  onClick={() => this.carousel.slideNext()}
                  className="left-button ml-2"
                >
                  <Image src={require("../assets/images/items/ar-right.png")} />
                </button>
              </Col>
            </Row>
          </Container>

          <Carousel
            itemsToShow={4}
            itemsToScroll={1}
            breakPoints={breakPoints}
            showArrows={false}
            ref={(ref) => (this.carousel = ref)}
          >
            {eventCarouselData.map((item, index) => {
              return (
                <div key={index}>
                  <Item>
                    <Card className="card-main">
                      <Card.Body
                        className="main-card-body"
                        style={{
                          backgroundImage: `url(${item.image})`,
                        }}
                      >
                        <div className="count-icon">
                          <i
                            className="fa fa-users"
                            style={{ color: "#0377fc", marginTop: "20px" }}
                            aria-hidden="true"
                          >
                            <b className="ml-1">{item.count}</b>
                          </i>
                        </div>

                        <Button
                          disabled={true}
                          variant="outline-light"
                          className="btn btn-sm mt-4 event-type-button"
                        >
                          {item.eventType}
                        </Button>

                        <Card.Title className="name mt-2">
                          {item.name}
                        </Card.Title>

                        <Card.Text className="address">
                          {item.address}
                        </Card.Text>
                      </Card.Body>
                      <Container fluid className="star-container">
                        <Row>
                          <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                            <div>
                              {[...Array(item.starCount)].map(
                                (starItem, StarIndex) => (
                                  <div key={StarIndex}>
                                    <div
                                      style={{
                                        float: "left",
                                        marginLeft: "4px",
                                        marginTop: "10px",
                                        display: "inline",
                                      }}
                                    >
                                      <this.FullStar />
                                    </div>
                                  </div>
                                )
                              )}
                              {[...Array(5 - item.starCount)].map(
                                (starItem, StarIndex) => (
                                  <div key={StarIndex}>
                                    <div
                                      style={{
                                        float: "left",
                                        marginLeft: "4px",
                                        marginTop: "10px",
                                        display: "inline",
                                      }}
                                    >
                                      <this.HalfStar />
                                    </div>
                                  </div>
                                )
                              )}
                            </div>
                          </Col>
                          <Col
                            xs={3}
                            sm={3}
                            md={3}
                            lg={3}
                            xl={3}
                            className="text-right"
                          >
                            <p
                              className="text-white"
                              style={{
                                marginTop: "10px",
                              }}
                            >
                              ({item.votes})
                            </p>
                          </Col>
                          <Col
                            xs={2}
                            sm={2}
                            md={2}
                            lg={2}
                            xl={2}
                            className="text-right mt-1"
                          >
                            <div className="dropdown">
                              <Dropdown>
                                <Dropdown.Toggle
                                  variant="secondary btn-sm"
                                  id="dropdown-basic"
                                  style={{
                                    backgroundColor: "transparent",
                                    border: "none",
                                  }}
                                >
                                  <Image
                                    src={require("../assets/images/items/toggle-icon.png")}
                                  />
                                </Dropdown.Toggle>

                                <Dropdown.Menu
                                  style={{ backgroundColor: "#73a47" }}
                                >
                                  <Dropdown.Item href="/">
                                    Add Favourites
                                  </Dropdown.Item>
                                  <hr />
                                  <Dropdown.Item href="/">
                                    Add Watchlist
                                  </Dropdown.Item>
                                  <hr />
                                  <Dropdown.Item href="/">
                                    Join Now
                                  </Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                            </div>
                          </Col>
                        </Row>
                      </Container>
                    </Card>
                  </Item>
                </div>
              );
            })}
          </Carousel>
        </Container>
      </div>
    );
  }
}

export default EventsCarousel;
