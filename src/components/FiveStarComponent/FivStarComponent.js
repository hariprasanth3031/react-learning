import {StarFill, StarHalf, Star } from "react-bootstrap-icons"

export function FiveStar({rating}){

    const starList = []
    
    const fullStar = Math.floor(rating);

    const hasHalfStar = rating - parseInt(rating) >= 0.5

    const emptyStar = 5 - fullStar - (hasHalfStar ? 1 : 0)

    for(let i=0; i<fullStar; i++){
        starList.push(<StarFill key={"star-fill" + i} />);
    }

    if(hasHalfStar){
        starList.push(<StarHalf key={"star-half" + 1}/>)
    }

    for(let i=0; i<emptyStar; i++){
        starList.push(<Star key= {"star-empty" + i} />);
    }

    return <div>{starList}</div>;
}