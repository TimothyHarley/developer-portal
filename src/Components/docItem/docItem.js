import React from 'react';
import './docItem.scss';
import documentationShape from '../../Helpers/propz/documentationShape';

class docItem extends React.Component {
  static propTypes = {
    documentations: documentationShape,
  }

  render() {
    const { documentation } = this.props;
    return (
      <li className="doc-item text-center">
        <span className="col-7">{documentation.name}</span>
        <span className="col-3"><a href={documentation.link}>{documentation.link}</a></span>
      </li>
    );
  }
}

export default docItem;
