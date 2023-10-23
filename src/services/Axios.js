import axios from 'axios';
// https://siimpaladminbackend.metromatika.com/
// http://localhost:3001/
const instance = axios.create({
  baseURL: 'https://api-aplans.gariskode.com/',
  // baseURL: "http://localhost:3001/",
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
