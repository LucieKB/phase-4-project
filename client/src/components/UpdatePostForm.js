import React, {useState} from "react";
import "./UpdatePostForm.css"



function UpdatePostForm({post, onUpdatePost, setIsUpdating}){
    const [postValues, setPostValues] = useState({
            title: post.title,
            content: post.content,
            date: `Post updated on ${new Date()}`
    })
    const [errors, setErrors] = useState([]);

    const handleSubmit = (e) =>{
        e.preventDefault();
        fetch(`/posts/${post.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                  title: postValues.title,
                  content: postValues.content,
                  date: postValues.date
              }),
        }).then((r) => {
            if (r.ok) {
            r.json().then((updatedPost) => onUpdatePost(updatedPost));
            } else {
            r.json().then((err)=>setErrors(err.errors))
            }

            setIsUpdating((isUpdating) => !isUpdating)
        });    
    }

    return(
        <div  className="Updateform-wrapper">
            <form onSubmit={handleSubmit} className="update-field">
            
                <div>
                    <label>Post title:</label>
                    <input
                        className="Updateform-control"
                        type="text"
                        placeholder= {post.title}
                        value={postValues.title}
                        onChange={(e) => setPostValues({...postValues, title:e.target.value})}
                    />
                
                    <label>Post content:</label>
                    <input
                        type="text"
                        className="Updateform-control"
                        placeholder= {post.content}
                        value={postValues.content}
                        onChange={(e) => setPostValues({...postValues, content:e.target.value})}
                        style={{width: "600px"}}
                    />
                </div>

                {errors?.map((err) => (
                    <p key={err} >
                        {err}
                    </p>
                ))}
                
                <button id="Update-submit" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default UpdatePostForm;