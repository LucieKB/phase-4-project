import React, {useState} from "react";
import UpdatePostForm from "../components/UpdatePostForm";


function PostCard({post, onDeletePost, onUpdatePost}){
 const [isUpdating, setIsUpdating] = useState(false)  

    const handleDeletePost = () => {
        console.log(post.id)
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
   

    return(
    <>
        <tr key={post.id}>

            <td>{catName}</td>
            <td>
                <li>{post.title} "{post.content}" {post.date.split('T')[0]}</li>
            </td>
             <td><button id="Update-Btn" onClick={()=> setIsUpdating(isUpdating => (!isUpdating))}>Update</button></td>
            <td><button id="Post-Delete-Btn" onClick={handleDeletePost}>Delete</button></td>
        </tr>
    <div>
    {isUpdating?
        <UpdatePostForm post = {post} setIsUpdating={setIsUpdating} onUpdatePost={onUpdatePost} /> : null
    }
    </div>
    </>
    )
}

export default PostCard
