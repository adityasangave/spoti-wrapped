import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import axios from 'axios'

axios.defaults.baseURL = `${process.env.REACT_APP_API_URL}info/`
// axios.defaults.headers.get['Content-Type'] ='application/json;charset=utf-8';
// axios.defaults.headers.get['Access-Control-Allow-Origin'] = `${process.env.REACT_APP_API_URL}info/`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
  </>
);
