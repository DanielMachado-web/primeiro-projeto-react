import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.js'
import App from './App.jsx'
import GlobalStyle from './globalStyles.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
    </React.StrictMode>
   
)
