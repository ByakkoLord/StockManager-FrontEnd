
import { IconContext } from 'react-icons/'
import {  AiFillSetting } from 'react-icons/ai'

export default function Aside() {
    return(
        <aside className='flex flex-col bg-gray-800 w-1/4 h-screen shadow-xl pt-16'>
                <h2 className='text-center mt-4 poppins text-2xl text-white'>Stockpiles</h2>
                <section className='flex flex-col mt-5 w-full h-full overflow-auto'>
                    <button className='hover:scale-105 hover:border-gray-400 hover:text-slate-300 cursor-pointer rounded-sm transition-all flex h-14 ml-4 mr-4 justify-center items-center border-b-2 poppins text-xl text-slate-400  border-gray-600'>
                        StockName
                    </button>
                    <button className='hover:scale-105 hover:border-gray-400 hover:text-slate-300 cursor-pointer rounded-sm transition-all flex h-14 ml-4 mr-4 justify-center items-center border-b-2 poppins text-xl text-slate-400  border-gray-600'>
                        StockName
                    </button>
                    <button className='hover:scale-105 hover:border-gray-400 hover:text-slate-300 cursor-pointer rounded-sm transition-all flex h-14 ml-4 mr-4 justify-center items-center border-b-2 poppins text-xl text-slate-400  border-gray-600'>
                        StockName
                    </button>
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