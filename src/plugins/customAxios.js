import axios from 'axios';

const customAxios = axios.create({
    baseURL: 'https://pixabay.com/api',
});

customAxios.interceptors.request.use(function (config) {
    config.params['key'] = '17779809-383a362bcabe1fac4de5e3277'
    return config;
}, function (error) {
    return Promise.reject(error);
});

export default customAxios