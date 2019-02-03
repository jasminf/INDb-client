import React, {Component} from "react";
import {searchArtist} from '../apiRequests'

class SearchBox extends Component {
  state ={
    artist: null,
  }
  componentDidMount() {
    searchArtist().then( (artist)=> {
      setTimeout( ()=> {
        this.setState({artist});
      }, 2000);
    });
  }
  render() {
    const { artist } = this.state;
    return (
      <div className="search-box">
        <p>{artist}</p>
        <div className=" card-body mb-4 p-4">
          <h1 className="display-4 text-center">
            <i className="fas fa-music" /> Search Artist
          </h1>
          <form >
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Search For A Artist..."
                name="artistName"
                value={this.state.artist}
                onChange={this.onChange}
              />
            </div>
            <button className="btn btn-lg btn-block mb-5" type="submit"> Search</button>
          </form>
        </div>
      </div>
    );
  }
};
export default SearchBox;



