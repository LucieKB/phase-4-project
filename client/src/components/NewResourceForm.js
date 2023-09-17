import React, { useState } from "react";

function NewResourceForm({category, onUpdateCategory, setIsUpdating}){
    const [newResources, setNewResources] = useState("")
    const [categoryValues, setCategoryValues] = useState({
            name: category.name,
            resources : category.resources,
            description: category.description,
            image: category.image
        })
 
 console.log(categoryValues)
 console.log(category.resources)

 const handleChangeResource = (e) => {
    setNewResources({...category.resources, newResources:e.target.value})
    console.log(newResources)
    setCategoryValues ({...categoryValues, resources:newResources })
    console.log(categoryValues)
}
 

        const handleSubmitUpdate = (e) => {
                e.preventDefault();
            setCategoryValues({...category, resources:[newResources]})
            console.log("submitted" + categoryValues)

            //     fetch(`/categories/${category.id}`,{
            //         method: "PATCH",
            //         headers: {
            //             "Content-Type": "application/json",
            //         },
            //         body: JSON.stringify({
            //             name: categoryValues.name,
            //             resources : categoryValues.resources,
            //             description: categoryValues.description,
            //             image: categoryValues.image
            //     }),
            // })
            //     .then((r) => r.json())
            //     .then((thisUpdatedCategory) => onUpdateCategory(thisUpdatedCategory)
            //     );
            
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
                    onChange={handleChangeResource}
                    />
                </label>
            </div>
            <button> Submit </button>
        </form>
        </div>
       
       
    )

}

export default NewResourceForm;