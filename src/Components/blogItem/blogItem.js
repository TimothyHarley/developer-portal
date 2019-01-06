import React from 'react';
import './blogItem.scss';
import blogsShape from '../../Helpers/propz/blogsShape';

class blogItem extends React.Component {
  static propTypes = {
    blog: blogsShape,
  }

  render() {
    const { blog } = this.props;
    return (
      <h4>{blog.name}</h4>
    );
  }
}

export default blogItem;
