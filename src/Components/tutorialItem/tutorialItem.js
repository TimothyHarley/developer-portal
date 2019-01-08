import React from 'react';
import './tutorialItem.scss';
import tutorialsShape from '../../Helpers/propz/tutorialsShape';
import authRequests from '../../Helpers/Data/authRequests';


class tutorialItem extends React.Component {
  static propTypes = {
    tutorials: tutorialsShape,
  }

  render() {
    const uid = authRequests.getCurrentUid();

    const { tutorial } = this.props;

    const makeButtons = () => {
      if (tutorial.uid === uid) {
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

    const makeTutorialList = () => {
      if (tutorial.uid === uid) {
        return (
          <li className="doc-item text-center">
            <span className="col-7">{tutorial.name}</span>
            <span className="col-3"><a href={tutorial.link}>{tutorial.link}</a></span>
            {makeButtons()}
          </li>
        );
      }
      return makeTutorialList;
    };

    return (
      <div>{makeTutorialList()}</div>
    );
  }
}

export default tutorialItem;
