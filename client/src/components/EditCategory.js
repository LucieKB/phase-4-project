import React, { useState } from "react";

function EditCategory({category, onUpdateCategory, setIsUpdating}){
    const [categoryValues, setCategoryValues] = useState({
            name: category.name,
            resources : category.resources,
            description: category.description,
            image: category.image
        })
 
 console.log(categoryValues)

        const handleSubmitUpdate = (e) => {
                e.preventDefault();
            console.log("submitted" + categoryValues)

                fetch(`/categories/${category.id}`,{
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name: categoryValues.name,
                        resources : categoryValues.resources,
                        description: categoryValues.description,
                        image: categoryValues.image
                }),
            })
                .then((r) => r.json())
                .then((thisUpdatedCategory) => onUpdateCategory(thisUpdatedCategory)
                );
            
            setCategoryValues({
                name: category.name,
                resources : category.resources,
                description: category.description,
                image: category.image   
            });

            setIsUpdating((isUpdating) => !isUpdating)
        }
    
    return(
        
        <div>
        <form onSubmit={handleSubmitUpdate}>
            <div>
                <label>Add Resources:
                    <input
                    type="text"
                    id="resources"
                    autoComplete="off"
                    placeholder="Add a website URL ..."
                    value={categoryValues.resources}
                    onChange={(e) => setCategoryValues({...categoryValues, resources:[e.target.value]})}
                    />
                </label>
            </div>
            <button> Submit </button>
        </form>
        </div>
       
       
    )

}

export default EditCategory