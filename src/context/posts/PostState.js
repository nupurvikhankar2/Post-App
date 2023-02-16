import PostContext from "./postContext";
import  { useState } from "react";

const PostState = (props) => {
  const host = "http://localhost:5000"
  const postInitial = []
  const [posts, setPosts] = useState(postInitial)

    // Get all Posts
  const getPosts = async () => {
    // API Call 
    const response = await fetch(`${host}/api/posts/fetchallpost`, {
      method: 'GET',
    });
    const json = await response.json()
    console.log(json)
    setPosts(json)
  }

   // Add a post
  const addPost = async (title, description, tag) => {
    // TODO: API Call
    // API Call 
    const response = await fetch(`${host}/api/posts/addpost`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzMWRjNWUzZTQwMzdjZDQ3MzRhMDY2In0sImlhdCI6MTYzMDY2OTU5Nn0.hJS0hx6I7ROugkqjL2CjrJuefA3pJi-IU5yGUbRHI4Q"
      },
      body: JSON.stringify({title, description, tag})
    });


    console.log("Adding a new post")
    const post = {
      "_id": "61322f119553781a8ca8d0e08",
      "user": "6131dc5e3e4037cd4734a0664",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2021-09-03T14:20:09.668Z",
      "__v": 0
    };
    setPosts(posts.concat(post))
  }

  // Delete a Post
  const deletePost = (id) => {
    // TODO: API Call
    console.log("Deleting the Post with id" + id);
    const newPosts = posts.filter((post) => { return post._id !== id })
    setPosts(newPosts)
  }
  // Edit a Post
  const editPost = async (id, posti, comment) => {
    // API Call 
    const response = await fetch(`${host}/api/posts/updatepost/${id}`, {
      method: 'POST',
      body: JSON.stringify({posti, comment})
    });
    const json = response.json();

    // Logic to edit in client
    for (let index = 0; index < posts.length; index++) {
      const element = posts[index];
      if (element._id === id) {
        element.posti = posti;
        element.comment = comment;
      }
    }

    return (
      <PostContext.Provider value={{ posts, addPost, deletePost, editPost, getPosts }}>
        {props.children}
      </PostContext.Provider>
    )
}
}
export default PostState;