import React from 'react';
import {StaticAd} from "./Components/StaticAd";
import {MDBCol, MDBContainer, MDBRow} from "mdbreact";
import {Carousel} from "./Components/Caorusel";

// import {AdbutlerState} from "./context";

function App() {

//setID - Zone Id
  return (
    <>
      <MDBContainer>
        <h1 className='text-center'>Page</h1>
        <MDBRow>
          <MDBCol>
            <Carousel length={3} setID={427541}/>
          </MDBCol>
        </MDBRow>
        <h2 className='text-center'>Text</h2>
        <MDBRow className='ml-0 mr-0 mt-4 mb-4'>
          <MDBCol>
            <StaticAd setID={427541}/>
          </MDBCol>
          <MDBCol>
            <StaticAd setID={427541}/>
          </MDBCol>
        </MDBRow>
        <h2 className='text-center'>Text</h2>
        <MDBRow>
          <MDBCol>
            <Carousel length={3} setID={427541}/>
          </MDBCol>
        </MDBRow>
        <h2 className='text-center'>Text</h2>
      </MDBContainer>
    </>
  );
}

export default App;
