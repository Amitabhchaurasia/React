import "./style.css";
import List from "../ListPanel/List";
import { useState } from "react";

function Panel() {
    const [todoData, setData] = useState([]);
    const [newTodoData, setNewTodoData] = useState("");

    function handleClick() {
        let span=document.querySelector("#emptyTask")
        if (newTodoData != "") {
            const newData = { d: newTodoData };
            setData((prevData) => [...prevData, newData]);
            setNewTodoData("");
            span.innerHTML="";
        }else{
            span.innerHTML="Enter Task";
        }


    }

    return (
        <>
            <div className="panel">
                <input type="text" placeholder="ADD NEW TASK" value={newTodoData} onChange={(e) => setNewTodoData(e.target.value)}/>
                <button onClick={handleClick}>Add</button>
            </div>
            <p id="emptyTask" ></p>
            <div className="dataCont">
            {todoData.reverse().map((item, index) => (
                <List key={index} task={item.d} />
            ))}
            </div>

        </>
    );
}

export default Panel;
