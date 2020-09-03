import React from "react";
import { MDBBox } from "mdbreact";

function Contact(props) {
  return (
    <MDBBox className="contact">
      <MDBBox>
        <MDBBox
          tag="p"
          className="userh5"
          style={{ color: "#aaa", fontWeight: "300" }}
        >
          I AM AVAILABLE
        </MDBBox>
        <MDBBox
          tag="p"
          className="userh2"
          style={{ letterSpacing: "0.2px", color: "#000" }}
        >
          <strong>CONTACT ME </strong>TODAY
        </MDBBox>
        <MDBBox className="sector"></MDBBox>
      </MDBBox>
    </MDBBox>
  );
}

export default Contact;
