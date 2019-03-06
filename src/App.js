import React, { Component } from 'react';
import './App.css';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import Navbar from './Components/Layouts/navbar.js';
import Index from './Components/Layouts/Index.js';
import Lyrics from './Components/Tracks/Lyrics.js';
import {Provider} from './Context';

class App extends Component {
  render() {
    return (
      <Provider>
        <BrowserRouter>
          <React.Fragment>
            <Navbar/>
            <div className="container">
              <Switch>
                <Route exact path="/" component = {Index}/>
                <Route exact path="/lyrics/track/:id" component = {Lyrics}/>
              </Switch>
            </div>
          </React.Fragment>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
