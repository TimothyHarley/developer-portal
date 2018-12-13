import React, { Component } from 'react';
import connection from '../Helpers/Data/connection';
import Auth from '../Components/Auth/Auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

class App extends Component {
  componentDidMount() {
    connection();
  }

  render() {
    return (
      <div className="App">
        <Auth />
      </div>
    );
  }
}


export default App;
