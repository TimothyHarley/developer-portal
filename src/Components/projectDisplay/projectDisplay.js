import React from 'react';
import './projectDisplay.scss';
import PropTypes from 'prop-types';

class projectDisplay extends React.Component {
  static propTypes = {
    blogs: PropTypes.arrayOf(PropTypes.object),
    documentations: PropTypes.arrayOf(PropTypes.object),
    podcasts: PropTypes.arrayOf(PropTypes.object),
    tutorials: PropTypes.arrayOf(PropTypes.object),
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
