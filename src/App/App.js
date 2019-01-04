import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import connection from '../Helpers/Data/connection';
import Auth from '../Components/Auth/Auth';
import authRequests from '../Helpers/Data/authRequests';
import MyNavbar from '../Components/myNavbar/myNavbar';
import blogRequest from '../Helpers/Data/blogRequest';
import documentationRequest from '../Helpers/Data/documentationRequest';
import podcastRequest from '../Helpers/Data/podcastRequest';
import tutorialRequest from '../Helpers/Data/tutorialRequest';
import Profile from '../Components/Profile/profile';
import ProjectAddForm from '../Components/projectAddForm/projectAddForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import ProjectDisplay from '../Components/projectDisplay/projectDisplay';
import userDataRequest from '../Helpers/Data/userDataRequest';

class App extends Component {
  state = {
    authed: false,
    blogs: [],
    documentations: [],
    podcasts: [],
    tutorials: [],
  }

  componentDidMount() {
    connection();

    userDataRequest()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });

    blogRequest()
      .then((blogs) => {
        this.setState({ blogs });
      })
      .catch((error) => {
        console.error('error with getting blogs', error);
      });

    documentationRequest()
      .then((documentations) => {
        this.setState({ documentations });
      })
      .catch((error) => {
        console.error('error with getting documentations', error);
      });

    podcastRequest()
      .then((podcasts) => {
        this.setState({ podcasts });
      })
      .catch((error) => {
        console.error('error with getting podcasts', error);
      });

    tutorialRequest()
      .then((tutorials) => {
        this.setState({ tutorials });
      })
      .catch((error) => {
        console.error('error with getting tutorials', error);
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
            <ProjectDisplay
              blogs={this.state.blogs}
              documentations={this.state.documentations}
              podcasts={this.state.podcasts}
              tutorials={this.state.tutorials} />
          </div>
        </div>
      </div>
    );
  }
}


export default App;
