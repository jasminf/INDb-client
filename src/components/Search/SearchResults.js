import React, {Component} from "react";
import _isEmpty from 'lodash/isEmpty';
import PropTypes from 'prop-types';
import SearchResultRow from './SearchResultRow';


class SearchResults extends Component {

  static propTypes = {
    results: PropTypes.arrayOf(
      SearchResultRow.propTypes.searchResult
    ).isRequired
  };

  static defaultProps = {
    results: [],
  };

  render() {
    const { results } = this.props;

    if (_isEmpty(results)) {
      return (
        <h5>Start searching...</h5>
      )
    }

    return (
      <div>
        {results.map( (searchResult) => (
          <SearchResultRow searchResult={searchResult} key={searchResult.id} />
        ))}
      </div>
    );
  }
};

export default SearchResults;

