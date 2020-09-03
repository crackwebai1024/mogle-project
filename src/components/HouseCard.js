import React from "react";
import {
  MDBBox,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBIcon,
  MDBCardImage,
} from "mdbreact";

function HouseCard(props) {
  const picurls = [
    "images/ft-homes1.png",
    "images/ft-homes2.png",
    "images/ft-homes3.png",
  ];

  const title = ["$800,150", "$700,150", "$500,150"];
  const getimage = () => {
    return picurls.map((item, key) => {
      return (
        <MDBCol lg="4" sm="12">
          <MDBCard className="mb-4">
            <MDBCardImage className="img-fluid cardimg" src={item} waves />
            <MDBCardBody>
              <MDBCardTitle className="userh6">
                123 MAIN ST. LAS VEGAS, NV 89147
              </MDBCardTitle>
              <MDBCardTitle className="userh5 bold">{title[key]}</MDBCardTitle>
              <MDBCardTitle className="userh5 bold">
                <img src="images/bed-solid.png" /> &nbsp;4&nbsp;
                <img src="images/bath-solid.png" /> &nbsp;3&nbsp;
                <MDBIcon icon="home" /> &nbsp; 2,504 SqFt
              </MDBCardTitle>
              <MDBCardText
                style={{
                  fontSize: "20px",
                  fontWeight: "300",
                  color: "rgb(2, 48, 97)",
                }}
              >
                <a style={{ borderBottom: "solid 1px" }}>Schedule a Showing</a>
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      );
    });
  };
  return (
    <MDBBox className="housecards">
      <MDBRow>{getimage()}</MDBRow>
    </MDBBox>
  );
}

export default HouseCard;
