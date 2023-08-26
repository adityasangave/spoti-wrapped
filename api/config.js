require('dotenv').config();

const config = {
  development: {
    env: process.env.NODE_ENV,
    apiUrl: process.env.API_URL,
    frontendUrl : process.env.FRONTEND_URL
  },
  production: {
    env: process.env.NODE_ENV,
    apiUrl: process.env.API_URL,
    frontendUrl : process.env.FRONTEND_URL
  },
};

module.exports = config[process.env.NODE_ENV];
