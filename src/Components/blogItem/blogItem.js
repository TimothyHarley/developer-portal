import React from 'react';
import './blogItem.scss';
import blogsShape from '../../Helpers/propz/blogsShape';
import authRequests from '../../Helpers/Data/authRequests';

class blogItem extends React.Component {
  static propTypes = {
    blog: blogsShape,
  }

  render() {
    const uid = authRequests.getCurrentUid();

    const { blog } = this.props;

    const makeButtons = () => {
      if (blog.uid === uid) {
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

    const makeBlogList = () => {
      if (blog.uid === uid) {
        return (
        <li className="blog-item text-center">
          <span className="col-7">{blog.name}</span>
          <span className="col-3"><a href={blog.link}>{blog.link}</a></span>
          {makeButtons()}
        </li>
        );
      }
      return makeBlogList;
    };

    return (
      <div>
        {makeBlogList()}
      </div>
    );
  }
}

export default blogItem;
