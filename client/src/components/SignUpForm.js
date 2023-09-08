import React, {useState} from "react";


function SignUpForm({onLogin}){
    const [formData, setFormData] = useState({
        username : (""),
        password : (""),
        password_confirmation : (""),
        state : (""),
        grades_taught : ([]),
        years_experience : (""),
        subjects_taught : ([]),
        image_url : ("")
    })
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState([]);

    const states = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming']
    const handleChangeState = (e) => {
      if(e.target.selected)
          {  
              setFormData({...formData, state:e.target.value})
          }
          }
    const grades = ['Pre-K', 'K', 'Lower Elementary: 1-3rd', 'Upper Elementary: 4-5th', 'Middle School: 6-7th', 'Junior High: 8-9th', 'High School: 10-12th']
    const handleChangeGrade = (e) => {
      if(e.target.checked)
          {  
              setFormData({...formData, grades_taught:e.target.value})
          }
           }

  const subjects = ['all subjects', 'English','math', 'art','science','history','music','geography','P.E (Physical Education)','drama','biology','chemistry','physics','I.T (Information Technology)','foreign languages','social studies','technology','philosophy','graphic design','literature','algebra','geometry']
  const handleChangeSubject = (e) => {
    if(e.target.selected)
        {  
            setFormData({...formData, subjects_taught:e.target.value})
        }
        }

  function handleSubmit(e) {
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
              setIsLoading(false);
              if (r.ok) {
                  r.json().then((user) => onLogin(user));
              } else {
                  r.json().then((err) => setErrors(err.errors))
              }
          });
  }
    

    return (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username:
            <input
              type="text"
              id="username"
              autoComplete="off"
              value={formData.username}
              onChange={(e) => setFormData({...formData, username:e.target.value})}
            />
            </label>

            <label>Password:
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password:e.target.value})}
              autoComplete="current-password"
            />
            </label>
            <label>Password Confirmation:
            <input
              type="password"
              id="password_confirmation"
              value={formData.password_confirmation}
              onChange={(e) => setFormData({...formData, password_confirmation:e.target.value})}
              autoComplete="current-password"
            />
            </label>
            <label>State:
              <select onChange={handleChangeState}>
                {states.map((state)=> {
                  return (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  )
                  })
                }
              </select>
            </label>

            <label> Grades taught:
            <ul className = "category-list">
                {grades.map((grade)=>{
                    return(
                        <div key={grade} className="radio-Btn">
                            {/* <label> */}
                                <input 
                                type="radio"
                                name="category-name"
                                value={grade}
                                checked={formData.grades_taught === grade}
                                onChange={handleChangeGrade}
                                />{grade}
                            {/* </label> */}
                        </div>
                     )
                })}
            </ul>
            </label>

            <label> Years of experience:
            <input
                type="number"
                pattern="[0-59]*"
                name="years_experience"
                value={formData.years_experience}
                placeholder="How long have you been teaching for?"
                onChange={(e)=>setFormData({...formData, years_experience:e.target.value})}
            />
            </label>

            <label>Subjects taught:
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

            <label>Profile Image:
            <input
              type="text"
              id="imageUrl"
              value={formData.image_url}
              placeholder= "copy the image url here"
              onChange={(e) => setFormData({...formData, image_url:e.target.value})}
            />
            </label>
          </div>
          <button type="submit">{isLoading ? "Loading..." : "Sign Up"}</button>
            <label>
                {errors.map((err) => (
                    <p key={err}>{err}</p>
                ))}
            </label>
        </form>
      );
}
export default SignUpForm

