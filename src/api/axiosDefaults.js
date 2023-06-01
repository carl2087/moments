import axios from 'axios';

// defines the base url which is the API url from heroku
axios.defaults.baseURL = 'https://drf-api-carl.herokuapp.com/';
// defines the data format the api is expecting multipart means images and text
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
// avoids CORS errors when sending cookies
axios.defaults.withCredentials = true;


export const axiosReq = axios.create();
export const axiosRes = axios.create();
