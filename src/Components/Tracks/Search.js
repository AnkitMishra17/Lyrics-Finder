import React, {Component} from 'react'
import {Context} from '../../Context';
import axios from 'axios';

class Search extends Component {
  state={
    trackTitle: ''
  }

  getSong = (dispatch,e) =>{
    e.preventDefault();
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track=${this.state.trackTitle}&
      page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_TOKEN}`)
      .then(res =>{ //console.log(res.data);
        dispatch({
          type: 'TRACKS_SEARCH',
          payload: res.data.message.body.track_list
        });
      })
      .catch(err => console.log(err))
  this.setState({trackTitle: ""});
  }
  onChange = (e) =>{
    this.setState({[e.target.name]: e.target.value})
  }

  render () {
      return (
      <Context.Consumer>
        {value=>{
          const {dispatch} = value;
          return(
            <div className="card card-body mb-4 p-4">
              <h1 className="display-4 text-center">
                  <i className="fas fa-headphones-alt"></i> Search for a Song
              </h1>
              <p className="text-center lead">Get the lyrics for your favourite songs</p>
              <form onSubmit={this.getSong.bind(this,dispatch)}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="trackTitle"
                    value={this.state.trackTitle}
                    placeholder="Enter Song Title Here.."
                    onChange = {this.onChange}
                    />
                </div>
                <button className="btn btn-block mb-5 btn-lg btn-dark" type="submit">
                     Get Song Lyrics
                </button>
              </form>
            </div>
          )}
        }
      </Context.Consumer>
      );
  }
}

export default Search;
