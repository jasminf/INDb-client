import React, {Component} from 'react';
import {searchArtist} from '../apiRequests'

/**
 *
 * - What's the current search query value from the input
 * - Fetch search results from the server with the search query
 * - When the search results are loaded, display them
 *
 */

class Search extends Component {
  state = {
    searchQuery: ''
  };

  onChange = (event)=> {
    console.log('on change', event.target.value);
    const searchQuery = event.target.value;
    this.setState({searchQuery});
  };

  render() {
    return (
      <form>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="search-query"
            value={this.state.searchQuery}  // need to
            onChange={this.onChange}
          />
          <button>Search</button>
        </div>
      </form>
    )
  }
}

export default Search;












