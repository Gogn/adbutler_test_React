import React, {useEffect, useState} from "react";
import '../index.css';
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
          response.data.status === 'SUCCESS' && setIsLoading(false)
        })
    }

  },[length, setID])

  const AdsCarousel = () => {
      return (
        isLoading ?
          <div className="flex-center justify-content-center align-items-center">
            <div className="spinner-border text-primary" role="status" style={{position: 'absolute'}}>
            </div>
            <img
              className="img-fluid d-block mx-auto"
              alt={'Loading'}
              src='data:image/gif;base64,R0lGODlhQAF7AIAAAP///wAAACH5BAEAAAEALAAAAABAAXsAAAL+jI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YhMKpfMpvMJjUqn1Kr1is1qt9yu9wsOi8fksvmMTqvX7Lb7DY/L5/S6/Y7P6/f8vv8PGCg4SFhoeIiYqLjI2Oj4CBkpOUlZaXmJmam5ydnp+QkaKjpKWmp6ipqqusra6voKGys7S1tre4ubq7vL2+v7CxwsPExcbHyMnKy8zNzs/AwdLT1NXW19jZ2tvc3d7f0NHi4+Tl5ufo6err7O3u7+Dh8vP09fb3+Pn6+/z9/v/w8woMCBBAsaPIgwocKFDBs6fAgxosSJFCtavIgxo8YFjRwxFAAAOw=='
            />
          </div>
          :
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
                <MDBCarouselItem itemId={index + 1} key={index}>
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
        {AdsCarousel()}
    </>
  );
}