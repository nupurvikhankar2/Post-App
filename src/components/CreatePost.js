import React,{useContext,useState} from 'react'
import postContext from "../context/posts/postContext"

const  CreatePost = () => {
  const context = useContext(postContext);
    const {addPost} = context;

    const [post, setPost] = useState({posti: "", comment: ""})

    const handleClick = (e)=>{
        e.preventDefault();
        addPost(post.posti, post.descriptiong);
    }

    const onChange = (e)=>{
        setPost({...post, [e.target.name]: e.target.value})
    }
  return (
    <div className="container my-3">
      <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Post</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={onChange} />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Comment (Optional)</label>
    <input type="password" className="form-control" id="exampleInputPassword1" onChange={onChange}/>
  </div>
  <button type="submit" className="btn btn-primary" onClick={handleClick}>Create Post</button>
</form>
    </div>
  )
}

export default CreatePost
