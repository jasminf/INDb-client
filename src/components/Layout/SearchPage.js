import React, {Component} from 'react';
import SearchBox from "../Search/SearchBox";
import SearchResults from "../Search/SearchResults";
import Footer from './Footer'
import PropTypes from "prop-types";
import { searchArtist } from "../apiRequests";

class SearchPage extends Component {

  state = {
    results: [],
  };

  onSearchArtist = (searchQuery)=> {
    searchArtist(searchQuery).then( (artists)=> {
      console.log('found artists', artists);
      this.setState({results: artists});
    });
  };

  onClearSearch = ()=> {
    this.setState({results: []});
  };

  render() {
    const { results } = this.state;
    return (
      <React.Fragment>
        <SearchBox
          onSearchSubmit={this.onSearchArtist}
          onClearSearchSubmit={this.onClearSearch}
        />
        <SearchResults results={results} />
        <Footer/>
      </React.Fragment>
    );
  }

}

export default SearchPage;

