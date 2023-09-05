import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { update } from '../../manager/control/BlogSlice';

const Edit = () => {
  const dispatch =useDispatch()
  const { id } = useParams();
  const users = useSelector((state) => state.blogForm.cart);
  const existingUser = users.find((user) => user.id == id);

  const {name, text, img}=existingUser

  const [uname, setName]=useState(name)
  const [utext, setText]=useState(text)
  const [uimg, setImg]=useState(img)

  


  


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(update({
      id:id,
      name:uname,
      text:utext,
      img:uimg
    }))
    setName("");
    setText("");
    setImg("")

  };

  return (
    <div className='blog-add'>
      <div className="container">
        <form className='blog-form' onSubmit={handleSubmit}>
          <label>Blog-title</label>
          <input type="text" name="name" value={uname} onChange={e => setName(e.target.value)} />
          <label>Blog-Description</label>
          <input type="text" name="desc" value={utext} onChange={e => setText(e.target.value)} />
          <label>Blog-Img</label>
          <input type="text" name="img" value={uimg} onChange={e => setImg(e.target.value)} />
          <button type="submit" >Edit Blog</button>
        </form>
      </div>
    </div>
  );
};

export default Edit;
