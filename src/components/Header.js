import React from "react";
import { MDBBox } from "mdbreact";

function Header() {
  return (
    <MDBBox className="header" color="white">
      <MDBBox
        display="flex"
        alignItems="center"
        justifyContent="between"
        flex="row"
        className="headeritems"
      >
        <MDBBox display="flex" flex="row">
          <MDBBox tag="p" className="userh2 bold">
            ALDEN
          </MDBBox>
          <MDBBox tag="p" className="userh2 between">
            CASAS
          </MDBBox>
        </MDBBox>
        <MDBBox display="flex" flex="row" className="userp bold">
          <MDBBox tag="p">
            <a>BUY OR SELL</a>
          </MDBBox>
          <MDBBox tag="p" className="between">
            <a>CONTACT ME</a>
          </MDBBox>
        </MDBBox>
      </MDBBox>
      <MDBBox>
        <MDBBox tag="p" className="userh5">
          GREAT LASVEGAS REAL ESTATE
        </MDBBox>
        <MDBBox tag="p" className="userh1">
          FIND YOUR
        </MDBBox>
        <MDBBox tag="p" className="userh1 bold">
          DREAM HOME
        </MDBBox>
      </MDBBox>
      <button className="userbtn userh5 outline">CONTACT ME</button>
    </MDBBox>
  );
}

export default Header;
