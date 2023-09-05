import React, { useEffect } from 'react'
import './main.css'
import Slider from './Slider'
import Categories from './Categories'
import Shopping from './Shopping'
import Articles from './Articles'
import ReadMore from './ReadMore'
import { useSelector } from 'react-redux'


const Main = () => {
  const form = useSelector((store) => store.blogForm.cart);
  useEffect(()=>{})
  console.log(form);
  console.log('aaaaaaaaaaaa');
  return (
    <>
    <div className='main'>
      <div className="div container">
      <Slider />
       <Categories/>
       </div>
      <Shopping/>
      <div className="container">
        
        <Articles/>
        <ReadMore/>
      </div>
  

     

      
    </div>
    </>
    
  )
}

export default Main
