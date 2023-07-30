const express = require('express')
const dotenv = require('dotenv')
const request = require('request')

const router = express.Router();
const baseURI = "https://api.spotify.com/v1/me/"

router.get('/getTracks', (req, res)=>{
    res.send("this will get track info")
})
router.get('/getTracks', (req, res)=>{
    res.send("this will get artist  info")
})

module.exports = router