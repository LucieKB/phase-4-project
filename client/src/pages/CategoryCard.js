import {  useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NewResourceForm from "../components/NewResourceForm";
import NewPostForm from "../components/NewPostForm";


function CategoryCard({categories, setCategories}){
    const [isUpdating, setIsUpdating]=useState(false)
    const {id}=useParams()
    const [showAddPostForm, setShowAddPostForm]=useState(false)
    const category = categories.find(category => category.id === parseInt(id))
    // const navigate = useNavigate()
  

   

   if (!category){
    return <div>
        ...Loading
    </div>
   }

   const resourcesToDisplay = category.resources.map((resource)=>{
    return(
    <ul key={resource.name}>
        <span> <strong>{resource.resource_type} /</strong> <em>{resource.description}</em></span>
        <span>&nbsp;&nbsp; ▶️ <a href={resource.site_url}>{resource.name}:</a></span>
    </ul>
    )
    })


    const catPosts = category.posts;
    console.log(catPosts)

    const content = (
        <ul>
        {catPosts.map((post)=>
            <div key={post.id}>
                <h3><u>{post.title}</u> by <em>{post.user_name}</em></h3>
                <p>"{post.content}"</p>
                <p>{post.date.split('T')[0]}</p>
            </div>
        )}
        </ul>
        );
    
    const handleAddPost = (newPost) => {
        const categoryWithNewPost = [...category.posts, newPost]
        const copyCategoryPost = {...category, posts:categoryWithNewPost}
        const categoriesWithNewPost = categories.map(cat => {
            if (copyCategoryPost.id === cat.id){
                return copyCategoryPost
            } else {
                return cat
            }
        })
        setCategories(categoriesWithNewPost)
        // navigate (`categories/${category.id}`)
    }


    const handleAddResource = (thisnewResource) => {
        const CatNewResource = [...category.resources, thisnewResource]
        const copyCategory = {...category, resources:CatNewResource}
        const copyCategories = categories.map( cat => cat.id === copyCategory.id? copyCategory : cat)
        setCategories(copyCategories)
    }      

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
                                <NewResourceForm category={category} onAddResource={handleAddResource} setIsUpdating={setIsUpdating}/> :
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

export default CategoryCard;