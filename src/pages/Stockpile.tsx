import Header from '../components/Header'
import Aside from '../components/Aside'
import Footer from '../components/Footer'
import Item from '../components/Item'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import api from '../services/api'

export default function Stockpile(){
    
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
                    console.log(response.data);
                    
                }else if (response.data === "Token is invalid"){
                    console.log(response.data);
                    localStorage.removeItem('token')
                    navigate('/')
                }
              } catch (error) {
                console.error('Erro ao verificar o token:', error);
                
              }
          }else{
            navigate('/')
          }
        }
    
        
        checkToken();
      }, [tokenLocal, navigate]);
    

    return(
        <>
        <div className="bg-gray-900 w-screen h-screen overflow-hidden">
            <Header/>
            <section className='flex'>
                <Aside/>
                
                <section className='flex flex-col w-3/4 h-screen items-center justify-center'>
                    <section className='flex flex-col  pl-4 pr-4 justify-between items-center bg-slate-700 w-11/12 h-full mt-24 mb-9 rounded-xl shadow-lg shadow-slate-800'>
                        <section className='flex w-full mt-4 border-b-2 pb-3 justify-between items-center'>
                            <span className='poppins pl-12 text-2xl text-white'>Name:</span>
                            <h2 className='poppins text-2xl text-white'>Stockpile</h2>
                            <span className='poppins pr-12 text-2xl text-white'>Price:</span>
                        </section>
                        <section className='flex flex-col justify-start items-center w-full h-full'>
                            <Item/>
                        </section>
                        <section className='mb-2 pt-2 flex justify-between items-center w-full h-14 border-t-2 border-gray-500'>
                            <button className='hover:scale-105 transition-all bg-red-500 w-48 h-8 rounded-lg poppins text-xl font-semibold text-white shadow-lg'>Delete Stockpile</button>
                            <div className='flex justify-between items-center'>
                                <button onClick={() => navigate('/home')} className='mr-3 hover:scale-105 transition-all bg-blue-500 w-48 h-8 rounded-lg poppins text-xl font-semibold text-white shadow-lg'>Close Stockpile</button>
                                <button className='hover:scale-105 transition-all bg-yellow-500 w-48 h-8 rounded-lg poppins text-xl font-semibold text-white shadow-lg'>Delete Item</button>
                                <button className='ml-3 hover:scale-105 transition-all bg-green-500 w-48 h-8 rounded-lg poppins text-xl font-semibold text-white shadow-lg'>Add Item</button>
                            </div>
                        </section>
                    </section>
                    <Footer/>
                </section>
            </section>               
        </div>
        </>
    )   
}