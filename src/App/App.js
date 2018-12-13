import React, { Component } from 'react';
import connection from '../Helpers/Data/connection';
import Auth from '../Components/Auth/Auth';
import Profile from '../Components/Profile/profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

class App extends Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    connection();
  }

  isAuthenticated = () => {
    this.setState({ authed: true });
  }

  render() {
    if (!this.state.authed) {
      return (
        <div className="App">
          <Auth isAuthenticated={this.isAuthenticated}/>
        </div>
      );
    }
    return (
      <div className="App">
        <Profile />
      </div>
    );
  }
}


export default App;
