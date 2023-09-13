import { IconContext } from 'react-icons/'
import { BiErrorCircle } from 'react-icons/bi'

export default function ErrorMessage() {



    return (
        <div className="absolute bg-red-600 p-2 rounded-md shadow-xl left-10 bottom-10 flex justify-center items-center">
            <IconContext.Provider value={{ size: "2rem", className: "text-white mr-2" }}>
                <BiErrorCircle />
            </IconContext.Provider>
            <p className="poppins text-xl mr-2 font-bold text-white">Please fill in all fields</p>
        </div>
    )
}