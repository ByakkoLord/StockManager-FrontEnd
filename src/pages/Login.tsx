//Api

import api from '../services/api'

//React Icons

import { IconContext } from 'react-icons/'
import { BsFillBoxSeamFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

//Components

import LoginBlock from './LoginBlock'



function App() {

  const navigate = useNavigate()
    const tokenLocal = localStorage.getItem('token')
    
    useEffect(() => {
        async function checkToken() {
          if(tokenLocal){
            try {
                const response = await api.post('/checkToken', {
                  token: tokenLocal
                });
                console.log(response.data);
        
                if (response.data === "Token is valid") {
                    navigate('/home')
                    
                }else if (response.data === "Token is invalid"){
                    console.log(response.data);
                    localStorage.removeItem('token')
                    navigate('/login')
                }
              } catch (error) {
                console.error('Erro ao verificar o token:', error);
                
              }
          }else{
            navigate('/login')
          }
        }
    
        
        checkToken();
      }, [tokenLocal, navigate]);

  return (
    <div className='flex bg-gray-900 w-screen h-screen'>
      <div className='flex flex-col w-1/2 justify-center items-center'>
      <IconContext.Provider 
      value={{ 
        color: "#ceed2e",
        size: "15rem",
        className: "global-class-name" }}>
        <BsFillBoxSeamFill/>
      </IconContext.Provider>
      <h1 className='poppins text-4xl mt-5 font-bold text-white'>Stock Manager</h1>
      </div>
      <section className='flex w-1/2 justify-center items-center'>
        <LoginBlock/>
      </section>
      
    </div>
  )
}

export default App