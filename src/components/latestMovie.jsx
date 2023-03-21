//import data
import { latestMovie } from "../data/movies"
//import style
import '../style/Movies.css'
//import icons
import { CiStar,CiRead,CiMedal } from "react-icons/ci";
//import image
import cinePhoto from '../images/pexels-tima-miroshnichenko-7991378.jpg'

export function LatestMovie (){
    return(
        <section className="latestMovie"> 
            <div className="imageContainer">
                <img src={
                    (latestMovie.poster_path == undefined)?
                    cinePhoto :
                    'https://image.tmdb.org/t/p/original'+latestMovie.poster_path
                }/>
            </div>
            <article className="info">
                <header>New Movie!</header>
                <div>
                <h1>{latestMovie.title}</h1>
                {
                            (latestMovie.adult)?
                            <spam>+18</spam> : <span>Family</span>
                        }
                </div>
                <p>{latestMovie.overview}</p>
                <div className="notes">
                    <span className="note"><CiRead/> Popularity</span>
                    <span><CiStar/> Vote Averague</span>
                    <span><CiMedal/> Vote Count</span>
                </div>
                <section className="genresInfo">
                    <h1>Geners</h1>
                    <div className="genresContainer">
                        {   
                            latestMovie.genres.length === 0?
                            <span>No geners defined</span> :
                            latestMovie.genres.map((genre)=>(
                                <span>{genre}</span>
                            ))
                        }
                    </div>
                </section>
            </article>
        </section>
    )
}