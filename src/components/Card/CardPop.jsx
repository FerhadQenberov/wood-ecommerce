import React from "react";


const CardPop = ({item}) => {
 
  return (
    <>
   <div className="popular_card">
      <img src={item.img[0]} />
      <div className="pop_text text-center">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
    </div>
    
    </>
  
  );
};

export default CardPop;
