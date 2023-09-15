import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import Login from './pages/Login.tsx'
import Teste from './pages/teste.tsx'
import './index.css'

import CreateAccount from './pages/CreateAccount.tsx'
import Home from './pages/home/Home.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
        
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/createAccount" element={<CreateAccount/>} />
          <Route path='/home'element={<Home/>}/>
          <Route path='/teste'element={<Teste/>}/>
        </Routes>
      </Router>
  </React.StrictMode>,
)
