import React from "react";
import { MDBBox } from "mdbreact";
import HouseCard from "./HouseCard";

function Homes() {
  return (
    <MDBBox className="homes">
      <MDBBox>
        <MDBBox
          tag="p"
          className="userh5"
          style={{ color: "#aaa", fontWeight: "300" }}
        >
          LAS VEGAS, HENDERSON, SUMMERLIN + MORE
        </MDBBox>
        <MDBBox
          tag="p"
          className="userh2"
          style={{ letterSpacing: "0.2px", color: "#000" }}
        >
          <strong>FEATURED</strong> HOMES FOR SALE
        </MDBBox>
        <MDBBox className="sector"></MDBBox>
      </MDBBox>
      <HouseCard />
    </MDBBox>
  );
}

export default Homes;
