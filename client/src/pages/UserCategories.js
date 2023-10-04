import React, {useContext} from "react";
import { UserContext } from "../contexts/UserContext";
import { Link } from "react-router-dom";
import "./UserCategories.css"


function UserCategories({categories}){
    const {user} = useContext(UserContext)



const userCat = user.user_categories
const objKeys = (Object.keys(userCat))
const objKeyKeys = objKeys.map((obj) => obj.replace(/[^a-z\s]/gi, ''))
const objValues = (Object.values(userCat))

const renderWords = () => {
    const words = []
    for (let i=0; i<objKeys.length; i++){
       words.push({ text: objKeys[i],value: objValues[i] } ) 
    }
    return words
}
const wordKeyValue = renderWords()
const allCategories = categories.map((cat) => [cat.name, cat.id])

const difference = allCategories.filter((cat) => !objKeyKeys.includes(cat[0])) 

const renderWordCloud =  wordKeyValue.map((w)=> {

    let wordColor;
    if (w.value >= 5){
        wordColor = "#206015";
    }  else if (w.value === 4){
        wordColor = "#2f901f";
    } else if (w.value === 3){
        wordColor = "#6aaa33";
    } else if (w.value === 2){
        wordColor = "#92e919";
    } else if (w.value < 2){
        wordColor = "#bdf570"}

        let wordWeight;
        if (w.value >= 5){
            wordWeight = "extra bold";
        }  else if (w.value === 4){
            wordWeight =  "bold";
        } else if (w.value === 3){
            wordWeight =  "semi bold";
        } else if (w.value === 2){
            wordWeight = "medium";
        } else if (w.value < 2){
            wordWeight = "normal"}
        
        let rotation;
        if (w.value >= 5){
            rotation = "-10deg";
        }  else if (w.value === 4){
            rotation =  "7deg";
        } else if (w.value === 3){
            rotation =  "-2deg";
        } else if (w.value === 2){
            rotation = "15deg";
        } else if (w.value < 2){
            rotation = "2deg"}

    const wordCloudStyle = {
        fontSize:`${w.value*20}px`,
        color: `${wordColor}`,
        fontWeight: `${wordWeight}`,
        rotate: `${rotation}`

}

    return( 
    <div key={w.text} className="wordcloud" style={wordCloudStyle}>
        <p>{w.text.replace(/[^a-z\s]/gi, '')}</p>
    </div>)
})


return(
    <div className="wrapper">
        <h1><u>Categories</u></h1>
    <div className = "title-categories">
   <br />
       {renderWordCloud}
       <br /> 
   </div>
   <div><h3><u>📬 Here are some other categories you might be interested in !</u></h3></div> 
   {difference.map((dif)=>{
   return(
    <div>
        <li key={dif[1]}>
        <Link to={`/categories/${dif[1]}`}>{dif[0]}</Link>
        </li>
    </div>
   )})}
   </div>
   
    
)
}

export default UserCategories