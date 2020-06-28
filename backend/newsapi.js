const superagent = require('superagent');

const NEWS_API_URL = 'https://newsapi.org/v2';
const TOP_HEADLINES_ENDPOINT_PATH = '/top-headlines';
const API_KEY = '5013d7e36071475c9b604a09bc2923ab';

const EVERYTHING_ENDPOINT_PATH = '/everything';

const getMainArticles = (query) => superagent
.get(`${NEWS_API_URL}${TOP_HEADLINES_ENDPOINT_PATH}`) 
.query({country: 'pl', ...query, apiKey: API_KEY });


const getPsyNews = (query) => superagent
.get(`${NEWS_API_URL}${EVERYTHING_ENDPOINT_PATH}`) 
.query({language: 'pl', ...query, apiKey: API_KEY, q: 'Merkel' });

module.exports = {
    getMainArticles,
    getPsyNews,
};