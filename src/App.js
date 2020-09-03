import React from "react";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Homes from "./components/Homes";
import { MDBBtn } from "mdbreact";
import Intro from "./components/Intro";
import Testimonial from "./components/Testimonial";
import Purchase from "./components/Purchase";
import Sell from "./components/Sell";
import Contact from "./components/Contact";
import ContactBox from "./components/ContactBox";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Homes />
      <Intro />
      <Testimonial />
      <Purchase />
      <Sell />
      <Contact />
      <ContactBox />
      <Carousel />
      <Footer />
    </div>
  );
};

export default App;
