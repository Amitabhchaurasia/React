import { useState } from "react";

function init(){
    window.alert("init function called");
    return Math.random();
}

function Counter(c){
    
    // let [count,setCount]=useState(0);
    //we can also pass the function in useSate
    let [count,setCount]=useState(init);
    //if we will call method as below , after rendering it will call method will will give alter
    // let [count,setCount]=useState(init());

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
        //and if state value have no change , then componet will not render , no need of it 
    }

    return(
        <>
        <h3>Count is {count}</h3>
        <button onClick={inCount}>Click Here</button>
        </>
    );
}

export default Counter;