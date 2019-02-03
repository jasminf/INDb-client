import React from "react";
import PropTypes from 'prop-types';
import style from './SearchResultRow.style';

const SearchResultRow = (props)=> {
  const { searchResult: {id, name, picture_medium} } = props;
  return (
    <div>
      <h1 style={style.title}>{name} (ID: {id})</h1>
      <img src={picture_medium} style={style.image}/>
    </div>
  );
};

SearchResultRow.propTypes = {
  searchResult: PropTypes.shape({
    id: PropTypes.any,
    name: PropTypes.string,
    // pictureUrl: PropTypes.string,
    picture_medium: PropTypes.string, // hack!
  }).isRequired
};

export default SearchResultRow;
