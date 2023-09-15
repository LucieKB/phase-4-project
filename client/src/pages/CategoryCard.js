import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EditCategory from "../components/EditCategory";

function CategoryCard({categories, user, setCategories}){
    const [isUpdating, setIsUpdating]=useState(false)
    const {id}=useParams()
    const category = categories.find(category => category.id === parseInt(id))
     

   

   if (!category){
    return <div>
        ...Loading
    </div>
   }

   const resourcesToDisplay = "resourcesToDisplay"
//    category.resources.map((resource)=>
//    <a href={resource}> Resource ${resource.length} </a>
//    )


console.log(category)   
console.log(category.resources)

    const catPosts = category.posts;

    const content = (
        <ul>
        {catPosts.map((post)=>
            <div key={post.id}>
                <h3><u>{post.title}</u> by <em>{post.user.username}</em></h3>
                <p>"{post.content}"</p>
                <p>{post.date.split('T')[0]}</p>
            </div>
        )}
        </ul>
        );
    
     const handleUpdateCategory = (thisUpdatedCategory) => {
        const updatedResources = category.map((category)=>{
            if (category.id === thisUpdatedCategory.id){
                setCategories([...categories, thisUpdatedCategory])
            }else{
                return categories;
            }
            const updatedCategory = {...category, resources: updatedResources}
            return setCategories(...categories, updatedCategory)
        })}

    return(
        <div>
        <header><h1>{category.name}</h1></header>
        <hr></hr>
        <div>
        <h2> 💻 <u> Resources</u> 💻 </h2>
            {resourcesToDisplay}
        <br />
            <button className="Update-Btn" onClick={() => setIsUpdating(isUpdating => (!isUpdating))}> Add Resource </button>
                                {isUpdating?
                                <EditCategory category={category} onUpdateCategory={handleUpdateCategory} setIsUpdating={setIsUpdating}/> :
                                null} 
        <hr></hr>
            <div>
                {content}
            </div>
        
        </div>
        <button>Add Post</button>
        </div>
    )
}

export default CategoryCard