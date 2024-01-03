import "./style.css";
function UserCard({name,uId}){
    return(
        <div className="uc">
            <h3>User Name:{name}</h3>
            <h4>User Id:{uId}</h4>
        </div>
    );
}

export default UserCard;