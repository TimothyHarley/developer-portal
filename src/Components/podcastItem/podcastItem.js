import React from 'react';
import './podcastItem.scss';
import podcastsShape from '../../Helpers/propz/podcastsShape';

class podcastItem extends React.Component {
  static propTypes = {
    podcasts: podcastsShape,
  }

  render() {
    const { podcast } = this.props;
    return (
      <li className="podcast-item text-center">
        <span className="col-7">{podcast.name}</span>
        <span className="col-3"><a href={podcast.link}>{podcast.link}</a></span>
      </li>
    );
  }
}

export default podcastItem;
