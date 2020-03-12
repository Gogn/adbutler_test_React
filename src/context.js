import React, {createContext, useEffect, useState} from "react";
import * as axios from "axios";

const API_URL = process.env.REACT_APP_API_URL
const LIVE_API = process.env.REACT_APP_LIVE_API

export const AdbutlerState = ({children}) => {
  const initialState = {
    loading: true,
    ads: [],
    error: null
  }
  const [state, updateState] = useState(initialState)

  let instance = axios.create({
    baseURL: API_URL,
    mode: 'no-cors',
    withCredentials: true,
    headers: {
      Authorization: `Basic ${LIVE_API}`,
      accept: 'application/json',
      'Content-Type': 'application/json',
    }
  })

  const getCampaigns = async () => {
    updateState({...state, loading: true})

    console.log(instance.data)

    instance.get('/zones')
      .then(response => console.log(response))
      .then(updateState({...state, loading: false}))
  }

  useEffect(() => {
    getCampaigns()
  }, [])

  const AdbutlerContext = createContext()

return (
  <AdbutlerContext.Provider value={''}>
    {children}
  </AdbutlerContext.Provider>
)

}