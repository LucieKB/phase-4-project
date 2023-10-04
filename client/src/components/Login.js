import React, {useState} from "react";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";


function Login(){
    const [showLogin, setShowLogin] = useState(false)

    return(
        <>
        <div className="header">
            <div className="fixed"><h2>The Teacher Wellness App :</h2></div>
            <ul className="typed">
            <li><span>A Community to Help YOU</span></li>
            <li><span>Feel Good Doing Your Job.</span></li>  
            </ul>
        </div>
        < br />  
    
        <div>
            {showLogin ? 
            (<div>
                <LoginForm />
                <div className= "bottom-wrap">
                    <h3>Don't have an account?</h3>
                    <button className="SignUp-Btn" onClick={() => setShowLogin(false)}>Sign Up</button>
                </div>
            </div>)
              : 
            (<div>
                <SignUpForm />
                <div className= "bottom-wrap">
                    <h3>Already have an account?</h3>
                    <button className="SignUp-Btn" onClick={() => setShowLogin(true)}>Log In</button>
                </div>
            </div>)
           }
        </div>
        </>   
    )

}

export default Login