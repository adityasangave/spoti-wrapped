const express = require('express');
const axios = require('axios');

const router = express.Router();
const baseURI = "https://api.spotify.com/v1/me/";

// Common function to make API requests
async function makeApiRequest(url, access_token, choice) {
    try {
        const headers = {
            'Authorization': `Bearer ${access_token}`,
        };
        const params = {
            'time_range': choice,
        };

        const response = await axios.get(url, { headers, params });
        return response.data;
    } catch (error) {
        console.error('Error:', error.message);
        throw new Error('API request failed');
    }
}

router.get('/get-tracks', async (req, res) => {
    try {
        const access_token = req.get('access_token');
        const choice = req.query.choice;
        const url = `${baseURI}top/tracks`;

        const responseData = await makeApiRequest(url, access_token, choice);
        res.status(200).json(responseData);
    } catch (error) {
        res.sendStatus(500);
    }
});

router.get('/get-artist', async (req, res) => {
    try {
        const access_token = req.get('access_token');
        const choice = req.query.choice;
        const url = `${baseURI}top/artists`;

        const responseData = await makeApiRequest(url, access_token, choice);
        res.status(200).json(responseData);
    } catch (error) {
        res.sendStatus(500);
    }
});

module.exports = router;
