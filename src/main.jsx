import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { Provider } from 'react-redux'

// this store is our main store so it will be in {} brackets 
import { store } from './components/store.js'



createRoot(document.getElementById('root')).render(
  
  
    <Provider store={store} >
      <App />
    </Provider>
    
  
)
