import React from 'react';
import request from 'superagent';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchTerms: '',
            videos: []
        };
        this.inputChanged = this.inputChanged.bind(this);
    }

    componentWillMount() {
        request
            .get('/api/videos')
            .end((err, { text }) => {
                if(err) {
                    console.error(err);
                } else {
                    const videos = JSON.parse(text)
                        .map(v => ({
                            id: v.id,
                            fileName: v.fileName,
                            publishedAt: v.snippet.publishedAt,
                            title: v.snippet.title,
                            description: v.snippet.description
                        }))
                        .sort((a, b) => {
                            const dateA = a.publishedAt;
                            const dateB = b.publishedAt;
                            return dateA === dateB ? 0 : dateA > dateB ? -1 : 1;
                        });
                    this.setState({
                        ...this.state,
                        videos
                    });
                }
            });
    }

    inputChanged(val) {
        this.setState({
            ...this.state,
            searchTerms: val
        });
    }

    render() {

        const { searchTerms, videos } = this.state;
        const { inputChanged } = this;
        const { children } = this.props;
        const { id } = this.props.params;

        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <h1 className="text-center"><a href="/" style={{color: '#333', textDecoration: 'none'}}>The <em>UNOFFICIAL</em> Ben Swann Video Archive</a></h1>
                        <h4 className="text-muted text-center">This site is in no way affiliated with Ben Swann or CBS 46.</h4>
                    </div>
                </div>
                { React.cloneElement(children, { searchTerms, videos, inputChanged, id }) }
            </div>
        );
    }

}
App.propTypes = {
    children: React.PropTypes.element,
    params: React.PropTypes.object
};

export default App;
