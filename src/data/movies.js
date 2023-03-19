import axios from 'axios';

const apiKey = '5cec1a15e2c219c4f08d84958efb00e7';

async function getMovieLatest() {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/latest?api_key=${apiKey}&language=en-US`);
      const moviesLatest = {
        id: response.data.id,
        adult: response.data.adult,
        status: response.status,
        title: response.data.original_title,
        overview: response.data.overview,
        poster_path: response.data.poster_path,
        popularity: response.data.popularity,
        vote_average: response.data.vote_average,
        vote_count: response.data.vote_average
      }
      return moviesLatest;
    } catch (error) {
      console.error(error);
    }
  }

export const moviesLatest = await getMovieLatest();