import React, {useContext, useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import PostCard from "./PostCard";
import "./UserPosts.css"

function UserPosts(){
    const {user, setUser} = useContext(UserContext)
    const {id} = useParams
   
    // const [myUserPosts, setMyUserPosts] = useState({posts:[]})

// useEffect(()=>{
//     const userPosts = user.posts
//     setMyUserPosts(userPosts)
//     console.log("UseEffect")
// }, [myUserPosts])

// if (!user.posts){
//     return <div>
//         ...Loading
//     </div>
//    }

const userCategories = user.user_posts_categories
console.log(userCategories)

const onDeletePost = (DeletedPost) => {
   const updatedPosts = user.posts.filter(post => post.id !== DeletedPost.id)
   setUser({...user, posts: updatedPosts}) 
   console.log(updatedPosts)
//    setMyUserPosts(updatedPosts) 
//    console.log(myUserPosts) 
}

const postsByCategories = user.posts.map((post)=> <PostCard key={post.id} user ={user} post={post} onDeletePost={onDeletePost} />)

 



// const onUpdatePost = () => {
//     console.log("update this post !")
// }







return(
    <div className="post-table">
        <h2>All My Posts</h2>
        <table>
            <thead>
                <tr>
                    <th>Category</th>
                    <th>My Posts</th>
                    <th>Update my post</th>
                    <th>Delete my post</th>

                </tr>
            </thead>
            <tbody>
              {postsByCategories}
            </tbody>
        </table>
        
        
    </div>
)

}

export default UserPosts;

