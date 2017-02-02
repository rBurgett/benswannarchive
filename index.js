const express = require('express');
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');

const app = express()
    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())
    .use(favicon('./public/favicon.ico'))
    .use(express.static('./public'))
    .use(express.static('./dist'));

const port = 3300;

const server = app.listen(port, () => {
    console.log('App listening at port', server.address().port);
});