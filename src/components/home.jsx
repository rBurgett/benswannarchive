import React from 'react';
import moment from 'moment';
import { Link } from 'react-router';

const escapeRegExp = str => str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1');

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.inputChanged = this.inputChanged.bind(this);
    }

    componentDidMount() {
        this.inputNode.focus();
    }

    inputChanged(e) {
        e.preventDefault();
        this.props.inputChanged(e.target.value);
    }

    render() {

        const { inputChanged } = this;
        const { searchTerms, videos } = this.props;

        const searchArr = searchTerms
            .trim()
            .split(/\s+/)
            .map(s => new RegExp(escapeRegExp(s), 'i'));

        const tableRows = videos
            .filter(video => {
                return searchArr.length === 0 ? true : searchArr.every(patt => patt.test(video.title));
            })
            .map(video => {
                return (
                    <tr key={video.key}>
                        <td>{moment(video.publishedAt).format('YYYY/MM/DD')}</td>
                        <td><Link to={`/video/${video.id}`}>{video.title}</Link></td>
                    </tr>
                );
            });

        return (
            <div>
                <div className="row">
                    <div className="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                        <div className="form-group" style={{marginTop: 20}}>
                            <input ref={node => this.inputNode = node} className="form-control" type="text" placeholder="Enter search terms" value={searchTerms} onChange={inputChanged}></input>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-10 col-lg-offset-1">
                        <table className="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableRows}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }

}
Home.propTypes = {
    searchTerms: React.PropTypes.string,
    videos: React.PropTypes.arrayOf(React.PropTypes.object),
    inputChanged: React.PropTypes.func
};

export default Home;
