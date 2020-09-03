import React from "react";
import { MDBBox, MDBRow, MDBCol, MDBView } from "mdbreact";

function Intro(props) {
  return (
    <MDBBox className="intro" color="white">
      <MDBRow>
        <MDBCol md="6">
          <img src="images/agent.png" alt="agent" className="agent" />
        </MDBCol>
        <MDBCol md="6" className="introcont">
          <div>
            <MDBBox tag="p" className="introtxt">
              <strong>ALDEN</strong>&nbsp; CASAS
            </MDBBox>
            <MDBBox tag="p" className="userh5">
              LISENSED RELATOR&reg; (# 0.547777)
            </MDBBox>
            <MDBBox className="introsector"></MDBBox>
            <MDBBox
              tag="p"
              className="userh7 topic"
              style={{ paddingBottom: "20px" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </MDBBox>
            <button className="userbtn userh5 outline">CONTACT ME</button>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBBox>
  );
}

export default Intro;
