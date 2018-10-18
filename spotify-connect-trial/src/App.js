import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

const SpotifyWebAPI = require('spotify-web-api-node')

const spotifyAPI = new SpotifyWebAPI() 

class App extends Component {

  cheese = () => {
    spotifyAPI.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE')
      .then(function(data) {
        console.log('hello, test')
        console.log('Artist albums', data.body);
      }, function(err) {
        console.error(err);
      });
  }

  render() {
    this.cheese()
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            HELLO
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            CHEESE
          </a>
        </header>
      </div>
    )
  }
}

export default App
