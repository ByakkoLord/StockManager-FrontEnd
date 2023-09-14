import { IconContext } from 'react-icons/'
import { BsFillBoxSeamFill } from 'react-icons/bs'

export default function Header() {
    return (
        <header className="flex fixed z-50 bg-gray-800 shadow-xl w-screen h-16">
                <div className='flex w-1/2 pl-5 justify-start items-center'>
                <IconContext.Provider 
                    value={{ 
                      color: "#ceed2e",
                      size: "3rem",
                      className: "global-class-name" }}>
                      <BsFillBoxSeamFill/>
                    </IconContext.Provider>

                    <h3 className='ml-5 poppins text-2xl text-white'>Stock Manager</h3>
                </div>
                <div className='flex w-1/2 pr-5 justify-end items-center'>
                    <span className='poppins text-xl mr-5 text-white'>ByakkoLord</span>
                    <div className='flex rounded-full w-12 h-12 bg-red-600 justify-center items-center'><span className='poppins text-2xl text-white'>BL</span></div>
                </div>
            </header>
    )
}