import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import Login from './pages/Login.tsx'
import './index.css'

import CreateAccount from './pages/CreateAccount.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
        
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/createAccount" element={<CreateAccount/>} />
        </Routes>
      </Router>
  </React.StrictMode>,
)
