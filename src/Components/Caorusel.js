import React, {useEffect, useState} from "react";
import {MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer} from
    "mdbreact";
import * as axios from "axios";

export const Carousel = ({length, setID}) => {

  const ID = 178743

  const [ads, setAds] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // getAds()
    for (let i = 0; i < length; i++) {
      axios.get(`https://servedbyadbutler.com/adserve/;ID=${ID};size=0x0;setID=${setID};type=json;click=CLICK_MACRO_PLACEHOLDER`)
        .then(function (response) {
          let currentAd = {}
          currentAd[`placement_1_${i}`] = response.data.placements.placement_1
          // setAds(ads => [...ads, currentAd])
          setAds(ads => [...ads, response.data.placements.placement_1])
        })
    }
    setIsLoading(false)
  },[length, setID])

  const AdsCarousel = () => {
    return (
      <MDBContainer>
        <MDBCarousel
          activeItem={1}
          length={length}
          showControls={true}
          showIndicators={true}
          className="z-depth-1"
        >
          <MDBCarouselInner>
            {ads.map((ad, index) => (
              <MDBCarouselItem itemId={index+1} key={index}>
                <MDBView>
                  <a
                    href={ad.redirect_url}
                    target={ads.target}
                    // rel='nofollow'
                  >
                    <img
                      src={ad.image_url}
                      alt={ad.alt_text}
                      className="d-block w-100"
                    />
                  </a>
                  <img
                    src={ad.accupixel_url}
                    style={{display: 'none', width: '0', height: '0'}}
                    alt={''}
                  />
                </MDBView>
              </MDBCarouselItem>
            ))}
          </MDBCarouselInner>
        </MDBCarousel>
      </MDBContainer>
    )
  }

  return (
    <>
      { isLoading ?
        <div className="d-flex justify-content-center align-items-center">
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
        :
        AdsCarousel() }
    </>
  );
}