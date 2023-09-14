import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://lcoalhost:3333',
});