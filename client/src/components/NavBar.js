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
        {/* <div className="header" id="title">
            The Teachers Wellness App
            <iframe src="https://giphy.com/embed/12dFQ2qmeyMgqk" width="100" height="100" align="right" class="giphy-embed" opacity={0.4} margin="none"></iframe>
        </div> */}
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
                <Link to={`/users/${user.id}/my-categories`}>My Favorite Categories</Link>
                <Link to ={`/users/${user.id}/my-posts`}>My Posts</Link>  
            <div className="wrap">
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