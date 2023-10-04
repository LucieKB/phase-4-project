import {  useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NewResourceForm from "../components/NewResourceForm";
import NewPostForm from "../components/NewPostForm";
import { UserContext } from "../contexts/UserContext";
import "./CategoryCard.css"


function CategoryCard({categories, setCategories}){
    const [isUpdating, setIsUpdating]=useState(false)
    const {id}=useParams()
    const [showAddPostForm, setShowAddPostForm]=useState(false)
    const category = categories.find(category => category.id === parseInt(id))
    const {user, setUser} = useContext(UserContext)
   
   if (!category){
    return <div>
        ...Loading
    </div>
   }

   const resourcesToDisplay = category.resources.map((resource)=>{
    return(
    <ul id="resource-line" key={resource.name}>
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
            <li>
                <h3><u>{post.title}</u> by <em>{post.user_name}</em></h3>
                <p style={{fontFamily:"Courier New", fontSize:"15px"}}>"{post.content}"</p>
                <p><u>date posted:</u> {post.date.split('T')[0]}</p>
                <p style={{textAlign:"center"}}> *** </p>
                < br/>
            </li>
            </div>
        )}
        </ul>
        );
    
    const handleAddPost = (newPost) => {
        console.log("hit handleAddPost in Category Card")
        const categoryWithNewPost = [...category.posts, newPost]
        const copyCategoryPost = {...category, posts:categoryWithNewPost}
        const userWithNewPost = {...user, posts: [...user.posts, newPost]}
        console.log(copyCategoryPost)
        console.log(userWithNewPost)
        const categoriesWithNewPost = categories.map(cat => {
            if (copyCategoryPost.id === cat.id){
                console.log(copyCategoryPost)
                return copyCategoryPost 
            } else {
                return cat
            }
        })
        setCategories(categoriesWithNewPost)
        setUser(userWithNewPost)
        console.log(user)
    }


    const handleAddResource = (thisnewResource) => {
        const CatNewResource = [...category.resources, thisnewResource]
        const copyCategory = {...category, resources:CatNewResource}
        const copyCategories = categories.map( cat => cat.id === copyCategory.id? copyCategory : cat)
        setCategories(copyCategories)
    }      

    return(
        <div>
        <div className="wrapper">
        <header><h1>{category.name}</h1></header>
        <hr></hr>
        <div className = "resources">
        <h2> 💻 <u> Resources</u> 💻 </h2>
            {resourcesToDisplay}
        <br />
            <button className="Update-Btn" onClick={() => setIsUpdating(isUpdating => (!isUpdating))}> Add Resource </button>
                                {isUpdating?
                                <NewResourceForm category={category} onAddResource={handleAddResource} setIsUpdating={setIsUpdating}/> :
                                null} 
        </div>
        <hr></hr>
            <div className = "posts">
                {content}
                <hr />
                <h3> Take part in the discussion about {category.name}, share your experience, some tips ...</h3>
            <button className="Update-Btn" onClick={()=> setShowAddPostForm(!showAddPostForm)}>{showAddPostForm? ("Hide Form"):("Add New Post")}</button>
            </div>
        
        </div>
            
            
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