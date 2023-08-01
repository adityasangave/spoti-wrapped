const express = require('express')
const dotenv = require('dotenv')
const axios = require('axios')
const querystring = require('querystring');

const router = express.Router();
const baseURI = "https://api.spotify.com/v1/me/";

// Helper function to make Spotify API requests
const makeSpotifyAPIRequest = async (req, res, endpoint) => {
    console.log(`Triggered ${endpoint}`);
    const access_token = req.get('access_token');
    const headers = {
        'Authorization': `Bearer ${access_token}`,
    };

    const url = `${baseURI}${endpoint}`;

    try {
        const response = await axios.get(url, { headers });
        res.status(200).json(response.data);
    } catch (error) {
        console.error('Error:', error.message);
        res.sendStatus(500);
    }
};

// Route for getting tracks
router.get('/get-tracks', async (req, res) => {
    const choice = req.get('choice');
    await makeSpotifyAPIRequest(req, res, `top/tracks`);
});

// Route for getting artists
router.get('/get-artist', async (req, res) => {
    await makeSpotifyAPIRequest(req, res, 'top/artists');
});
module.exports = router