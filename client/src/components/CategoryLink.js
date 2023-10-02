import React, {useState} from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./CategoryLink.css"


function CategoryLink({user, category, handleDeleteCategory}){
    // const [isUpdating, setIsUpdating]=useState(false)
    const navigate = useNavigate();

    // const background = category.image


    if (!category){
      return <div>
          ...Loading
      </div>
     }
    

    const handleDeleteCat = () => {
        fetch (`/categories/${category.id}`, {
           method: "DELETE",
        })
        .then ((r)=> {
        console.log(r)
        if (r.ok){
          handleDeleteCategory(category);
        navigate ('/categories')}
        else {
          console.log ("error with deleting")
        }
        })
        
    }



    return(
      
                <div className="front" style = {{backgroundImage : `url(${category.image})`,
                backgroundSize : "contain", backgroundBlendMode: "lighten", backgroundRepeat: "no-repeat", backgroundPosition: "center"}} > 
                <br /> 
                <div id="cat-name" style = {{fontVariant: "small-caps", fontSize: "16px"}}><h3>{category.name}</h3></div>
                    {user.username === "LucieKB"? 
                        (<button className="Btn-Delete" onClick={handleDeleteCat}> Delete Category</button>) : ("")
                    }  
                    <div  id="back">
                    <Link to={`/categories/${category.id}`}>{category.name}</Link>
                    <p id="description">{category.description}</p>
                    {user.username === "LucieKB"? 
                        (<button className="Btn-Delete" onClick={handleDeleteCat}> Delete Category</button>) : ("")
                    }  
                     
                 </div>
                </div>
                
            )
        

}


export default CategoryLink