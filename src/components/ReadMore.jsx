import React from 'react'
import { useTranslation } from 'react-i18next'

const ReadMore = () => {
  const {t}=useTranslation()
  return (
    <>
    <div className='read-more'>
        <div className="linear-container">
      <h2>{t("read.0")}</h2>
        </div>
        <div className="linear-p">
            <p>{t("read.1")}</p>
        </div>

    </div>
      
    </>
  )
}

export default ReadMore
