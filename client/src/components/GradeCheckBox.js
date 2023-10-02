import React, {useState, useEffect} from "react"

function GradeCheckbox({gradesTaught, setGradesTaught, formData, setFormData}){
    const grades = ['Pre-K', 'K', 'Lower Elementary: 1-3rd', 'Upper Elementary: 4-5th', 'Middle School: 6-7th', 'Junior High: 8-9th', 'High School: 10-12th']
    const [isDisabled, setIsDisabled]=useState(false)
    // const [checked, setChecked]=useState([])
    
    const handleCheck = (e) => {
        let myGradesTaught=[...gradesTaught, e.target.name];
        setGradesTaught(myGradesTaught)
        setFormData({...formData, grades_taugth: myGradesTaught})
    }


    useEffect(()=>{
        if (gradesTaught.length > 2){
            setIsDisabled(!isDisabled)
        }
    }, [gradesTaught])

    return(
        <div className="checkboxes">
       <strong><u>Grades taught:</u></strong>  <em>If you have taught multiple grades, please select the <strong>three</strong> that you have the most experience with</em>
     <ul className="grades-list">
     {grades.map((grade, index)=>{
         return(
             <li key={index}>
                 <div>
                     <input
                     type="checkbox"
                     id={index}
                     name={grade}
                     disabled = {isDisabled}
                     onChange={handleCheck}
                     />{grade}
                 </div>
             </li>
         )
     })}
     </ul>
     
        </div>
         )
        //  <ul className = "grades-list">
        //         {grades.map((grade)=>{
        //             return(
        //                 <div key={grade} className="radio-Btn">
        //                     {/* <label> */}
        //                         <input 
        //                         type="checkbox"
        //                         name="grades-name"
        //                         value={grade}
        //                         checked={isChecked}
        //                         onChange={handleChangeGrade}
        //                         />{grade}
        //                     {/* </label> */}
        //                 </div>
}

export default GradeCheckbox;