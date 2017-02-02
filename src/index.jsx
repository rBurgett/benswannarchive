import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './app.jsx';
import Home from './components/home.jsx';
import Video from './components/video.jsx';

window.s3BucketAddress = 'https://s3.amazonaws.com/net.benswannarchive.videos/';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}></IndexRoute>
            <Route path="video/:id" component={Video}></Route>
        </Route>
    </Router>,
    document.getElementById('root')
);
