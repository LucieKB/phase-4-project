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
         <div className="header">
            <div className="fixed"><h2>The Teacher Wellness App :</h2></div>
            <ul className="typed">
            <li><span>A Community to Help YOU</span></li>
            <li><span>Feel Good Doing Your Job.</span></li>  
            </ul>
        </div>
        <div className="navbar">
            <nav>
                <Link to ="/">Home</Link>
                <Link to ="/categories">All Categories</Link>
                <Link to={`/users/${user.id}/categories`}>My Favorite Categories</Link>
                <Link to ={`/users/${user.id}/posts`}>My Posts</Link>  
            <div className="avatar-box">
                   <p id="name"> {user.username + " is logged in"} </p>
                  <button className="LogOut-Btn" onClick={handleLogoutClick}>Logout</button>
                    <img id="avatar" title= "user-avatar" src={user.img_url}/> 
            </div>
                </nav>  
                
                 
            
        </div>
        </>
    )
}

export default NavBar;