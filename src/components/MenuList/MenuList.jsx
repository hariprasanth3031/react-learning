import { useState } from "react";
import s from "./style.module.css"

export function MenuList(props){

    const [isHovered, setIshover] = useState(false);

    function activate(){
        setIshover(true);
    }

    function deActivate(){
        setIshover(false);
    }

    console.log("Is hoverd", isHovered)

    const getbackgroundColor = () => {
        if (isHovered) {
            return "#a5e9ff";
        }
        else{
            if (props.isSelected) {
                return "#26baea";
            } else {
              return "#eff0ef";
            } 
        }
    };

    const onClickEvent = () => {
        props.onClick(props.difficulty);
    };

    return(
        <div
            onClick={onClickEvent}
            className={s.container}
            onMouseEnter={activate}
            onMouseLeave={deActivate}
            style = {{backgroundColor: getbackgroundColor()}}
        > Set to: {props.difficulty}
        </div>
    );
}