import s from "./style.module.css"
import { SMALL_BG_URL } from "../../config";

const MAX_LEN = 40;

export function TVShowListItems({tvShow, onClick}) {

    const onClick_ = () => {
        onClick(tvShow)
    } 

    return (
        <div onClick= {onClick_} className={s.container}>
            <img className={s.img} src = {SMALL_BG_URL+tvShow.backdrop_path} alt = {tvShow.name} />
            <div className={s.title}>{tvShow.length > MAX_LEN ? tvShow.name.slice(0, MAX_LEN)+ "..." : tvShow.name}</div>
        </div>
    ); 

}