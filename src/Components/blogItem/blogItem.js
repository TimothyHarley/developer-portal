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
      <li className="blog-item text-center">
        <span className="col-7">{blog.name}</span>
        <span className="col-3"><a href={blog.link}>{blog.link}</a></span>
      </li>
    );
  }
}

export default blogItem;
