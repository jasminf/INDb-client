import React, {Component} from 'react';
import SearchBox from "../Search/SearchBox";
import SearchResults from "../Search/SearchResults";
// import Footer from './Footer'
import PropTypes from "prop-types";
import { searchArtist, searchComics } from "../apiRequests";
// import {Route, Switch} from "react-router-dom";
// import SignIn from "../Users/signIn";

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
        <SearchBox
          onSearchSubmit={this.onSearchArtist}
          onClearSearchSubmit={this.onClearSearch}
        />
        <SearchResults results={results} />
        {/*<Footer/>*/}
      </React.Fragment>
    );
  }
}

export default SearchPage;

/*
 <div className="container">
  <div className="nav-content">
    < ul className="tabs tabs-transparent">
              <li className="tab"><a href="#test1">Search Artist</a></li>
              <li className="tab"><a href="#test4">Search Album</a></li>
              <li className="tab"><a href="#test2">Search Comic</a></li>
              <li className="tab"><a href="#test3">Search Character</a></li>
            </ul>
           </div>
          </div>
 */