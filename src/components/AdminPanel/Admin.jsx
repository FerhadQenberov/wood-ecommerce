import React from 'react';
import { Link } from 'react-router-dom';
import './Admin.css';
import { useDispatch, useSelector } from 'react-redux';
import { editBlog, removeBlog } from '../../manager/control/BlogSlice';

const Admin = () => {
  const dispatch = useDispatch();
  const blogItems = useSelector((store) => store.blogForm.cart);

  

  return (
    <div className='admin'>
      <div className="container">
        <Link to="/blog" className='w-100 d-flex justify-content-center align-items-center'>
          <button className='btn btn-success'>Add New Blog</button>
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Image</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {blogItems.map((item, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.desc}</td>
                <td><img className='t-img' src={item.img} alt="" /></td>
                <td><Link to={`/edit/${item.id}`} ><button className='btn btn-primary'>Edit</button></Link></td>
                <td><button className='btn btn-danger' onClick={()=> {dispatch(removeBlog({id:item.id}))}}>Delete</button></td>
               
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
