
import { IconContext } from 'react-icons/'
import {  AiFillSetting } from 'react-icons/ai'
import { useState, useEffect } from 'react'
import api from '../services/api'
import StockpilesInfo from './StockpilesInfo'

export default function Aside() {

    const [allStockpiles, setAllStockpiles] = useState<{_id: string, stockpile: string, type: string, enterprise: string}[]>([])
    

    useEffect(() => {
        async function getStockpiles(){
            const response = await api.get('/allStockpiles')
            setAllStockpiles(response.data)
            console.log(response.data)
        }
        getStockpiles()
    },[])


    return(
        <aside className='flex flex-col bg-gray-800 w-1/4 h-screen shadow-xl pt-16'>
                <h2 className='text-center mt-4 poppins text-2xl text-white'>Stockpiles</h2>
                <section className='flex flex-col mt-5 w-full h-full overflow-y-auto'>

                {allStockpiles.map(data => (
                   <StockpilesInfo key={data._id} stockpileName={data.stockpile} typeName={data.type} enterpriseName={data.enterprise}/>
                ))}
                    
                </section>

                <section className="flex justify-center items-center border-t-2 border-gray-600 ">
                <IconContext.Provider 
                    value={{ 
                      color: "#ceed2e",
                      size: "2.2rem",
                      className: "global-class-name" }}>
                      <button className='hover:scale-105 hover:text-slate-300 text-slate-400 font-semibold poppins cursor-pointer rounded-sm transition-all flex h-14 ml-4 mr-4 justify-center items-center '><AiFillSetting/><span className='pl-2'>Settings</span></button>
                    </IconContext.Provider>
                    
                </section>
            </aside>
    )
}