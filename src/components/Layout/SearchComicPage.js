/**
import React, {Component} from 'react';
import SearchBox from "../Search/SearchBox";
import SearchResults from "../Search/SearchResults";
import Footer from './Footer'
import PropTypes from "prop-types";
import { searchArtist, searchComics } from "../apiRequests";

class SearchPage extends Component {
  state = {
    results: [],
  };

  onSearchComic = (searchQuery)=> {
    searchComics(searchQuery).then( (comic)=> {
      console.log('found artists', comic);
      this.setState({results: comic});
    });
  };

  onClearSearch = ()=> {
    this.setState({results: []});
  };
  render() {
    const { results } = this.state;
    return (
      <React.Fragment>
        <div className="container">
        <SearchBox
          onSearchSubmit={this.onSearchComic}
          onClearSearchSubmit={this.onClearSearch}
        />
        <SearchResults results={results} />
        <Footer/>
        </div>
      </React.Fragment>
    );
  }
}

export default SearchPage;
**/

