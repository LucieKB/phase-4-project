import React, {useContext} from "react";
import { UserContext } from "../contexts/UserContext";
import "./UserPosts.css"

function UserPosts(){
    const {user} = useContext(UserContext)



const userPosts = user.posts
console.log(userPosts)









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
              {userPosts.map((post) => {
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