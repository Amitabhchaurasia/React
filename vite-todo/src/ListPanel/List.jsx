import "./style.css";

function List({task}){
    return(
        <div className="list">
            <h4>{task}</h4>
        </div>
    );
}

export default List;