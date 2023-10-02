import React from "react";


function PostCard({post, onDeletePost}){
   

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

    const handleUpdatePost = () =>{
        console.log("updatePost")
    }

    return(
        <tr key={post.id}>

        <td>{post.category.name}</td>
        <td>
            <li>{post.title} "{post.content}" {post.date.split('T')[0]}</li>
        </td>
        <td><button onClick={handleUpdatePost}>Update</button></td>
        <td><button onClick={handleDeletePost}>Delete</button></td>
    
    </tr>
    )
}

export default PostCard
