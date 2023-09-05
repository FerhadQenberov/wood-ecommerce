  import React, { useState } from 'react';
  import { useDispatch } from 'react-redux';
  import { setBlog } from '../../manager/control/BlogSlice';
  import uniqid from 'uniqid';


  const Blog = () => {
    const dispatch=useDispatch()
  const [name, setName]=useState("")
  const [text, setText]=useState("")
  const [img, setImg]=useState("")


  const id = uniqid()

  const handleSubmit=(e)=>{
    e.preventDefault()
    dispatch(setBlog({id, name, text, img}))
    setName("");
    setText("");
    setImg("")
    

  }
  
  



    return (
      <div className='blog-add'>
        <div className="container">
          <form className='blog-form' onSubmit={handleSubmit} >
            <label>Blog-title</label>
            <input type="text" name="name" value={name}  onChange={(e)=>setName(e.target.value)}/>
            <label>Blog-Description</label>
            <input type="text" name="desc" value={text} onChange={(e)=>setText(e.target.value)} />
            <label>Blog-Img</label>
            <input type="text" name="img" value={img}  onChange={(e)=>setImg(e.target.value)}/>
            <button  type="submit" >Add</button>
          </form>
        </div>
      </div>
    );
  };

  export default Blog;
