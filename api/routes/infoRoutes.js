const express = require('express')
const dotenv = require('dotenv')
const axios = require('axios')
const querystring = require('querystring');

const router = express.Router();
const baseURI = "https://api.spotify.com/v1/me/"

router.get('/get-tracks', async (req, res) => {
    console.log("triggered tracks");
    const access_token = req.get('access_token');
    const choice = req.get('choice')
    console.log(access_token)
    const headers = {
        'Authorization': `Bearer ${access_token}`,
    };
    let options = querystring.stringify({
        'time_range' :choice
    })
    const url = `${baseURI}top/tracks`;

    try {
        const response = await axios.get(url, { headers });
        res.status(200).json(response.data);
    } catch (error) {
        console.error('Error:', error.message);
        res.sendStatus(500);
    }
});


router.get('/get-artist', async (req, res) => {
    console.log("triggered tracks");
    const access_token = req.get('access_token');
    const choice = req.get('choice')
    const headers = {
        'Authorization': `Bearer ${access_token}`,
    };
    // let options = querystring.stringify({
    //     'time_range':choice
    // })
    const url = `${baseURI}top/artists`;

    try {
        const response = await axios.get(url, { headers });
        res.status(200).json(response.data);
    } catch (error) {
        console.error('Error:', error.message);
        res.sendStatus(500);
    }
});


module.exports = router