import React, {Component} from "react";
import PropTypes from "prop-types";

class SearchBox extends Component {

  static propTypes = {
    onSearchSubmit: PropTypes.func.isRequired,
    onClearSearchSubmit: PropTypes.func.isRequired,
  };

  state ={
    searchQuery: '',
  };

  componentDidMount() {

  }

  get isSearchButtonActive() {
    const { searchQuery } = this.state;
    return !!searchQuery;
  }

  onSearchQueryChanged = (event)=> {
    const searchQuery = event.target.value;
    this.setState({searchQuery});
  };

  onClearSearchButtonClicked = ()=> {
    const { onClearSearchSubmit } = this.props;
    this.setState({searchQuery: ''});
    onClearSearchSubmit();
  };

  onSearchButtonClicked = ()=> {

    const { onSearchSubmit } = this.props;
    const { searchQuery } = this.state;

    if (!!searchQuery) {
      onSearchSubmit(searchQuery)
    }
  };

  render() {
    return (
      <div className="search-box">
        <div className=" card-body mb-4 p-4">
          <h1 className="display-4 text-center">
            <i className="fas fa-music" /> Search Artist
          </h1>
          <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Search For A Artist..."
            name="artistName"
            value={this.state.searchQuery}
            onChange={this.onSearchQueryChanged}
          />
          </div>
          <button
            disabled={!this.isSearchButtonActive}
            onClick={this.onSearchButtonClicked}
            className="btn btn-lg mb-5"
            >Search</button>
          <button
            onClick={this.onClearSearchButtonClicked}
            className="btn btn-lg mb-5"
            >Clear</button>
        </div>
      </div>
    );
  }
};
export default SearchBox;



