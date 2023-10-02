import React from "react";
import BurnoutStat from "../images/BurnoutStat.jpg";
import FedUpTeachers from "../images/FedUpTeachers.jpg";
import Satisfaction from "../images/Satisfaction .jpg";


function Home({user}){

    return(
        <div>
        <h1>Welcome, {user.username}</h1>
    

    <div>
        <iframe width="476" height="267" src="https://abc7ny.com/video/embed/?pid=12078880" ></iframe>
        <div><img src= {BurnoutStat}/></div>
        <div><img src={FedUpTeachers}/></div>
        <div><img src={Satisfaction}/></div>
    </div>
    </div>

)}

export default Home