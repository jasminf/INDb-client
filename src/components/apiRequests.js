import axios from "axios";

export const fetchArtist = ()=> {
  return axios.get('/main/artist')
    .then( (response)=> {
      const artist = response.data.artist;
      console.log('loaded artist', artist);
      return artist
    })
    .catch(console.error)
};

export const searchArtist = (searchQuery)=> {
  return axios.get(`/search/music/artist/${searchQuery}`)
    .then( (response)=> {
      const search = response.data.search;
      console.log(search);
      return search
    })
    .catch(console.error)

};

export const queryResult = ()=> {
  return axios.get('/search/artists')
    .then( (response)=> {
      const query = response.data.artist;
      console.log('loaded query', query);
      return query
    })
    .catch(console.error)
};


export const musicGenre = ()=> {
  return axios.get('/genre')
    .then((response) => {
      const query = response.data;
      console.log('loaded query', query);
      return query
    })
    .catch(console.error)
};


export const fakeFav = ()=> {
  return axios.get('/comics/view_all')
    .then((response) => {
      const query = response.data;
      console.log('loaded query', query);
      return query
    })
    .catch(console.error)
};


const marvelApiKey = `4e9f1ac102d21e2544e249194d8d04aa&hash=74907e55eb15635a25c8beb9aa629e70`;

export const fetchComicsCharacters = ()=> {
  return axios.get(`https://gateway.marvel.com/v1/public/events/29/characters?ts=1&apikey=${marvelApiKey}`)
  // return axios.get(`http://gateway.marvel.com/v1/public/characters?ts=1&apikey=${marvelApiKey}`)
    .then( (response)=> {
      const comics = response.data;
      console.log('loaded comic', comics);
      return comics
    })
    .catch(console.error)
};
