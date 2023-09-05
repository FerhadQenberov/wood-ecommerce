import React, { useContext, useEffect, useState } from "react";

import laptops from "../assets/img/Laptops-1-170x170.jpg";
import ipda from "../assets/img/Apple-Ipad-170x170.jpg";
import psc from "../assets/img/All-in-one-170x170.jpg";
import { Link, useParams } from "react-router-dom";
import CardBest from "./Card/CardBest";
import { ProductContext } from "../context/api";

const AllCategory = () => {
  const allData = useContext(ProductContext);
  const {subcategory}=useParams()

  const [tablets, setTablet] = useState([]);
  const [currentPage, setCurrentPage]=useState(1)
  const recordsPage=10
  const lastindex=currentPage*recordsPage
  const firstIndex=lastindex-recordsPage
  const records=allData.slice(firstIndex, lastindex)
  const npage=Math.ceil(allData.length/recordsPage)
  const numbers=[...Array(npage+1).keys()].slice(1)


  const [urecords, setRecords]=useState(records)

  
  console.log(urecords);
  function prePage(){
    if (currentPage!==1) {
      setCurrentPage(currentPage-1)
      
    }
  }
  function nextPage(){
    if (currentPage!==npage) {
      setCurrentPage(currentPage+1)
      
    }
  }

  function changeCPage(id){
    setCurrentPage(id)

  }
 


  return (
    <div className="AllCategory">
      <div className="container">
        <h2> Laptops, Tablets & PCs</h2>
        <div className="laptops row">
          <div className="col-12 col-md-4">
            <div className="Laptops">
              <div>
                <img src={laptops} alt="" />
              </div>
              <div className="lap-category">
                <ul>
                  <Link to="/Details/laptops">
                    <h6>Laptops</h6>
                  </Link>
                  <li>
                    <Link to="/Details/Apple">Apple Mackbook</Link>
                  </li>
                  <li>  
                    <Link to="/Details/business">Business Laptops</Link>
                  </li>
                  <li>
                    <Link to="/Details/GamingPcs">Gaming Laptops</Link>
                  </li>
                  <li>
                    <Link to="/Details/Ultrabook">Ultrabook</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="Laptops">
              <div>
                <img src={ipda} alt="" />
              </div>
              <div className="lap-category">
                <ul>
                  <Link to="/Details/tablets">
                    {" "}
                    <h6>Tablets</h6>
                  </Link>
                  <li>
                    <Link to="/Details/ipad">Apple Ipad</Link>
                  </li>
                  <li>
                    <Link to="/Details/Android">Android Tablets</Link>
                  </li>
                  <li>
                    <Link>Windows Tablets</Link>
                  </li>
                  <li>
                    <Link to="/Details/Ultrabook">Ultrabook</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="Laptops">
              <div>
                <img src={psc} alt="" />
              </div>
              <div className="lap-category">
                <ul>
               
                  <Link to="/Details/pcs">
                    {" "}
                    <h6>Psc</h6>
                  </Link>
                  <li>
                    <Link to="/Details/GamingPcs">Gaming Psc</Link>
                  </li>
                  <li>
                    {" "}
                    <Link>Office Pcs</Link>
                  </li>
                  <li>
                    {" "}
                    <Link>Gaming Laptops</Link>
                  </li>
                  <li>
                    {" "}
                    <Link>All in one</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="row g-5">
          <div className="all-category">
          <nav aria-label="Page navigation example">
           <ul className="pagination">
             <li className="page-item"><a className={`page-link ${currentPage===npage  ?"active" :""}}`} onClick={prePage}>Previous</a></li>
              {numbers.map((n, i)=>(
                        <li className="page-item" key={i}><a onClick={() => changeCPage(n)} className="page-link" >{n}</a></li>
              ))}
          
             <li className="page-item"><a onClick={nextPage} 
             className="page-link" >Next</a></li>
           </ul>

              </nav>
            <div className="data-all">
              {records.map((item, index)=>{
                return <CardBest key={index} item={item}/>
              })}

            </div>

            



          </div>
        </div>

      
      </div>
    </div>
  );
};

export default AllCategory;
