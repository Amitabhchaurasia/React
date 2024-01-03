import { useState } from "react";
import UserCard from "./UserCard";

function UserS() {
    const [users, setUsers] = useState([
        { name: "Ankur", id: 2134 },
        { name: "Rohan", id: 3456 }
    ]);

    const [newUserName, setNewUserName] = useState("");
    const [newUserId, setNewUserId] = useState("");

    function handleClick() {
        // Create a new user object
        const newUser = {
            name: newUserName,
            id: parseInt(newUserId, 10) // Convert to integer
        };

        // Update the state to include the new user
        setUsers(prevUsers => [...prevUsers, newUser]);

        // Clear input fields
        setNewUserName("");
        setNewUserId("");
    }

    return (
        <>
            <input
                type="text"
                placeholder="UserName"
                value={newUserName}
                onChange={(e) => setNewUserName(e.target.value)}
            />
            <input
                type="number"
                placeholder="UserId"
                value={newUserId}
                onChange={(e) => setNewUserId(e.target.value)}
            />
            <button onClick={handleClick}>Add</button>
            {users.map((user, index) => (
                <UserCard key={index} name={user.name} uId={user.id} />
            ))}
        </>
    );
}

export default UserS;
