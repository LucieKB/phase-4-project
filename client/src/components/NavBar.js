import React from "react";
import { Link } from "react-router-dom";

function NavBar({ user, setUser }){

    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
            if (r.ok) {
                setUser(null);
            }
        });
    }

    return(
        <>
        <div className="header" id="title">
            The Teachers Wellness App
        </div>
        <div className="navbar">
            <nav>
                <Link to ="/">Home</Link>
                <Link to ="/categories">All Categories</Link>
                <Link to ="/posts">My posts</Link>
                {user.username + " is Logged In"}
                <button onClick={handleLogoutClick}>Logout</button>
            </nav>
        </div>
        </>
    )
}

export default NavBar;