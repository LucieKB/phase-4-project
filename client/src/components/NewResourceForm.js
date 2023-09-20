import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function NewResourceForm({ category, onAddResource,setIsUpdating}){
    const [newResource, setNewResource] = useState({
        name: (""),
        description: (""),
        site_url: (""),
        resource_type: (""),
        category_id: category.id
    });
    const navigate = useNavigate();
    
   
    const resource_types = ["Educational Software", "Lesson Plans", "Teacher's blog", "Tips/Advices", "Music", "TV Series/Movies suggestions","Wellness"]

 
    const handleChangeResourceType = (e) => {
        setNewResource({...newResource, resource_type: e.target.value})
    }
 console.log(newResource)

        const handleSubmit = (e) => {
                e.preventDefault();
            console.log("submitted" + newResource)

                fetch(`/resources`,{
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(newResource),
            })
                .then((r) => r.json())
                .then((thisnewResource) => onAddResource(thisnewResource));

            navigate(`/categories/${category.id}`)
            setNewResource("");

            setIsUpdating((isUpdating) => !isUpdating)
        }
    
    return(
        
        <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Add Resource Title:
                    <input
                    type="text"
                    id="resource-title"
                    autoComplete="off"
                    placeholder="Title ..."
                    value={newResource.title}
                    onChange={(e) => setNewResource({...newResource, name: e.target.value})}
                    />
                </label>
            </div>

            <div>
            <ul className = "types-list">
                {resource_types.map((type)=>{
                    return(
                        <div key={type} className="radio-Btn">
                            {/* <label> */}
                                <input 
                                type="radio"
                                name="category-name"
                                value={type}
                                checked={newResource.resource_type === type}
                                onChange={handleChangeResourceType}
                                />{type}
                            {/* </label> */}
                        </div>
                     )
                })}
            </ul>
            </div>

            <div>
                <label>Add Resource Description:
                    <input
                    type="text"
                    id="resource-description"
                    autoComplete="off"
                    placeholder="What is this resource about?"
                    value={newResource.description}
                    onChange={(e) => setNewResource({...newResource, description: e.target.value})}
                    />
                </label>
            </div>

            <div>
                <label>Add Resource URL:
                    <input
                    type="text"
                    id="resource-URL"
                    autoComplete="off"
                    placeholder="Copy here the website url"
                    value={newResource.site_url}
                    onChange={(e) => setNewResource({...newResource, site_url: e.target.value})}
                    />
                </label>
            </div>

            <button> Submit </button>
        </form>
        </div>
       
       
    )

}

export default NewResourceForm;