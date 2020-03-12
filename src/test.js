// import * as axios from "axios";
const axios = require('axios')

const API_URL = 'https://api.adbutler.com/v2'
const LIVE_API = '2cc4d41260ea67e5962ef96fd2da9cc7'

let instance = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Basic ${LIVE_API}`,
    accept: 'application/json'
  }
})

const getCampaigns = async () => {

  console.log(instance)

  instance.get('/campaigns')
    .then(response => console.log(response.data))
}

getCampaigns()