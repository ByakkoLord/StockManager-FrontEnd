import Header from '../../components/Header'
import Aside from '../../components/Aside'
import Footer from '../../components/Footer'
import CreateStockpile from '../../components/CreateStockpile'

import { useState } from 'react'



export default function Home(){

    const [displayCreateStockpile, setDisplayCreateStockpile] = useState(false)
    

    const handleCreateStockpile = () => {
        setDisplayCreateStockpile(true)
    }

    return(
        <>
        <div className="bg-gray-900 w-screen h-screen overflow-hidden">
            <Header/>
            <section className='flex'>
                <Aside/>
                
                <section className='flex flex-col w-3/4 h-screen items-center justify-center'>
                    <section className='flex justify-center items-center'>
                        <div className='hover:border-slate-500  flex justify-center items-center w-80 h-44 border-2 border-gray-600 rounded-2xl'>
                            <p className='poppins text-2xl text-slate-500'>Select some Stockpile</p>
                        </div>
                        <span className='poppins text-2xl text-slate-500 ml-5 mr-5'>Or</span>
                        <button onClick={handleCreateStockpile}
                                className='hover:border-slate-500 flex justify-center items-center w-80 h-44 border-2 border-gray-600 rounded-2xl'>
                            <p className='poppins text-2xl text-slate-500'>Create a new one</p>
                        </button>
                    </section>
                    <Footer/>
                </section>
            </section>

            
                <CreateStockpile  displayCreateStockpile={displayCreateStockpile}/> 
                
        </div>
        </>
    )   
}