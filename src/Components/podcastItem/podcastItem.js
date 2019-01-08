import React from 'react';
import './podcastItem.scss';
import podcastsShape from '../../Helpers/propz/podcastsShape';
import authRequests from '../../Helpers/Data/authRequests';


class podcastItem extends React.Component {
  static propTypes = {
    podcasts: podcastsShape,
  }

  render() {
    const uid = authRequests.getCurrentUid();

    const { podcast } = this.props;

    const makeButtons = () => {
      if (podcast.uid === uid) {
        return (
          <div>
            <span className="col">
              <button className="btn btn-default">
                <i className="fas fa-trash-alt"></i>
              </button>
            </span>
          </div>
        );
      }
      return <span className="col-2"></span>;
    };

    const makePodcastList = () => {
      if (podcast.uid === uid) {
        return (
          <li className="doc-item text-center">
            <span className="col-7">{podcast.name}</span>
            <span className="col-3"><a href={podcast.link}>{podcast.link}</a></span>
            {makeButtons()}
          </li>
        );
      }
      return makePodcastList;
    };

    return (
      <div>{makePodcastList()}</div>
    );
  }
}

export default podcastItem;
