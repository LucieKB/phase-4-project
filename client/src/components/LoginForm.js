import React, { useState, useContext } from "react";
import { UserContext } from "../contexts/UserContext";

function LoginForm(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const {setUser} = useContext(UserContext)

    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        setErrors([]);
        fetch("/login", {
            method: "POST", 
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        }).then((r) => {
             setIsLoading(false);
            if (r.ok) {  
                r.json().then((user) => setUser(user));
            } else {
                r.json().then((err) => setErrors(err.errors))
            }         
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Username: 
                <input 
                    htmlFor="username"
                    type="text" 
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}/>
            </label>
            <label>
                Password: 
                <input 
                    htmlFor="password"
                    type="password" 
                    id="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
            </label>
            <button type="submit">{isLoading ? "Loading..." : "Login"}</button>
            <label>
                {/* {errors.map((err) => (
                    <p key={err}>{err}</p> */}
                {/* ))} */}
            </label>

        </form>
    )
}

export default LoginForm