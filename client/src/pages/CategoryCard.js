import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EditCategory from "../components/NewResourceForm";
import NewPostForm from "../components/NewPostForm";

function CategoryCard({categories, setCategories}){
    const [isUpdating, setIsUpdating]=useState(false)
    const {id}=useParams()
    const [showAddPostForm, setShowAddPostForm]=useState(false)
    const category = categories.find(category => category.id === parseInt(id))
     

   

   if (!category){
    return <div>
        ...Loading
    </div>
   }

   const resourcesToDisplay = 
   category.resources.map((resource)=>
   <ul key={resource.id}>
   
   <span> <strong>{resource.resource_type} /</strong> <em>{resource.description}</em></span>
   <span>&nbsp;&nbsp; ▶️ <a href={resource.site_url}>{resource.name}:</a></span>
   </ul>
   )


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
    
     const handleAddPost = (newPost) => {
        newPost = category.category_with_posts 
        const categoriesWithNewPost = categories.map(cat => {
            if (category.id === cat.id){
                return category
            } else {
                return cat
            }
        })
        setCategories(categoriesWithNewPost)
     }

     const handleUpdateCategory = (thisUpdatedCategory) => {
        const updatedResources = category.resources.map((category)=>{
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
            
            
            <p> Take part in the discussion about {category.name}, share your experience, some tips ...</p>
            <button onClick={()=> setShowAddPostForm(!showAddPostForm)}>{showAddPostForm? ("Hide Form"):("Add New Post")}</button>
            <div>
            {showAddPostForm ? (
            <NewPostForm handleAddPost={handleAddPost} category={category}/>
            ):(
             null
             )}
             </div>
        
        </div>
    )
}

export default CategoryCard