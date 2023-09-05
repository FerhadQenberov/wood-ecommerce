import React, { useContext, useEffect, useState } from "react";
import img from "../../assets/img/apple-iphone-13-pink-1.jpg";
import laptops from "../../assets/img/Laptops-1.jpg";
import business from "../../assets/img/Business-Laptop.jpg";
import gaming from "../../assets/img/Gaming-Laptop.jpg";
import ultra from "../../assets/img/Ultrabook.jpg";
import { ProductContext } from "../../context/api";
import CardBest from "../Card/CardBest";
import { useParams } from "react-router-dom";

const DetailsFilter = () => {
  const { subCategory } = useParams();
  const allData = useContext(ProductContext);
  const [data, setData] = useState(allData);

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPage = 8;
  const lastindex = currentPage * recordsPage;
  const firstIndex = lastindex - recordsPage;

  
  const records = data.slice(firstIndex, lastindex);


  const npage = Math.ceil(data.length / recordsPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }
  function nextPage() {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  }

  function changeCPage(id) {
    setCurrentPage(id);
  }


  
  function priceIncrement(e) {
    const sortOption = e.target.value;
    let sortData = records;

    if (sortOption === "asc") {
      sortData = sortData.sort((a, b) => a.price - b.price);
    } else if (sortOption === "desc") {
      sortData = sortData.sort((a, b) => b.price - a.price);
    }

    setData(sortData);
  }

  useEffect(() => {
    let filterData = [];

    if (
      subCategory === "laptops" ||
      subCategory === "tablets" ||
      subCategory === "pcs"
    ) {
      filterData = allData.filter((item) => item.category === subCategory);
      setData(filterData);
    } else {
      filterData = allData.filter((item) => item.subCategory === subCategory);
    }

    setData(filterData);
  }, [subCategory, allData]);

  const [range, setRange] = useState(0);
useEffect(()=>{
  setData( allData.filter((item)=>item.price>range))
}, [range])


  const handleBrandClick=(brand)=>{
    
    setData(allData.filter((item)=>item.brand===brand))

 }
 const handleModel=(model)=>{
    
  setData(allData.filter((item)=>item.model===model))

}
const handleColor=(color)=>{
  setData(allData.filter((item)=>item.color[0]===color))

}
const handleDiaqonal=(d)=>{
  setData(allData.filter((item)=>item.diagonal==d))

}
    

  return (
    <>
      <div className="details">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li class="breadcrumb-item">
                <a href="#">Laptops, Tablets, PSC</a>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Apple-Mackbook
              </li>
            </ol>
          </nav>
          <div className="categories-wrap">
            <div className="card-category">
              <img src={laptops} alt="" />
              <div className="card-category-body">
                <h6>Apple Mackbook</h6>
                <p>7 Products</p>
              </div>
            </div>
            <div className="card-category">
              <img src={business} alt="" />
              <div className="card-category-body">
                <h6>Business Mackbook</h6>
                <p>7 Products</p>
              </div>
            </div>
            <div className="card-category">
              <img src={gaming} alt="" />
              <div className="card-category-body">
                <h6>Gaming Mackbook</h6>
                <p>7 Products</p>
              </div>
            </div>
            <div className="card-category">
              <img src={ultra} alt="" />
              <div className="card-category-body">
                <h6>Ultra Mackbook</h6>
                <p>7 Products</p>
              </div>
            </div>
          </div>
          <h6 className="filter-text">Filter by Price</h6>
          <div className="ranger-filter text-center">
            <input
              type="range"
              className="form-range"
              min="500"
              onChange={(e) => setRange(e.target.value)}
              max="4000"
              step="0.5"
              id="customRange3"
            />
            ${range} Price
          </div>

          <div className="filter py-5">
            <div className="row">
              <div className="col-md-3">
                <div className="tabs">
                  <div className="input-range"></div>

                  <div className="tab">
                    <input type="checkbox" id="chck1" />

                    <label className="tab-label" htmlFor="chck1">
                      Filter by Brands
                    </label>

                    <div className="tab-content">
                      <ul>
                      <li onClick={() => handleBrandClick("Dell")}>Dell</li>
                      <li onClick={() => handleBrandClick("Apple")}>Apple</li>
                      <li onClick={() => handleBrandClick("MSI")}>Msi</li>
                      <li onClick={() => handleBrandClick("Asus")}>Asus</li>
                     </ul>
                    </div>
                  </div>
                  <div className="tab">
                    <input type="checkbox" id="chck2" />
                    <label className="tab-label" htmlFor="chck2">
                      Model
                    </label>
                    <div className="tab-content"> <li onClick={() => handleModel("MacBook Air")}>Mackbook air</li></div>
                  </div>
                  <div className="tab">
                    <input type="checkbox" id="chck3" />
                    <label className="tab-label" htmlFor="chck3">
                      Color
                    </label>
                    <div className="tab-content">
                    <ul>
                      <li onClick={() => handleColor("Gold")}>Gold</li>
                      <li onClick={() => handleColor("Silver")}>Silver</li>
                      <li onClick={() => handleColor("Gray")}>Gray</li>
                    
                     </ul>
                    </div>
                  </div>
                  <div className="tab">
                    <input type="checkbox" id="chck4" />
                    <label className="tab-label" htmlFor="chck4">
                      Screen Diaqonal
                    </label>
                    <div className="tab-content">
                    
                      <ul>
                      <li onClick={() => handleDiaqonal("13")}>13</li>
                      <li onClick={() => handleDiaqonal("14")}>14</li>
                      <li onClick={() => handleDiaqonal("17")}>17</li>
                    
                     </ul>
                    
                    </div>
                  </div>
                  <div className="tab">
                    <input type="checkbox" id="chck5" />
                    <label className="tab-label" htmlFor="chck5">
                      Screen type
                    </label>
                    <div className="tab-content">
                      <ul>
                        <li>Retina</li>
                      </ul>
                      
                    </div>
                  </div>
                  <div className="tab">
                    <input type="checkbox" id="chck6" />
                    <label className="tab-label" htmlFor="chck6">
                      Processor
                    </label>
                    <div className="tab-content">
                    <ul>
                      <li>M1 MAX</li>
                      <li>M1 Pro</li>
                      <li>M2 </li>
                    </ul>
                    </div>
                  </div>
                  <div className="tab">
                    <input type="checkbox" id="chck7" />
                    <label className="tab-label" htmlFor="chc7">
                      Ram Memory
                    </label>
                    <div className="tab-content">
                    <ul>
                      <li>16</li>
                      <li>24</li>
                      <li>32 </li>
                      <li>64 </li>
                    </ul>
                    </div>
                  </div>
                  <div className="tab">
                    <input type="checkbox" id="chck8" />
                    <label className="tab-label" htmlFor="chck8">
                      Storage
                    </label>
                    <div className="tab-content">
                    <ul>
                      <li>256</li>
                      <li>512</li>
                      <li>32 </li>
                      <li>64 </li>
                    </ul>
                   
                    </div>
                  </div>
                  <div className="tab">
                    <input type="checkbox" id="chck8" />
                    <label className="tab-label" htmlFor="chck8">
                      Relase Years
                    </label>
                    <div className="tab-content">
                    <ul>
                      <li>2021</li>
                      <li>2022</li>
                      <li>32 </li>
                      <li>64 </li>
                    </ul>
                    </div>
                  </div>
                  <div className="tab">
                    <input type="checkbox" id="chck8" />
                    <label className="tab-label" htmlFor="chck8">
                      Graphics
                    </label>
                    <div className="tab-content">
                     Integrated
                    </div>
                  </div>
                  <div className="tab">
                    <input type="checkbox" id="chck8" />
                    <label className="tab-label" htmlFor="chck8">
                      Graphics Series
                    </label>
                    <div className="tab-content">
                 
                    </div>
                  </div>
                  <div className="tab">
                    <input type="checkbox" id="chck8" />
                    <label className="tab-label" htmlFor="chck8">
                      Operating System
                    </label>
                    <div className="tab-content">
                    Mac OS-12
                    </div>
                  </div>
                  <div className="tab">
                    <input type="checkbox" id="chck8" />
                    <label className="tab-label" htmlFor="chck8">
                      Manufacturet Guarantee
                    </label>
                    <div className="tab-content">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Ipsum, reiciendis!
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-9">
                <div className="row">
                  <div className="sort">
                    <h4>Curved Monitors</h4>
                    <select
                      name="sortOption"
                      id="sortOption"
                      onChange={priceIncrement}
                    >
                      <option value="asc">Price: Low to High</option>
                      <option value="desc">Price: High to Low</option>
                    </select>
                  </div>

                  <div className="alldata-filter ">
                    <nav aria-label="Page navigation example">
                      <ul className="pagination mb-3">
                        <li className="page-item">
                          <a
                            className={`page-link ${
                              currentPage === npage ? "active" : ""
                            }}`}
                            onClick={prePage}
                          >
                            Previous
                          </a>
                        </li>
                        {numbers.map((n, i) => (
                          <li className="page-item" key={i}>
                            <a
                              onClick={() => changeCPage(n)}
                              className="page-link"
                            >
                              {n}
                            </a>
                          </li>
                        ))}

                        <li className="page-item">
                          <a onClick={nextPage} className="page-link">
                            Next
                          </a>
                        </li>
                      </ul>
                    </nav>
                    <div className="alldata row">
                      {records.map((item, index) => {
                        return <CardBest key={index} item={item} />;
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsFilter;
