import React from "react";
import Menu from "./core/Menu";
import LandingCarousel from "./core/LandingCarousel";
import EventsCarousel from "./core/EventsCarousel";
import Footer from "./core/Footer";

const App = () => {
  return (
    <div>
      <Menu />
      <LandingCarousel />
      <br />
      <br />
      <br />
      <EventsCarousel />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default App;
