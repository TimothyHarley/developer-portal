import React from 'react';
import './projectDisplay.scss';
import PropTypes from 'prop-types';
import blogsShape from '../../Helpers/propz/blogsShape';
import documentationsShape from '../../Helpers/propz/documentationShape';
import podcastsShape from '../../Helpers/propz/podcastsShape';
import tutorialsShape from '../../Helpers/propz/tutorialsShape';

class projectDisplay extends React.Component {
  static propTypes = {
    blogs: PropTypes.arrayOf(blogsShape),
    documentations: PropTypes.arrayOf(documentationsShape),
    podcasts: PropTypes.arrayOf(podcastsShape),
    tutorials: PropTypes.arrayOf(tutorialsShape),
  }

  render() {
    return (
      <div className='projectDisplay'>
        <h2>Project Display</h2>
      </div>
    );
  }
}

export default projectDisplay;
