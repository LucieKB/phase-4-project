import React from "react";
import CategoryLink from "../components/CategoryLink";
import { useNavigate } from "react-router-dom";


function CategoriesList( {user, categories, setCategories} ){
    const navigate = useNavigate()

    if (!categories){
        return <div>
            ...Loading
        </div>
       }

  const handleAddCategories = () =>{
    console.log("Add clicked")
    navigate ("/categories/new")} 

console.log(categories)

   const handleDeleteCategory = (deletedCategory) => {
        const updatedCategories = categories.filter((cat) => cat.id !== deletedCategory.id);
        setCategories(updatedCategories); 
    } 

   const categoriesLinks = categories.map(category => <CategoryLink key={category.id} user={user} category={category} handleDeleteCategory = {handleDeleteCategory}/>)
   
    
    return(
        <>
        <div className="flex-container-categories">
            {categoriesLinks}
        </div>
        <div>
        { user.username === "LucieKB"? 
        ( <button onClick={handleAddCategories}> Add A Category </button>) : (null)
        }
        </div>
        </>
    )

}

export default CategoriesList;