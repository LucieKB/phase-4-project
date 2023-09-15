import React, {useState} from "react";
import CategoryLink from "../components/CategoryLink";
import NewCategoryForm from "../components/NewCategoryForm";
import { useNavigate } from "react-router-dom";

function CategoriesList( {user, categories, setCategories} ){
    const [showCategoryForm, setShowCategoryForm]=useState()
    const navigate = useNavigate()

    if (!categories){
        return <div>
            ...Loading
        </div>
       }

    
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
        { showCategoryForm ? 
        ( user.username === "LucieKB"?
        (<NewCategoryForm categories={categories} setCategories={setCategories} />) : (alert("You don't have the access right to add a category"))
        )
        :
        (<div>
        <p>Only admins can add a category</p>
        <button onClick={() => {setShowCategoryForm((showCategoryForm) => (!showCategoryForm))}}> Add A Category </button></div>)  }
        
        <div>

        </div>
        </>
    )

}

export default CategoriesList;