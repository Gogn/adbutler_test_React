import React from 'react';
import {Carousel} from "./Components/Caorusel";
import {StaticAd} from "./Components/StaticAd";
import {MDBCol, MDBContainer, MDBRow} from "mdbreact";
// import {AdbutlerState} from "./context";

function App() {

//setID - Zone Id
  return (
    <>
      <MDBContainer>

        <MDBRow>
          <MDBCol>
            <Carousel length={3} setID={427541}/>
          </MDBCol>
        </MDBRow>

        <MDBRow className='ml-0 mr-0 mt-4 mb-4'>
          <MDBCol>
            <StaticAd setID={427541}/>
          </MDBCol>
          <MDBCol>
            <StaticAd setID={427541}/>
          </MDBCol>
        </MDBRow>

      </MDBContainer>
    </>
  );
}

export default App;
