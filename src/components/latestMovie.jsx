//import data
import { latestMovie } from "../data/movies"
//import style
import '../style/Movies.css'
//import icons
import { CiStar,CiRead,CiMedal } from "react-icons/ci";

export function LatestMovie (){
    return(
        <section className="latestMovie"> 
            <div className="imageContainer">
                <img src={'https://image.tmdb.org/t/p/original'+latestMovie.poster_path}/>
            </div>
            <article className="info">
                <header>New Movie!</header>
                <h1>{latestMovie.title}</h1>
                <p>{latestMovie.overview}</p>
                <div className="notes">
                    <span className="note"><CiRead/> Popularity</span>
                    <span><CiStar/> Vote Averague</span>
                    <span><CiMedal/> Vote Count</span>
                </div>
                <section>
                    <h1>Geners</h1>
                    <div>

                    </div>
                </section>
            </article>
        </section>
    )
}