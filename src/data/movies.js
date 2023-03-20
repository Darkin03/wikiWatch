import axios from 'axios';

const apiKey = '5cec1a15e2c219c4f08d84958efb00e7';

const links = {
  latest: 'https://api.themoviedb.org/3/movie/latest?language=en-US',
  popular: 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
  topRate: 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
  inTheatres: 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
  upComing: 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',
}

async function getLatestMovie(link) {
  try {
    const response = await axios.get(link + `&api_key=${apiKey}`);
    const moviesLatest = {
      id: response.data.id,
      adult: response.data.adult,
      status: response.data.status,
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

async function getMovies(link) {
  try {
    const response = await axios.get(link + `&api_key=${apiKey}`);
    const numberOfMovies = 8;
    const movies = response.data.results.map((movie) => (
      {
        id: movie.id,
        vote_average: movie.vote_average,
        poster_path: movie.poster_path
      }
    ));
    return movies;
  } catch (error) {

  }
}

async function getSummaryMovies(link) {
  try {
    const response = await axios.get(link + `&api_key=${apiKey}`);
    const numberOfMovies = 8;
    const movies = response.data.results.map((movie) => (
      {
        id: movie.id,
        vote_average: movie.vote_average,
        poster_path: movie.poster_path
      }
    ));

    return movies.slice(0, numberOfMovies);
  } catch (error) {

  }
}


//exporting all movie summaries 
export const latestMovie = await getLatestMovie(links.latest);
export const popularMovies = await getMovies(links.popular);
export const summaryPopularMovies = await getSummaryMovies(links.popular);
export const topRatedMovies = await getMovies(links.topRate);
export const summaryTopRatedMovies = await getSummaryMovies(links.topRate);
export const inTheatresMovies = await getMovies(links.inTheatres);
export const summaryInTheatresMovies = await getSummaryMovies(links.inTheatres);
export const upComingMovies = await getMovies(links.upComing);
export const summaryUpComingMovies = await getSummaryMovies(links.upComing);


