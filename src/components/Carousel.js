import React from "react";
import { MDBBox, MDBRow, MDBCol, MDBView } from "mdbreact";

function Carousel(props) {
  const getpicturelist = () => {
    let list = [];
    for (let i = 1; i < 6; i++) {
      list.push(
        <MDBCol className={"fifth" + " dis" + i}>
          <MDBView hover zoom className="imgwrapper">
            <img src={"images/homes" + i + ".png"} alt="home" />
          </MDBView>
        </MDBCol>
      );
    }
    return list;
  };
  return (
    <MDBBox className="carousel">
      <MDBRow>{getpicturelist()}</MDBRow>
    </MDBBox>
  );
}

export default Carousel;
