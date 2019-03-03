import axios from "axios";

export const searchArtist = (searchQuery)=> {
  return axios.get(`/search/music/artist/${searchQuery}`)
    .then( (response)=> {
      const search = response.data.search;
      console.log(search);
      return search
    })
    .catch(console.error)
};

export const searchComics = (searchQuery)=> {
  return axios.get(`/search/marvel/comics/${searchQuery}`)
    .then( (response)=> {
      const search = response.data.search;
      console.log(search);
      return search
    })
    .catch(console.error)
};

export const saveArtistFav = (deezerArtistId)=> {
  return axios.post(`/favorites/save/artist/`,{deezerArtistId})
    .then( (response)=> {
      const favorite = response.data.favorite;
      console.log(favorite);
      return favorite
    })
    .catch(console.error)
};

export const registerUser = (first_name, last_name, password, email)=> {
  return axios.post(`/register/`,{first_name, last_name, password, email})
    .then( (response)=> {
      const user = response.data.user;
      console.log(user);
      return user
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
