const express = require('express');
const newsapi = require('./newsapi');
const cors = require('cors');
const app = express();
const port = 4000;

app.use(cors());

app.get('/', (req, res) => res.send('Hello World!'));


app.get('/psy-news', (req, res) => {
    newsapi
    .getPsyNews(req.query)
    .then((response) => {res.json(response.body);})
});
app.get('/articles', (req, res) => {
    newsapi
    .getMainArticles(req.query)
    .then((response) => {res.json(response.body);})
});




app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
