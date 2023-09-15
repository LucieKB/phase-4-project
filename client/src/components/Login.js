import React, {useState} from "react";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";


function Login(){
    const [showLogin, setShowLogin] = useState(true)

    return(
        <div id="login">
            {showLogin ? (
            <>
            <LoginForm />
            <p>Don't have an account?</p>
            <button onClick={() => setShowLogin(false)}>Sign Up</button>
            </>
        ) : (
            <>
            <SignUpForm />
            <p>Already have an account?</p>
            <button onClick={() => setShowLogin(true)}>Log In</button>
            </>
        )}
        </div>
    )

}

export default Login