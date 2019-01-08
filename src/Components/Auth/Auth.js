import React from 'react';
import PropTypes from 'prop-types';
import './Auth.scss';
import authRequests from '../../Helpers/Data/authRequests';

class Auth extends React.Component {
  static propTypes = {
    isAuthenticated: PropTypes.func,
  }

  authenticateUser = (e) => {
    e.preventDefault();
    authRequests.authenticate().then((result) => {
      this.props.isAuthenticated();
    }).catch(err => console.error('there was on error with auth', err));
  }

  render() {
    return (
      <div className="Auth">
        <button className="btn btn-danger" onClick={this.authenticateUser}>Login</button>
      </div>
    );
  }
}

export default Auth;
