import React, {Component} from 'react';
import {fetchComicsCharacters} from '../apiRequests';
import style from './Favorit-List.style';


class UserFav extends Component {
  state = {
    characters: null,
  };

  componentDidMount() {
    fetchComicsCharacters()
      .then((charactersData) => {
        const results = charactersData.data.results;
        this.setState({characters: results});
      });
  }

  render() {
    const {characters} = this.state;
    if (!characters) {
      return (
        <div>
          <spinner/>
          <h1>Loading...</h1>
        </div>
      )
    }
    return (
      <div>
        <h1>
          Favorites List
        </h1>
        {characters.map((character) => {
          return (
            <div  key={character.id} className="container">
              <div className="row">
                <div className="col s12 m6 l4">
                  <div className="card">
                    <div className="card-image">
                      <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                           className="" alt="pic"/>
                      <a className="halfway-fab btn-floating waves-effect waves-light cyan darken-4">
                        <i className="material-icons">favorite</i>
                      </a>
                    </div>
                    <div className="card-content">
                      <span className="card-title">{character.name}</span>
                      <p style={style.p}> {character.description}</p>
                    </div>
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
