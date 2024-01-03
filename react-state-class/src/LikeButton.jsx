import { useState } from "react";

function LikeButton(){
    let [isLiked,setisLiked]=useState(false);
    let [count,setCount]=useState(0);
    let toggleLike =()=>{
        setisLiked(!isLiked);
        count++;
        setCount(count);
    }
    let styles={
        color:"red"
    };
    return(
        <>
        <h3>No.of time clicked ={count}</h3>
        <p onClick={toggleLike}>
        {isLiked?<i className="fa-solid fa-heart" style={styles}></i>:<i className="fa-regular fa-heart"></i>}
        </p>
        </>
    );
}

export default LikeButton;