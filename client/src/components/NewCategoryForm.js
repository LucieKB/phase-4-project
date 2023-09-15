import React, {useState} from "react";
import { useNavigate } from "react-router";

function NewCategoryForm({categories, setCategories}){
const [newCatForm, setNewCatForm] = useState({
        name: (""),
        resources: ([]),
        description: (""),
        image: ("")
    })
    const [addResource, setAddResource] = useState(false)
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleAddResource = () => {
        setAddResource(!addResource)
    }

    function handleAddNewCategory(newCategory){
        console.log(newCategory)
        setCategories([...categories, newCategory])
      }

    const handleSubmit = (e) => {
        e.preventDefault()
        setNewCatForm({...newCatForm})
        setIsLoading(true);
        fetch ("/categories",{
            method:"POST",
            headers:{
            "Content-Type": "application/json", 
            },
            body: JSON.stringify(newCatForm)
        }).then((r)=>{
                setIsLoading(false);

                if (r.ok) {
                    r.json().then ((newCategory) => {
                        handleAddNewCategory(newCategory);
                    setErrors([]);   
                })
                } else {
                    console.log(errors)
                     r.json().then((err) => setErrors(err.errors));
                }
            });

        setNewCatForm({
            name: (""),
            resources: ([]),
            description: (""),
            image: ("")
        });

        navigate("/categories");
    }

    return(
        <form onSubmit={handleSubmit}>
        <div>
            <label>Name of the Category:
            <input
              type="text"
              id="name"
              autoComplete="off"
              placeholder="New Category Name ..."
              value={newCatForm.name}
              onChange={(e) => setNewCatForm({...newCatForm, name:e.target.value})}
            />
            </label>  

            <label>Add Resources:
            <input
              type="text"
              id="ressources"
              autoComplete="off"
              placeholder="Add a website URL ..."
              value={newCatForm.resources}
              onChange={(e) => setNewCatForm({...newCatForm, resources:[e.target.value]})}
            />
            <button onClick={handleAddResource}>Add Another Ressource</button>
            {addResource? 
            (<div id="additional-ressource">
                    <input
                        type="text"
                        id="ressources"
                        autoComplete="off"
                        placeholder="Add a website URL ..."
                        value={newCatForm.resources}
                        onChange={(e) => setNewCatForm({...newCatForm, resources:[...newCatForm.resources, e.target.value]})}
                    />
                     <button onClick={handleAddResource}>Add Another Resource</button>
              </div>
              ) : (
                ""
            )}
            </label>  

            <label>Description of the Category:
            <input
              type="text"
              id="description"
              autoComplete="off"
              placeholder="Description must be less than 30 words ..."
              value={newCatForm.description}
              onChange={(e) => setNewCatForm({...newCatForm, description:e.target.value})}
            />
            </label>  

            <label>Background Image for this Category:
            <input
              type="text"
              id="image"
              autoComplete="off"
              placeholder="Copy the URL of the image you chose ..."
              value={newCatForm.image}
              onChange={(e) => setNewCatForm({...newCatForm, image:e.target.value})}
            />
            </label>            

        </div>
        <button type="submit">{isLoading ? "Loading..." : "Submit"}</button>
            <label>
                
            </label>
            {errors.length > 0 && (
                <ul style={{ color: "red" }}>
                    {errors.map((error) => (
                     <li key={error}>{error}</li>
                     ))}
                 </ul>
            )}
        </form>
    )


}

export default NewCategoryForm