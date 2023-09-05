import React, { useEffect } from 'react'
import ArticleCard from './Card/ArticleCard'
import { useTranslation } from 'react-i18next'
import blog from '../data/data'

const Articles = () => {


  const {t}=useTranslation()
  return (
    <>
    <div className='article py-5'>
        <div className="article-text py-4">
            <h3>{t("articles.0")}</h3>
        </div>
        <div className="article-cards g-3 row py-3">
          {blog.map((item, index)=>{
            return  <ArticleCard key={index} item={item}/>
          })}
         
          
           

        </div>

    </div>
      
    </>
  )
}

export default Articles
