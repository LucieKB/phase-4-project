import React, {useState, useContext} from "react";
import { UserContext } from "../contexts/UserContext";
import GradeCheckBox from "./GradeCheckBox"


function SignUpForm(){
    const {setUser} = useContext(UserContext)
    const [formData, setFormData] = useState({
        username : (""),
        password : (""),
        password_confirmation : (""),
        state : (""),
        grades_taught : ([]),
        years_experience : (""),
        subjects_taught : ([]),
        img_url : ("")
    })
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState([]);
    const [isChecked, setIsChecked] = useState(false);
    const [gradesTaught, setGradesTaught] = useState([])

    const states = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming']
    const handleSelectState = (e) => { console.log ("e.target.value=" + e.target.value)
              setFormData({...formData, state:e.target.value})
          }

   

  const subjects = ['all subjects', 'English','math', 'art','science','history','music','geography','P.E (Physical Education)','drama','biology','chemistry','physics','I.T (Information Technology)','foreign languages','social studies','technology','philosophy','graphic design','literature','algebra','geometry']
  const handleChangeSubject = (e) => {
    console.log ("e.target.value=" + e.target.value)
            setFormData({...formData, subjects_taught:e.target.value})
        }

        console.log(formData)

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/signup", {
        method: "POST", 
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
          }).then((r) => {
            console.log(r)
              setIsLoading(false);
              if (r.ok) {
                  r.json().then((user) => setUser(user));
              } else {
                  r.json().then((err) => {console.log(err.errors)
                  setErrors(err.errors)}
                  )
              }
          });
  }
    

    return (
  <>
  <div className="wrapper">
    <div className="inner-signUp">
      <div className="img-holder">
           <img id="teacher-quote" src="https://m.media-amazon.com/images/I/71JTYG-IMBL._AC_UF1000,1000_QL80_.jpg" alt/>
      </div>
        <form onSubmit={handleSubmit}>

          <div className="form-wrapper">
              <label><strong><u>Username:</u></strong><em style={{color:"red"}}>*</em>
              <input
                className="form-control"
                type="text"
                id="username"
                autoComplete="off"
                value={formData.username}
                onChange={(e) => setFormData({...formData, username:e.target.value})}
              />
              </label>
          </div>

          <div className="form-wrapper">
            <label><strong><u>Password:</u></strong><em style={{color:"red"}}>*</em>
            <input
              className="form-control"
              type="password"
              id="password"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password:e.target.value})}
              autoComplete="current-password"
            />
            </label>
          </div>

          <div className="form-wrapper">
            <label><strong><u>Password Confirmation:</u></strong><em style={{color:"red"}}>*</em>
            <input
              className="form-control"
              type="password"
              id="password_confirmation"
              value={formData.password_confirmation}
              onChange={(e) => setFormData({...formData, password_confirmation:e.target.value})}
              autoComplete="current-password"
            />
            </label>
          </div>

          <div className="form-wrapper">
            <label>
              <p><strong><u>State: </u></strong>
              <select onChange={handleSelectState}>
                {states.map((state)=> {
                  return (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  )
                  })
                }
              </select>
              </p>
            </label>
          </div>

          <div className="form-wrapper">
            <label> 
              <GradeCheckBox gradesTaught={gradesTaught} setGradesTaught={setGradesTaught} formData={formData} setFormData={setFormData}/>
            </label>
          </div>

          <div className="form-wrapper">
            <label> <strong><u>Years of experience:</u></strong><em style={{color:"red"}}>*</em>
            <input
                className="form-control"
                type="number"
                pattern="[0-59]*"
                name="years_experience"
                value={formData.years_experience}
                placeholder="How long have you been teaching for?"
                onChange={(e)=>setFormData({...formData, years_experience:e.target.value})}
            />
            </label>
          </div>

          <div className="form-wrapper">
            <label><strong><u>Main Subject:</u></strong>
              <select onChange={handleChangeSubject}>
                {subjects.map((subject)=> {
                  return (
                    <option key={subject} value={subject}>
                      {subject}
                    </option>
                  )
                  })
                }
              </select>
            </label>
          </div> <br />

          <div className="form-wrapper">
            <label><strong><u>Profile Image:</u></strong>
            <input
              className="form-control"
              type="text"
              id="imageUrl"
              value={formData.img_url}
              placeholder= "copy the image url here"
              onChange={(e) => setFormData({...formData, img_url:e.target.value})}
            />
            </label>
          </div>
          <button type="submit">{isLoading ? "Loading..." : "Sign Up"}</button>
            <label>
                {errors.map((err) => (
                    <em key={err}>{err}</em>
                ))}
            </label>
        </form>
    </div>
  </div>
  </>
      );
}
export default SignUpForm

