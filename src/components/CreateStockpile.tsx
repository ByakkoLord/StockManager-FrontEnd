import { useState } from 'react'

interface Props {
    displayCreateStockpile: boolean
}

export default function CreateStockpile(props: Props) {
    const { displayCreateStockpile } = props
    const [displayCancelStockpile2, setDisplayCancelStockpile2] = useState(true)


    return (
        <section className={`absolute z-50 w-screen h-screen top-0 left-0 translucent_black ${displayCancelStockpile2 ? 'flex' : 'hidden'} ${displayCreateStockpile ? 'flex' : 'hidden'}`}>
            
            <section className={`absolute flex flex-col top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 m-auto bg-gray-800 shadow-2xl rounded-2xl w-1/3`}>
                <h3 className="mt-5 text-center poppins text-2xl text-white font-semibold">New Stockpile</h3>
                <form className="flex flex-col">
                    <section>
                        <div className="flex justify-evenly items-center mt-5 mb-5 ">
                            <label htmlFor="stockpileName" className="poppins text-xl text-white">Stockpile Name</label>
                            <input type="text" id="stockpileName" name="stockpileName" className="focus:outline-none bg-gray-700 rounded-lg w-2/5 text-white poppins pl-3 pr-3"/>
                        </div>
                        <div className="flex justify-around items-center mt-5 mb-5 ">
                            <label htmlFor="stockpileName" className="poppins text-xl text-white">Product type</label>
                            <input type="text" id="stockpileName" name="stockpileName" className="focus:outline-none bg-gray-700 rounded-lg w-2/5 text-white poppins pl-3 pr-3"/>
                        </div>
                        <div className="flex justify-around items-center mt-5 mb-5 ">
                            <label htmlFor="stockpileName" className="mr-7 poppins text-xl text-white">Enterprise</label>
                            <input type="text" id="stockpileName" name="stockpileName" className="focus:outline-none bg-gray-700 rounded-lg w-2/5 text-white poppins pl-3 pr-3"/>
                        </div>
                    </section>
                    <div className="w-full mt-14 mb-10 flex justify-evenly">
                        
                        <button onClick={() => {setDisplayCancelStockpile2(false)}} className="hover:scale-105 transition-all bg-red-700 w-1/3 h-10 rounded-lg poppins text-xl font-semibold text-white shadow-lg">Cancel</button>
                        <button className="hover:scale-105 transition-all primaryColor w-1/3 h-10 rounded-lg poppins text-xl font-semibold text-black shadow-lg">Create</button>
                    </div>
                </form>
            
            </section>
        </section>
    )
}