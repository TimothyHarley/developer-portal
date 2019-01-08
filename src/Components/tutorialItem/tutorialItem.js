import React from 'react';
import './tutorialItem.scss';
import tutorialsShape from '../../Helpers/propz/tutorialsShape';

class tutorialItem extends React.Component {
  static propTypes = {
    tutorials: tutorialsShape,
  }

  render() {
    const { tutorial } = this.props;
    return (
      <li className="tutorial-item text-center">
        <span className="col-7">{tutorial.name}</span>
        <span className="col-3"><a href={tutorial.link}>{tutorial.link}</a></span>
      </li>
    );
  }
}

export default tutorialItem;
