import React from 'react';
import moment from 'moment';

class VideoComponent extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        const { id, videos } = this.props;
        let video = videos.find(v => v.id === id);

        video = video ? video : {};

        return (
            <div style={{marginBottom: 10}}>
                <div className="row">
                    <div className="col-sm-12" style={{marginBottom: 20}}>
                        <h4 className="text-center">{video.title}</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3">
                        <div className="embed-responsive embed-responsive-4by3">
                            <video className="embed-responsive-item" src={video.mp4FilePath} controls={true} ></video>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <p className="text-center">{video.description}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <p className="text-center text-muted">Published on {moment(video.publishedAt).format('MMMM D, YYYY')}.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <p className="text-center">
                            <a href={video.flvFilePath}><span className="glyphicon glyphicon-download"></span> Download hi-res .flv</a>
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <p className="text-center">
                            <a href={video.mp4FilePath}><span className="glyphicon glyphicon-download"></span> Download low-res .mp4</a>
                        </p>
                    </div>
                </div>
            </div>
        );
    }

}
VideoComponent.propTypes = {
    id: React.PropTypes.string,
    videos: React.PropTypes.arrayOf(React.PropTypes.object)
};

export default VideoComponent;
