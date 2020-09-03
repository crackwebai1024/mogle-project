import React from "react";
import { MDBRow, MDBCol, MDBBox } from "mdbreact";

function Purchase(props) {
  return (
    <MDBRow className="purchase">
      <MDBCol md="6" className="purchase-pic">
        <img src="images/purchase.png" alt="photo of home" className="purpic" />
      </MDBCol>
      <MDBCol md="6" className="purchase-content">
        <div>
          <MDBBox tag="p" className="introtxt">
            <strong>PURCHASE</strong>
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
          <button className="userbtn userh5 outlineblack">GET STARTED</button>
        </div>
      </MDBCol>
    </MDBRow>
  );
}

export default Purchase;
