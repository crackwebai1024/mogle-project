import React from "react";
import { MDBRow, MDBCol, MDBBox } from "mdbreact";

function Sell(props) {
  return (
    <MDBRow className="purchase">
      <MDBCol md="6" className="sell-content">
        <div>
          <MDBBox tag="p" className="introtxt">
            <strong>LIST</strong>
          </MDBBox>
          <MDBBox tag="p" className="userh5">
            A HOME
          </MDBBox>
          <MDBBox className="introsector userdarkblue"></MDBBox>
          <MDBBox tag="p" className="userh7 purchase-txt">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </MDBBox>
          <button className="userbtn userh5 outlineblack">
            GET A FREE HOME ESTIMATE
          </button>
        </div>
      </MDBCol>
      <MDBCol md="6" style={{ padding: "0px" }}>
        <img src="images/sell.png" alt="photo of home" className="purpic" />
      </MDBCol>
    </MDBRow>
  );
}

export default Sell;
