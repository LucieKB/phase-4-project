import React, {useState} from "react";
import BurnoutStat from "../images/BurnoutStat.jpg";
import FedUpTeachers from "../images/FedUpTeachers.jpg";
import Satisfaction from "../images/Satisfaction .jpg";
import "./Home.css"


function Home({user}){
    const [showMore, setShowMore] = useState(false)

    return(
    <div className="wrapper">
        <div className="inner-wrapper">
            <h1 style={{textAlign:"center"}}> 🤝 Welcome, {user.username} 🤝</h1>

            <h2 style={{textIndent: "50px", lineHeight: "1.5"}}> Welcome to an app where you will find resources that will support you as an educator. From exploring resources on different topics, to writing your thoughts,opinions or sharing about your own experiences, this website is here for teachers and educators to do there job while <u>not forgetting to take care of themselves first.</u></h2>

            <button id="showmore-Btn" onClick={()=>setShowMore(!showMore)}>Show More</button>
            {showMore?
            (<div>
            <p style={{textAlign:"center"}}>If you are on this website, you are more likely a teacher, or an educator who is exploring the "wellness" aspect of our profession. My name is Lucie Kayser-Bril, and I was a teacher from 2007 to 2022. I started this job because of my own experience in school. Even though I really liked to learn, school was nothing more than a "social" place, and my relations with teachers were less than ideal to put it nicely. </p>
            <p>As a lot of new teachers, I came in full of ideas, willingness and excitement, with my main motivation being : "What do I put in place for students to want to come back tomorrow, and for them to feel empowered and succesfull?". I spent countless hours working during the weekend, after-school, while on vacations, to come up with the next activity/concept that could get my students to learn, meet benchmarks while having fun doing it. During this 15 years journey I met so many teachers with the same passion, the same fire burning : We are here for the students.</p>
            <p>But at the years past by, I started to be able to take a step back and look at everyone around me : in order to be there for their students, teachers were sacrificing so much. I could see the fatigue on their faces, burnout, many of them quitting if they had the means and the opportunity. The lack of recognition, low incomes, long hours had transformed those passionate people into ones that resented their work, while still always putting up with whatever came their way because students had to be at the center. It is true, but without teachers being in a good place, physically, emotionally and mentally, our education system won't be able to thrive in the way it could and should.</p></div>):(null)}
            <hr/>
            <hr/>

            <div> 
                <div className= "description">
                    <div id="image"><iframe width="476" height="267" src="https://abc7ny.com/video/embed/?pid=12078880" ></iframe></div> 
                    <div id="text">
                        <aside> This is a short clip about this teacher, Seth Goshorn, who quit his teaching job after 6 years to become a manager at WalMart. 
                    Not only does he now earn more, but he can look forward to opportunities to climb up the career ladder, which you don't really have in teaching. 
                    He explained to people reacting negatively to his change, that teaching doesn't end after the 40 contract hours : “Even though they’re scheduled for 40 hours, they’re working a lot more than that, whether it’s teaching, grading after school. I coached football and track so those were other things on the weekends. I did summer school. We don’t have all the time off that they think.” <br />
                    <h5><u>Source:</u> abc7NY</h5></aside></div>
                </div>
                    <hr />
                <div className= "description">
                    <div id="image"><img src= {BurnoutStat}/></div>
                    <div id="image"><img src={FedUpTeachers}/></div>
                    <div id="image"><img src={Satisfaction}/></div>
                    <div id="text"> 
                        <aside>
                            <br />
                                <li> K-12 teachers are the #1 most burnt-out profession in The United States</li>
                                <li>44% of teachers in K-12 school report often or always feeling burnout</li>
                                <li>90% of teachers claim that feeling burnt out is a serious problem</li>
                                <li>Over half of teachers say they will leave teaching sooner than originally planned</li>
                                <li>There are 500,000+ fewer educators in the American public school systems post-pandemic</li>
                                <li>44% of public schools posted teaching vacancies in early 2022</li>
                                <li>43% of educator job postings are going unfilled</li>
                                <li>30% of teachers were found to be chronically absent</li>
                                <li>Compensation is the #1 reason educators plan to quit their jobs</li>
                                <h5><u>Source:</u> Devlin Peck</h5>
                        </aside>
                    </div>
                </div>
                    <hr />
               
            </div>
        </div>
    </div>

)}

export default Home