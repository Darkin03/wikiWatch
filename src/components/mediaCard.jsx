export function MediaCard(props){
    return (
        <div>
            <label>{props.media.vote_average}</label>
            <img src={props.media.poster_path}/>
        </div>
    )
}