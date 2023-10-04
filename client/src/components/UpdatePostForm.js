import React, {useState} from "react";



function UpdatePostForm({post, onUpdatePost, setIsUpdating}){
    const [postValues, setPostValues] = useState({
            title: post.title,
            content: post.content,
            date: `Post updated on ${new Date()}`
    })
    const [errors, setErrors] = useState([]);
    

   

    const handleSubmit = (e) =>{
        e.preventDefault();
       console.log(postValues)
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
        <form onSubmit={handleSubmit}
        className="update-field">
            <h4>Modify my Post</h4>
            <div>
                <label>Post title:</label>
                <input
                type="text"
                id="post"
                placeholder= {post.title}
                value={postValues.title}
                onChange={(e) => setPostValues({...postValues, title:e.target.value})}/>
            
                <label>Post content:</label>
                <input
                type="text"
                id="post-content"
                placeholder= {post.content}
                value={postValues.content}
                onChange={(e) => setPostValues({...postValues, content:e.target.value})}
                style={{width: "600px"}}/>
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

export default UpdatePostForm;