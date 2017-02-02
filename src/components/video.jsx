import React from 'react';

const VideoComponent = ({ id, videos }) => {

    let video = videos.find(v => v.id === id);

    video = video ? video : {};

    const fileName = video.fileName ? video.fileName : '';
    const mp4Path = window.s3BucketAddress + fileName.replace(/\.flv$/, '.mp4');

    return (
        <div style={{marginBottom: 20}}>
            <div className="row">
                <div className="col-sm-12" style={{marginBottom: 20}}>
                    <h4 className="text-center">{video.title}</h4>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <video className="center-block" src={mp4Path} controls={true} ></video>
                </div>
            </div>
            <div className="row">
                <p className="text-center">{video.description}</p>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <p className="text-center">
                        <a href={window.s3BucketAddress + fileName}><span className="glyphicon glyphicon-download"></span> Download hi-res .flv</a>
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <p className="text-center">
                        <a href={mp4Path}><span className="glyphicon glyphicon-download"></span> Download low-res .mp4</a>
                    </p>
                </div>
            </div>
        </div>
    );
};
VideoComponent.propTypes = {
    id: React.PropTypes.string,
    videos: React.PropTypes.arrayOf(React.PropTypes.object)
};

export default VideoComponent;
