import React, {useEffect, useState} from 'react'
import * as axios from "axios";
import {MDBView} from "mdbreact";

export const StaticAd = ({setID}) => {

  const ID = 178743

  const [ad, setAd] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // getAd()
    axios.get(`https://servedbyadbutler.com/adserve/;ID=${ID};size=0x0;setID=${setID};type=json;click=CLICK_MACRO_PLACEHOLDER`)
      .then(function (response) {
        setAd(response.data.placements.placement_1)
        setIsLoading(false)
      })
  }, [setID])

  return (
    <div>
      {
        isLoading ?
          <div className="d-flex justify-content-center align-items-center">
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
          :
          <MDBView id={setID + '_' + ad.banner_id}>
            <a
            href={ad.redirect_url}
            target={ad.target}
            // rel='nofollow'
          >
            <img
              src={ad.image_url}
              className="img-fluid d-block mx-auto"
              alt={ad.alt_text}
            />
          </a>
            <img
              src={ad.accupixel_url}
              style={{display: 'none', width: '0', height: '0'}}
              alt={''}
            />
          </MDBView>
      }
    </div>
  )
}