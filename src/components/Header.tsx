import { IconContext } from 'react-icons/'
import { BsFillBoxSeamFill } from 'react-icons/bs'
import { AiOutlinePlus } from 'react-icons/ai'
import CreateStockpile from '../components/CreateStockpile'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'


export default function Header() {
    const [displayCreateStockpile, setDisplayCreateStockpile] = useState(false)
    const [option, setOption] = useState(false)

    const navigate = useNavigate()

    function handleSingOut() {
        localStorage.removeItem('token')
        navigate('/login')
    }

    return (
        <>
        <header className="flex fixed z-40 bg-gray-800 shadow-xl w-screen h-16">
                <div className='flex w-96 pl-5 justify-start items-center border-r-2 border-slate-500 mt-2 mb-2'>
                <IconContext.Provider 
                    value={{ 
                      color: "#ceed2e",
                      size: "3rem",
                      className: "global-class-name" }}>
                      <BsFillBoxSeamFill/>
                    </IconContext.Provider>

                    <h3 className='ml-5 poppins text-2xl text-white'>Stock Manager</h3>
                </div>
                <div className='flex w-1/2 pr-5 justify-start pl-6 items-center'>
                        <span className='poppins text-lg mr-2 text-white'>Create a new Stockpile</span>
                        <IconContext.Provider 
                            value={{ 
                              color: "#ceed2e",
                              size: "2rem",
                              className: "global-class-name" }}>
                              <button onClick={() => setDisplayCreateStockpile(true)} className='transtion-all hover:scale-125'><AiOutlinePlus/></button>
                        </IconContext.Provider>
                    
                </div>
                <div className=' flex w-1/2 pr-5 justify-end items-center'>
                    <span className='poppins text-xl mr-5 text-white'>ByakkoLord</span>
                    <button onClick={() => option ? setOption(false) : setOption(true)} className='hover:scale-105 transition-all flex rounded-full w-12 h-12 bg-red-600 justify-center items-center'><span className='poppins text-2xl text-white'>BL</span></button>
                </div>

                <section className={`absolute rounded-xl right-5 top-20 bg-gray-800 ${option ? "flex" : "hidden"} w-36 h-11 justify-center items-center`}>
                    <button onClick={handleSingOut} className='poppins text-xl text-white font-semibold'>Sing Out</button>
                </section>
            </header>
            
            <CreateStockpile displayCreateStockpile={displayCreateStockpile}/>
        </>
    )
}