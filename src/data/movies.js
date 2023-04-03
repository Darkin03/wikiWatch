import axios from "axios";

const apiKey ='5cec1a15e2c219c4f08d84958efb00e7';

const links = { 
  latest: 'https://api.themoviedb.org/3/movie/latest?language=en-US',
};

 export async function getLatest() {
  const response = await axios.get(links.latest, {
    params: {
      api_key: apiKey,
    },
  });
  const moviesLatest = {
    id: response.data.id,
    adult: response.data.adult,
    status: response.data.status,
    title: response.data.title,
    overview: response.data.overview,
    poster_path: response.data.poster_path,
    popularity: response.data.popularity,
    vote_average: response.data.vote_average,
    vote_count: response.data.vote_average,
    genres: response.data.genres,
  };

  return moviesLatest;
};
