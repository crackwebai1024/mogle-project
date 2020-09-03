import React from "react";
import { MDBBox, MDBRow, MDBCol } from "mdbreact";
import ContactForm from "./ContactForm";

function ContactBox(props) {
  return (
    <MDBBox className="contactbox">
      <MDBBox className="phoneitems">
        <MDBRow>
          <MDBCol md="4" className="phonebox">
            <img src="images/phone-solid.png" alt="phone" />
            <MDBBox tag="p" className="userh5" style={{ color: "#aaa" }}>
              DIRECT PHONE #
            </MDBBox>
            <MDBBox tag="p" className="userh5">
              702-123-4567
            </MDBBox>
          </MDBCol>
          <MDBCol md="4" className="phonebox">
            <img src="images/envelope-regular.png" alt="email" />
            <MDBBox tag="p" className="userh5" style={{ color: "#aaa" }}>
              EMAIL ME
            </MDBBox>
            <MDBBox tag="p" className="userh5">
              EMAIL@MAIL.COM
            </MDBBox>
          </MDBCol>
          <MDBCol md="4" className="phonebox">
            <img src="images/map-marker-alt-solid.png" alt="address" />
            <MDBBox tag="p" className="userh5" style={{ color: "#aaa" }}>
              OFFICE
            </MDBBox>
            <MDBBox tag="p" className="userh5">
              REALTY OFFICE
            </MDBBox>
          </MDBCol>
        </MDBRow>
      </MDBBox>
      <MDBBox style={{ textAlign: "center", marginTop: "115px" }}>
        <MDBBox tag="p" className="userh5 gray">
          SCHEDULE A FREE
        </MDBBox>
        <MDBBox tag="p" className="userh2 u_darkblue">
          <strong>HOME CONSULTATION</strong>
        </MDBBox>
        <ContactForm />
      </MDBBox>
    </MDBBox>
  );
}

export default ContactBox;
