import React from 'react'
import ReactDOM from 'react-dom/client'
import '../src/assets/sass/style.css'
import { Provider } from 'react-redux'

import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import i18n from './i18n/i18n'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { ProductProvider } from './context/api'
import { CartProvider } from 'react-use-cart'

import { store } from './manager/store/store'
import { ModeProvider } from './context/ModeContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <ProductProvider>
      <Provider store={store}>
        <CartProvider>
          <ModeProvider>
          <App />
          </ModeProvider>
     
        </CartProvider>
      </Provider>
    </ProductProvider>
  </BrowserRouter>,
)
