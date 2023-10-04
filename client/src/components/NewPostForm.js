import React, {useState, useContext} from "react";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

function NewPostForm({handleAddPost, category}){
    const {user} = useContext(UserContext);
    const [newTitle, setNewTitle] = useState("");
    const [newContent, setNewContent] = useState("");
    const [date, setDate] = useState(new Date());
    // const [userPosts, setUserPosts] = useState(user.posts);
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate()

    console.log(user)
    console.log(user.id)

    const handleSubmit = (e) =>{
        e.preventDefault();
        const formData = {
            title: newTitle,
            content: newContent,
            date: date,
        };
    console.log(category)
        fetch(`/categories/${category.id}/posts`, {
            method: "POST",
            headers: {
                "Content-Type":"application/json",
            },
            body: JSON.stringify(formData),    
        }).then((r) => {
            if (r.ok) {
                r.json().then((catWithNewPost) => {
                    handleAddPost(catWithNewPost);
                    // setUserPosts({...user, posts: [...posts, catWithNewPost]})    
                });
            setNewTitle("");
            setNewContent("")
            navigate(`/categories/${category.id}`)
            } else {
                r.json().then((err)=>setErrors(err.errors))
            }
        });
        
    }

    return(
        <form onSubmit={handleSubmit}>
            <h4>Add New Post</h4>
            <div>
                <label>Post title:</label>
                <input
                type="text"
                id="post"
                placeholder="Title"
                autoComplete="off"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}/>
            
                <label>Post content:</label>
                <input
                type="text"
                id="post-content"
                autoComplete="off"
                value={newContent}
                onChange={(e) => setNewContent(e.target.value)}/>
            </div>
                {errors?.map((err) => (
            <p key={err} >
                {err}
            </p>
            ))}
            <button type="submit">Submit</button>
        </form>

    )

}

export default NewPostForm;