import React, {useState} from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./CategoryLink.css"


function CategoryLink({user, category, handleDeleteCategory}){
    // const [isUpdating, setIsUpdating]=useState(false)
    const navigate = useNavigate();

    // const background = category.image

  console.log(user)

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
      
                <div id="front" style = {{backgroundImage : `url()`,
                backgroundSize : "cover" }} >  
                <Link to={`/categories/${category.id}`}>{category.name}</Link>
                {user.username === "LucieKB"? 
                    (<button className="Btn-Delete" onClick={handleDeleteCat}> Delete Category</button>) : ("")
                }   
                  <div  id="back">
                    {category.description}
                  </div>
                </div>
            )
        

}


export default CategoryLink