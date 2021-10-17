import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import './config/fontawesome'
import { Provider } from 'react-redux'
import store from './redux/store'
import { saveState } from './localStorage'

store.subscribe(() => {
  saveState({
    cart: store.getState().cart,
    coupon: store.getState().coupon,
  })
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
