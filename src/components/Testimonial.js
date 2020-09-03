import React from "react";
import { MDBBox, MDBRow, MDBCol, MDBIcon } from "mdbreact";

function Testimonial(props) {
  return (
    <MDBBox className="testimonials">
      <MDBBox>
        <MDBBox
          tag="p"
          className="userh5"
          style={{ color: "#aaa", fontWeight: "300" }}
        >
          CLIENT
        </MDBBox>
        <MDBBox
          tag="p"
          className="userh2"
          style={{ letterSpacing: "0.2px", color: "#000" }}
        >
          <strong>TESTIMONIALS</strong>
        </MDBBox>
        <MDBBox className="sector"></MDBBox>
      </MDBBox>
      <MDBRow className="testcont">
        <MDBCol md="1" className="show">
          <MDBIcon icon="angle-left" size="4x" className="userhover" />
        </MDBCol>
        <MDBCol md="5" style={{ padding: "0px 25px" }}>
          <MDBBox>
            <MDBBox style={{ marginBottom: "40px" }}>
              <MDBIcon far icon="star" className="amber-text" />
              <MDBIcon far icon="star" className="amber-text" />
              <MDBIcon far icon="star" className="amber-text" />
              <MDBIcon far icon="star" className="amber-text" />
              <MDBIcon far icon="star" className="amber-text" />
            </MDBBox>
            <MDBBox tag="p" className="txtest">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </MDBBox>
            <MDBBox tag="p" className="footxt">
              -First Last
            </MDBBox>
          </MDBBox>
        </MDBCol>
        <MDBCol md="5" style={{ padding: "0px 25px" }}>
          <MDBBox>
            <MDBBox style={{ marginBottom: "40px" }}>
              <MDBIcon far icon="star" className="amber-text" />
              <MDBIcon far icon="star" className="amber-text" />
              <MDBIcon far icon="star" className="amber-text" />
              <MDBIcon far icon="star" className="amber-text" />
              <MDBIcon far icon="star" className="amber-text" />
            </MDBBox>
            <MDBBox tag="p" className="txtest">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </MDBBox>
            <MDBBox tag="p" className="footxt">
              -First Last
            </MDBBox>
          </MDBBox>
        </MDBCol>
        <MDBCol md="1">
          <MDBIcon
            icon="angle-left"
            size="4x"
            className="userhover tempshow"
            style={{ display: "none" }}
          />
          <MDBIcon icon="angle-right" size="4x" className="userhover" />
        </MDBCol>
      </MDBRow>
    </MDBBox>
  );
}

export default Testimonial;
