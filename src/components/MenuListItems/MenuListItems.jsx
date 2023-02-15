import { MenuList } from "../MenuList/MenuList";
import s from "./style.module.css"
import { DIFFICULTIES } from "./constants";

export function MenuListItems(props){
    return(
        <div className={s.container}>
            {
                DIFFICULTIES.map((difficulty) =>(
                 <MenuList 
                    isSelected = {props.difficulty === difficulty}
                    onClick ={props.onDifficultyChange}
                    difficulty = {difficulty} />
            
                )
                )
            }
            </div>
    );
}