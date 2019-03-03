import React from "react";
import PropTypes from 'prop-types';
import style from './SearchResultRow.style';
import {saveArtistFav} from "../apiRequests";


const SearchResultRow = (props)=> {
  const { searchResult: {id, name, picture_medium} } = props;

  function onSaveClicked() {
  console.log('save clicked', props);
  saveArtist(id)
}

  const saveArtist = (deezerArtistId)=> {
    saveArtistFav(deezerArtistId).then( (favorite)=> {
      console.log('artist save in fav', favorite);
    });
  };
  
  return (
      <div>
        <div className="container" >
          <div className="row">
            <div className="col s12 m6 l4">
              <div className="card">
                <div className="card-image">
                  <img src={picture_medium}/>
                  <a className="btn-floating halfway-fab waves-effect waves-light cyan darken-4"
                     onClick={onSaveClicked}>
                    <i className="material-icons">favorite_border</i>
                    />
                  </a>
                </div>
                <div className="card-content">
                  <span  className="card-title">{name}</span>
                  <p style={style.p}>blerb</p>
                </div>
              </div>
            </div>
          </div>
        </div>
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

/*
const onSaverClickChanged = (event)=> {
    const deezerArtistId = event.target.value;
    console.log(deezerArtistId)
  };


<b> value={this.propTypes.id}
                      onClick={onSaverClickChanged}
                      </b>
 */
