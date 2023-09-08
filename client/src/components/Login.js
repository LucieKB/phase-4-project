import React, {useState} from "react";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";

function Login({onLogin}){
    const [showLogin, setShowLogin] = useState(true)

    return(
        <div id="login">
            {showLogin ? (
            <>
            <LoginForm onLogin={onLogin}/>
            <p>Don't have an account?</p>
            <button onClick={() => setShowLogin(false)}>Sign Up</button>
            </>
        ) : (
            <>
            <SignUpForm onLogin={onLogin}/>
            <p>Already have an account?</p>
            <button onClick={() => setShowLogin(true)}>Log In</button>
            </>
        )}
        </div>
    )

}

export default Login