import { useEffect, useState } from "react";
//import style
import "../style/Movies.css";
//import icons
import { CiStar, CiRead, CiMedal } from "react-icons/ci";
//import image
import cinePhoto from "../images/pexels-tima-miroshnichenko-7991378.jpg";
//import data
import { getLatest } from "../data/movies";

export function LatestMovie() {
  //info of the latest movie
  const [latest, setLatest] = useState({});

  useEffect(() => {
    async function fetchData() {
      const latest = await getLatest();
      setLatest(latest);
    }
    fetchData();
  }, []);

  return (
    <section className="latestMovie">
      <div className="imageContainer">
        <img
          src={
            latest.poster_path == undefined
              ? cinePhoto
              : "https://image.tmdb.org/t/p/original" + latest.poster_path
          }
        />
        <article className="info">
          <div className="titleContainer">
            <h1 className="title">{latest.title}</h1>
            {latest.adult ? (
              <span className="genre">+18</span>
            ) : (
              <span className="genre">Family</span>
            )}
          </div>
          {latest.overview === "" ? (
            <p className="">No description</p>
          ) : (
            <p className="description">{latest.overview}</p>
          )}
          <div className="notes">
          <div className="note">
            <CiRead className="icon" />
            <span className="text">
              <p>Popularity</p>
              {latest.popularity}
            </span>
          </div>
          <div className="note">
            <CiStar className="icon" />
            <span className="text">
              <p>Vote Averague</p>
              {latest.vote_average}
            </span>
          </div>
          <div className="note">
            <CiMedal className="icon" />
            <span className="text">
              <p>Vote Count</p>
              {latest.vote_count}
            </span>
          </div>
        </div>
        
        <section className="genresInfo">
        <h1>Geners</h1>
        <div className="genresContainer"> 
            {
                latest.genres?.map((genre)=>{
                    return(
                        <span key={latest.genres.indexOf(genre) } className="genre">{genre.name}</span>
                    )
                })
            }
        </div>
        </section>
        </article>
      </div>
    </section>
  );
}
