import React from "react";
import { MDBBox, MDBRow, MDBCol } from "mdbreact";

function Footer(props) {
  return (
    <MDBBox className="footer" color="white">
      <MDBRow>
        <MDBCol xl="1"></MDBCol>
        <MDBCol xl="3" md="6" className="footerdiv">
          <MDBBox>
            <MDBBox tag="p" className="userh3" style={{ marginTop: "80px" }}>
              <strong>ALDEN </strong> CASAS
            </MDBBox>
            <MDBBox tag="p" className="userh3 iconbox">
              <img src="images/facebook-square-brands.png" alt="facebook" />
              <img src="images/instagram-brands.png" alt="instagram" />
              <img src="images/youtube-brands.png" alt="youtube" />
              <img src="images/linkedin-in-brands.png" alt="linkedin" />
            </MDBBox>
          </MDBBox>
        </MDBCol>
        <MDBCol xl="2" md="6" className="footerdiv">
          <MDBBox>
            <ul className="footerlist">
              <li>About Alden</li>
              <li>Search Homes</li>
              <li>Buy or Sell</li>
              <li>Contact Me</li>
            </ul>
          </MDBBox>
        </MDBCol>
        <MDBCol xl="1"></MDBCol>
        <MDBCol xl="2" className="address footerdiv" md="6">
          <MDBBox>
            <MDBBox tag="p">
              <strong>REALTY OFFICE</strong>
            </MDBBox>
            <br></br>
            <br></br>
            {/* <MDBBox tag="p">123Street</MDBBox>
          <MDBBox tag="p">City, State 89077</MDBBox>
          <MDBBox tag="p">Get Directions</MDBBox> */}
            <ul className="footerlist">
              <li>123Street</li>
              <li>City, State 89077</li>
              <li>Get Directions</li>
            </ul>
          </MDBBox>
        </MDBCol>
        <MDBCol xl="2" className="address footerdiv" md="6">
          <img src="images/googlemap.png" alt="googlemap" />
        </MDBCol>
        <MDBCol xl="1"></MDBCol>
      </MDBRow>
      <hr className="footersector"></hr>
      <MDBBox tag="p" className="copyright">
        &copy;&nbsp;No Rights Reserved - Project Brief
      </MDBBox>
    </MDBBox>
  );
}

export default Footer;
