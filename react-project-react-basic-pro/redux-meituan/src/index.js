import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './App'
// 注入store
import store from './store'
import { Provider } from 'react-redux'
const root = createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
   <App />
  </Provider>
)
