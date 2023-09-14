import style from './ErrorMessage.module.css'

import { IconContext } from 'react-icons/'
import { BiErrorCircle } from 'react-icons/bi'



interface Props {
    errorMessage: string,
    show: boolean,
    animation: string
}

export default function ErrorMessage(prop: Props) {
const { errorMessage, show, animation } = prop
    

    return (
        <div className={`${show ? 'flex' : 'hidden'} ${style[animation]}  absolute bg-red-600 p-2 rounded-md shadow-xl left-10 bottom-10 justify-center items-center`}>
            <IconContext.Provider value={{ size: "2rem", className: "text-white mr-2" }}>
                <BiErrorCircle />
            </IconContext.Provider>
            <p className="poppins text-xl mr-2 font-bold text-white">{errorMessage}</p>
        </div>
    )
}

