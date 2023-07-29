const express = require('express')
const dotenv = require('dotenv')
const querystring = require('querystring');
const request = require('request')

dotenv.config()
const router = express.Router()

router.get('/authenticate', (req, res) => {
    // Authenticate user here with spotify
    let client_id = process.env.CLIENT_ID
    let redirect_uri = process.env.REDIRECT_URI
    let scope = "user-top-read"

    console.log("triggered")
    res.set({
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Origin": "http://localhost:3000",
    });
    const queryParameters = querystring.stringify({
        response_type: 'code',
        client_id: client_id,
        scope: scope,
        redirect_uri: redirect_uri,
    });

    const authorizeUrl = `https://accounts.spotify.com/authorize?${queryParameters}`;

    res.redirect(authorizeUrl);
})

router.get('/callback', (req, res) => {
    let code = req.query.code || null;
    let state = req.query.state || null;

    let access_token;

        var authOptions = {
            url: 'https://accounts.spotify.com/api/token',
            form: {
                code: code,
                redirect_uri: process.env.REDIRECT_URI,
                grant_type: 'authorization_code'
            },
            headers: {
                'Authorization': 'Basic ' + (new Buffer.from(process.env.CLIENT_ID + ':' + process.env.CLIENT_SECRET).toString('base64'))
            },
            json: true
        };

        request.post(authOptions, function (error, response, body) {
            if (!error && response.statusCode === 200) {

                access_token = body.access_token;

                console.log("access token" + access_token)
            }
        })
})


module.exports = router