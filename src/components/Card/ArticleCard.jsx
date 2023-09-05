import React from "react";


const ArticleCard = ({item}) => {
  return (
    <div className="col-12 col-sm-12 col-md-6 col-lg-3 ">
      <div className="card article border-0">
        <img src={item.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h6 className="card-title">{item.title}</h6>
          <p className="card-text">
         {item.desc}
      
          </p>
          <a>Continue Reading</a>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
