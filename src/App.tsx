//React Icons

import { IconContext } from 'react-icons/'
import { BsFillBoxSeamFill } from 'react-icons/bs'

//Components

import Login from './components/Login'


function App() {

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
      <h1 className='text-4xl mt-5 font-bold text-white'>Stock Manager</h1>
      </div>
      <section className='flex w-1/2 justify-center items-center'>
        <Login />
      </section>
    </div>
  )
}

export default App
