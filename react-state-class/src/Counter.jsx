import { useState } from "react";


function Counter(c){
    
    let [count,setCount]=useState(0);

    let inCount= ()=>{
        // count++;
        // setCount(count);
        //   setCount(count); this is not possible , so that 
        //we can use here call backs for multiple functions 
        setCount((currentCount)=>{
            return currentCount+1;
        })
        setCount((currentCount)=>{
            return currentCount+1;
        })
    }

    return(
        <>
        <h3>Count is {count}</h3>
        <button onClick={inCount}>Click Here</button>
        </>
    );
}

export default Counter;