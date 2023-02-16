import React, {useContext, useEffect} from 'react'
import postContext from "../context/posts/postContext"

import CreatePost from './CreatePost';
import Postitem from './Postitem';

const Posts = () => {
    const context = useContext(postContext)
    const {posts, getPosts} = context;
    useEffect(() => {
        getPosts()
    }, [])
    console.log(posts);

    const myarray=[ {
        "_id": "63ed1aa3159fb228fe733188",
        "posti": "This is my first note Noopur",
        "comment": [
          "Hello Noopue this is my first post",
          "hello pratik",
          "how are you",
          "I'm fine pratik"
        ],
        "timestamp": "2023-02-15T17:47:15.296Z",
        "__v": 0
      },
      {
        "_id": "63ed1aa3159f28fe733188",
        "posti": "This is my first note Noopur",
        "comment": [
          "Hello Noopue this is my first post",
          "hello pratik",
          "how are you",
          "I'm fine pratik"
        ],
        "timestamp": "2023-02-15T17:47:15.296Z",
        "__v": 0
      }]
  return (
    <>
    <CreatePost/>
        <div className="container">
      <h2>Your Posts</h2>
      {myarray.map((post)=>{
        return <Postitem key={post._id} post={post}/> 
      })}
      </div>
     
      </>
  );
}
// eslint-disable-next-line
export default Posts;
