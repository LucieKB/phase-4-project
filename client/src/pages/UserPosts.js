import React, {useContext} from "react";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import PostCard from "./PostCard";
import "./UserPosts.css"

function UserPosts(){
    const {user, setUser} = useContext(UserContext)
    const navigate = useNavigate()
    const userPostsCategories = user.user_posts_categories



    const onDeletePost = (DeletedPost) => {
        const updatedPosts = user.posts.filter(post => post.id !== DeletedPost.id)
        setUser({...user, posts: updatedPosts}) 
    }


    const onUpdatePost = (thisUpdatedPost) => {
        const modifiedPosts = user.posts.map((post)=>{
            if (post.id === thisUpdatedPost.id) {
                return thisUpdatedPost;
            } else {
                return post
            }
        })
        const updatedUser = {...user, posts: modifiedPosts};
        setUser(updatedUser);
        navigate(`/users/${user.id}/posts`)
    }

    const postsByCategories = user.posts.map((post)=> <PostCard key={post.id} user ={user} post={post} onDeletePost={onDeletePost} onUpdatePost={onUpdatePost} />)

    return(
        <div className="wrapper">
            <br />
            <h1>All My Posts</h1>
                <div className="post-table">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Category</th>
                                <th>My Posts</th>
                                <th>Delete my post</th>

                            </tr>
                        </thead>
                        <tbody>
                            {postsByCategories}
                        </tbody>
                    </table>
            </div>
        </div>
    )
}

export default UserPosts;

