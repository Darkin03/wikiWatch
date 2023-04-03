import { Link } from "react-router-dom";
//import components
import { MediaCard } from "./mediaCard";
//import style 
import "../style/MediaCard.css";
//import icons 
import { CiStar } from "react-icons/ci";
export function SectionMedia(props){
    return(
        <section className="mediaCard">
            <header>
                <h1 className="title">{props.title}</h1>
                <Link className="link"><CiStar/>  All</Link>
            </header>
        </section>
    )
}