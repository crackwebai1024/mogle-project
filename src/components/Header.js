import React, { useState } from "react";
import { MDBBox } from "mdbreact";

function Header() {
  const [active, setActive] = useState("sell");
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
            <strong>ALDEN</strong>
          </MDBBox>
          <MDBBox tag="p" className="userh2 between">
            CASAS
          </MDBBox>
        </MDBBox>
        <MDBBox display="flex" flex="row" className="userp bold">
          <MDBBox tag="p">
            <a
              className={active === "sell" ? "active" : ""}
              onClick={() => setActive("sell")}
            >
              BUY OR SELL
            </a>
          </MDBBox>
          <MDBBox tag="p" className="between">
            <a
              className={active === "contact" ? "active" : ""}
              onClick={() => setActive("contact")}
            >
              CONTACT ME
            </a>
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
