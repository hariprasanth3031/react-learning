import s from "./style.module.css"
import { FiveStar } from "../FiveStarComponent/FivStarComponent";

export function TvShowDetails({tvShow}){

    const rating = tvShow.vote_average / 2;
    return (
        <div>
            <div className={s.name}>
                {tvShow.name}
            </div>
            <div className={s.rating_container}>
                <FiveStar rating = {rating}/>
                <span className={s.rating}>{rating}/5</span>
            </div>
            <div className={s.overview}>
                {tvShow.overview}
            </div>
        </div>
        
    );
}