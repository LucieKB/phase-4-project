import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"

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
            <iframe src="https://giphy.com/embed/12dFQ2qmeyMgqk" width="100" height="100" align="right" class="giphy-embed" opacity={0.4} margin="none"></iframe>
        </div>
        <div className="navbar">
            <nav>
                <Link to ="/">Home</Link>
                <Link to ="/categories">All Categories</Link>
                <Link to ="/posts">My posts</Link>
                <span>{user.username + " is logged in"} </span>
                <div><iframe src={user.img_url} alt={user.username} class="avatar" /></div>
                <button onClick={handleLogoutClick}>Logout</button>
            </nav>
        </div>
        </>
    )
}

export default NavBar;