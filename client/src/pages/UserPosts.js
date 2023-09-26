import React, {useContext} from "react";
import { useParams, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import "./UserPosts.css"

function UserPosts(){
    const {user} = useContext(UserContext)
    const {id} = useParams


const userCategories = user.user_posts_categories
console.log(userCategories)

const postsByCategories = user.posts.map((post)=> post)









return(
    <div className="post-table">
        <h2>All My Posts</h2>
        <table>
            <thead>
                <tr>
                    <th>Category</th>
                    <th>My Posts</th>
                </tr>
            </thead>
            <tbody>
              {postsByCategories.map((post) => {
        return (
            <tr key={post.id}>

                <td>{post.category.name}</td>
                <td>
                    <li>{post.title} "{post.content}" {post.date.split('T')[0]}
                    </li>
                    </td>
            
            </tr>
        );
        })
         }     
            </tbody>
        </table>
        
        
    </div>
)

}

export default UserPosts;

