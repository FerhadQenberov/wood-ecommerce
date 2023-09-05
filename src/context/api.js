

import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'

export const ProductContext = createContext()
export const ProductProvider = ({ children }) => {
  const [data, setData] = useState([])



  console.log(data)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(' http://localhost:3005/kompyuterler ')
      
        setData(response.data)
   
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])




  return (
    <ProductContext.Provider value={data }>{children}</ProductContext.Provider>
  )
}
