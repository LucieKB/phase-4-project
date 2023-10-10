import React, {useState, useContext} from "react";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import "./Forms.css"

function NewPostForm({handleAddPost, category}){
    const {user} = useContext(UserContext);
    const [newTitle, setNewTitle] = useState("");
    const [newContent, setNewContent] = useState("");
    const [date, setDate] = useState(new Date());
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault();
        const formData = {
            title: newTitle,
            content: newContent,
            date: date,
        };
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
        <div  className="form-wrapper">
            <form onSubmit={handleSubmit}>
                <h3><em>{user.username}'s new post </em></h3>
                <div>
                    <label>Post title:</label>
                    <input
                    className="form-control"
                    type="text"
                    id="post"
                    placeholder="Title"
                    autoComplete="off"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}/>
                
                    <label>Post content:</label>
                    <input
                    className="form-control"
                    type="text"
                    id="post-content"
                    autoComplete="off"
                    value={newContent}
                    onChange={(e) => setNewContent(e.target.value)}/>
                </div>
                    {errors?.map((err) => (
                        <p key={err}>{err}</p>
                    ))}
                <button className="submit-Btn">Submit</button>
            </form>
        </div>
    )

}

export default NewPostForm;