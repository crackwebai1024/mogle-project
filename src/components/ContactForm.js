import React from "react";
import { MDBBox, MDBInput, MDBRow, MDBCol, MDBBtn } from "mdbreact";

function ContactForm(props) {
  return (
    <MDBBox className="contact-form">
      <MDBRow>
        <MDBCol md="6">
          <MDBInput name="name" label="NAME" outline className="bgwhite" />
        </MDBCol>
        <MDBCol md="6">
          <MDBInput name="email" label="EMAIL" outline className="bgwhite" />
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol md="6">
          <MDBInput name="phone" label="PHONE" outline className="bgwhite" />
        </MDBCol>
        <MDBCol md="6">
          <MDBInput name="option" label="OPTION" outline className="bgwhite" />
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol md="12">
          <MDBInput
            type="textarea"
            rows="5"
            label="MESSAGE"
            outline
            className="bgwhite"
          />
        </MDBCol>
      </MDBRow>
      <MDBBtn color="blue-grey" className="submit-btn userh5">
        SUBMIT
      </MDBBtn>
      {/* <button className="submit-btn userh5">SUBMIT</button> */}
    </MDBBox>
  );
}

export default ContactForm;
