import React from 'react';
import './docItem.scss';
import documentationShape from '../../Helpers/propz/documentationShape';
import authRequests from '../../Helpers/Data/authRequests';


class docItem extends React.Component {
  static propTypes = {
    documentations: documentationShape,
  }

  render() {
    const uid = authRequests.getCurrentUid();

    const { documentation } = this.props;

    const makeButtons = () => {
      if (documentation.uid === uid) {
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

    const makeDocList = () => {
      if (documentation.uid === uid) {
        return (
          <li className="doc-item text-center">
            <span className="col-7">{documentation.name}</span>
            <span className="col-3"><a href={documentation.link}>{documentation.link}</a></span>
            {makeButtons()}
          </li>
        );
      }
      return makeDocList;
    };

    return (
      <div>{makeDocList()}</div>
    );
  }
}

export default docItem;
