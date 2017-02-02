const express = require('express');
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');
const fs = require('fs');
const path = require('path');
const Entities = require('html-entities').XmlEntities;

const entities = new Entities();

const rawVideos = fs.readFileSync(path.join('data', 'videos.json'), 'utf8');
const videos = JSON.parse(rawVideos);

const videosToSend = JSON.stringify(videos);

const indexHTML = fs.readFileSync('index.html', 'utf8');
const metaImage = 'images/ben_swann.jpg';

const app = express()
    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())
    .use(favicon('./public/favicon.ico'))
    .use(express.static('./public'))
    .use(express.static('./dist'))
    .get('/', (req, res) => {
        const html = indexHTML
            .replace(/{{title}}/g, 'Ben Swann Video Archive')
            .replace(/{{url}}/, `${req.protocol}://${req.get('host')}`)
            .replace(/{{description}}/, 'This is an UNOFICIAL Ben Swann Video Archive.')
            .replace(/{{image}}/, `${req.protocol}://${req.headers.host}/${metaImage}`);
        res.send(html);
    })
    .get('/video/:id', (req, res) => {
        let video = videos.find(v => v.id === req.params.id);
        video = video ? video : { snippet: {} };
        const html = indexHTML
            .replace(/{{title}}/g, `${entities.encode(video.snippet.title || '')} - Ben Swann Video Archive`)
            .replace(/{{url}}/, `${req.protocol}://${req.get('host')}`)
            .replace(/{{description}}/, entities.encode(video.snippet.description || ''))
            .replace(/{{image}}/, `${req.protocol}://${req.headers.host}/${metaImage}`);
        res.send(html);
    })
    .get('/api/videos', (req, res) => {
        res.send(videosToSend).end();
    });

const port = process.env.PORT || 3300;

const server = app.listen(port, () => {
    console.log('App listening at port', server.address().port);
});