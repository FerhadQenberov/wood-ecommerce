import React, { useContext, useEffect } from 'react'
import DropDown from './common/DropDown'
import Footer from './common/Footer'
import Header from './common/Header'
import AppRouter from './routes/AppRouter'
import axios from 'axios'

import { useDispatch } from 'react-redux'
import { setData } from './manager/control/FilterSlice'
import { ProductContext } from './context/api'
import { ThemeContext } from './context/ThemeContext'



const App = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3004/kompyuterler')
        console.log(response.data)
       
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])


  const dispatch = useDispatch();
  const allData = useContext(ProductContext);

  useEffect(() => {
   
    dispatch(setData(allData));
  }, [dispatch, allData]);

  return (
    <>
    {/* <DropdDownSub/> */}
  <ThemeContext>
  <DropDown />
      <Header />
      <AppRouter />
      <Footer />
  </ThemeContext>
    </>
  )
}

export default App
