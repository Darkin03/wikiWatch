//import data
import { latestMovie } from "../data/movies";
//import style
import "../style/Movies.css";
//import icons
import { CiStar, CiRead, CiMedal } from "react-icons/ci";
//import image
import cinePhoto from "../images/pexels-tima-miroshnichenko-7991378.jpg";




export function LatestMovie() {
  return (
    <section className="latestMovie">
      <div className="imageContainer">
        <img
          src={
            latestMovie.poster_path == undefined
              ? cinePhoto
              : "https://image.tmdb.org/t/p/original" + latestMovie.poster_path
          }
        />
      </div>

      <article className="info">
      <header>New Movie!</header>
        <div className="titleContainer">
          <h1 className="title">{latestMovie.title}</h1>
          {latestMovie.adult ? (
            <span className="genre">+18</span>
          ) : (
            <span className="genre">Family</span>
          )}
        </div>
        <p>{latestMovie.overview}</p>
        <div className="notes">
          <div className="note">
            <CiRead className="icon" />
            <span className="text">
              <p>Popularity</p>
              {latestMovie.popularity}
            </span>
          </div>
          <div className="note">
            <CiStar className="icon" />
            <span className="text">
              <p>Vote Averague</p>
              {latestMovie.vote_average}
            </span>
          </div>
          <div className="note">
            <CiMedal className="icon" />
            <span className="text">
              <p>Vote Count</p>
              {latestMovie.vote_count}
            </span>
          </div>
        </div>
        <section className="genresInfo">
        <h1>Geners</h1>
        <div className="genresContainer">
          {
            (latestMovie.genres.length === 0)?
              <span className="genre">No geners defined</span>
              : 
              latestMovie.genres.map((genre) => {
                <span className="genre" >{genre}</span>
              })
          }
        </div>
        </section>
      </article>
    </section>
  );
}
