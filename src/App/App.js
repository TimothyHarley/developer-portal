import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import connection from '../Helpers/Data/connection';
import Auth from '../Components/Auth/Auth';
import authRequests from '../Helpers/Data/authRequests';
import MyNavbar from '../Components/myNavbar/myNavbar';
import Profile from '../Components/Profile/profile';
import ProjectAddForm from '../Components/projectAddForm/projectAddForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import ProjectDisplay from '../Components/projectDisplay/projectDisplay';
import userDataRequest from '../Helpers/Data/userDataRequest';

class App extends Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    connection();
    userDataRequest()
      .then((result) => {
        console.log(result);
      }).catch((error) => {
        console.error(error);
      });

    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
        });
      } else {
        this.setState({
          authed: false,
        });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  isAuthenticated = () => {
    this.setState({ authed: true });
  }

  render() {
    const logOutClickEvent = () => {
      authRequests.logoutUser();
      this.setState({ authed: false });
    };

    if (!this.state.authed) {
      return (
        <div className="App">
          <MyNavbar isAuthed={this.state.authed} logOutClickEvent={logOutClickEvent} />
          <div className="row">
            <Auth isAuthenticated={this.isAuthenticated} />
          </div>
        </div>
      );
    }
    return (
      <div className="App">
        <MyNavbar isAuthed={this.state.authed} logOutClickEvent={logOutClickEvent} />
        <div className="row ml-1">
          <Profile />
          <div className="col">
            <ProjectAddForm />
            <ProjectDisplay />
          </div>
        </div>
      </div>
    );
  }
}


export default App;
