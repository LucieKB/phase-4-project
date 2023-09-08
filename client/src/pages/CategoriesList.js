import React from "react";
import {Link} from "react-router-dom"
import NewCategoryForm from "../components/NewCategoryForm";

function CategoriesList( {categories, isAdmin, setCategories} ){
    
    const handleAddCategory = () => {
        return <NewCategoryForm categories={categories} setCategories={setCategories} />
    }
   

    return(
        <>
        <div className="flex-container-categories">
        {categories.map((category)=>{
            return(
                <div key={category.id}>
                    
                    <Link to={`/category/${category.id}`}>{category.name}</Link>
                    
                </div>
            )
        })
        }
        </div>
        { isAdmin? <button onClick={handleAddCategory}>Add A Category</button> : nill }
        <div>

        </div>
        </>
    )

}

export default CategoriesList;