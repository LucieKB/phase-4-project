import React, {useState} from "react";
import UpdatePostForm from "../components/UpdatePostForm";


function PostCard({post, onDeletePost, onUpdatePost}){
 const [isUpdating, setIsUpdating] = useState(false)  

    const handleDeletePost = () => {
        fetch(`/posts/${post.id}`, {
            method: "DELETE"
        })
        .then (r => {
            console.log(r)
            if (r.ok){
                onDeletePost(post)
            }
        })
    }

    const catName = post.category.name
    const catBackground = post.category.image
   
    return(
        <>
        <tr key={post.id}>
            <td style={{backgroundImage:`url(${catBackground})`, backgroundSize: "cover"}}>
                <h3 style= {{backgroundColor:"white", color:"black", border: "2px solid black"}}>{catName}</h3>
            </td>

            <td>
                <li><u>{post.title}</u> "{post.content}" <em>Posted on: {post.date.split('T')[0]}</em></li>
                <button id="Update-Btn" onClick={()=> setIsUpdating(isUpdating => (!isUpdating))}>{isUpdating?("Hide Form"):("Update")}</button>
                {isUpdating? <UpdatePostForm post = {post} setIsUpdating={setIsUpdating} onUpdatePost={onUpdatePost} /> : null}
            </td>

            <td>
                <button id="Post-Delete-Btn" onClick={handleDeletePost}>Delete</button>
            </td>
        </tr>
        </>
    )
}

export default PostCard


