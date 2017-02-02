const converter = require('video-converter');

converter.convert(
    './videos/2017-01-18_Reality_Check_Is_Pizzagate_Fake_News_or_Has_It_Just_Not_Been_Officially_Investigated.flv',
    './videos/videos/2017-01-18_Reality_Check_Is_Pizzagate_Fake_News_or_Has_It_Just_Not_Been_Officially_Investigated.mp4',
    err => {
        if(err) {
            console.error(err);
        } else {
            console.log('Done!');
        }
    }
);
