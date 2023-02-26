import s from "./style.module.css"

import {Search as SearchIcon } from "react-bootstrap-icons"
import { useState } from "react";

export function SearchBar({onSubmit}){

    const[value, setValue] = useState("")

    function submit(event){
        if(event.target.value.trim !== "" && event.key === "Enter"){
            onSubmit(event.target.value) 
            setValue("")
        }
       
    }

    function handleChange(event){
        setValue(event.target.value)
    }

    return (
        <div>
            <SearchIcon className={s.icon} />
            <input
             onKeyUp={submit}
             onChange = {handleChange}
             className={s.input}
             type = "text" 
             value = {value}
             placeholder="Search a movie" />
        </div>
    );

}