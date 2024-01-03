import { useState } from "react";


function Counter(c){
    
    let [count,setCount]=useState(0);

    let inCount= ()=>{
        count++;
        setCount(count);
    }

    return(
        <>
        <h3>Count is {count}</h3>
        <button onClick={inCount}>Click Here</button>
        </>
    );
}

export default Counter;