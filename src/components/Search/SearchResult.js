import React, { Component } from 'react';
import { fetchArtist} from '../apiRequests';

class SearchResult extends Component {
  state = {
    artist: null,
  };
  componentDidMount() {
    fetchArtist().then( (artist)=> {
      setTimeout( ()=> {
        this.setState({artist});
      }, 2000);
    });
  }
  render() {
    const { artist } = this.state;
    const text = artist ? `${artist.name}` : 'Loading...';
    return (
      <div >
        <p>{text}</p>
      </div>
    );
  }
}
export default SearchResult;

