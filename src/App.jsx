import { useState } from "react";
import { DisplayDifficulty } from "./components/DisplayDifficulty/DisplayDifficulty";
import { MenuListItems } from "./components/MenuListItems/MenuListItems";
import s from "./style.module.css"
export function App(){
    
    const [currentDifficulty, setDifficulty]= useState();

    const onDifficultyChangeEvent = (difficulty) => {
        setDifficulty(difficulty)
    };
    return (
        <div>
            <h1>Select difficulty</h1>
            <div className={s.container}>
                <MenuListItems difficulty={currentDifficulty} onDifficultyChange = {onDifficultyChangeEvent}/>
                <DisplayDifficulty difficulty = {currentDifficulty}/>
            </div>
        </div>
        
    );
}