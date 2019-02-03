import React, {Component} from 'react';
import {fetchComicsCharacters} from '../apiRequests';


class UserFav extends Component {
  state = {
    characters: null,
  };

  componentDidMount() {
    fetchComicsCharacters()
      .then((charactersData)=> {
        const results = charactersData.data.results;
        this.setState({ characters: results });
      });
  }
  render() {
    const { characters } = this.state;
    if (!characters) {
      return (
        <div>
          <spinner/>
          <h1>Loading...</h1>
        </div>
      )
    }
    return (
      <div className="favorites_list">
        <h1>
          Favorites List
        </h1>
        {characters.map((character) => {
          return (
            <div className="col-md-5">
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  <h3 key={character.id}>{character.name}</h3>
                  <p key={character.id}>{character.description}</p>
                  <div className="card width: 18rem;">
                    <img key={character.id} src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                         className="card-img-top" alt="pic"/>
                  </div>
                </div>
              </div>
            </div>
            );
          })}
      </div>
    );
  }
}
export default UserFav;
