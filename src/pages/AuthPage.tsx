import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../services/api'

export default function AuthPage(){
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

      return null
    
}