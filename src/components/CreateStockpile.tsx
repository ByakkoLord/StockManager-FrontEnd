import { useState } from 'react'
import React from 'react'
import api from '../services/api'
import CreateStockpileBtn from './CreateStockpileBtn'
import ErrorMessage from '../components/ErrorMessage';

interface Props {
    displayCreateStockpile: boolean
}

export default function CreateStockpile(props: Props) {
    const { displayCreateStockpile } = props
    
    // API Functions

    const  [stockpileName, setStockpileName] = useState('')
    const  [typeName, setTypeName] = useState('')
    const  [enterpriseName, setEnterpriseName] = useState('')

    const [errorString, setErrorString] = useState('')
    const [show, setShow] = useState(false);
    const [animation, setAnimation] = useState('');

    async function handleSubmit(e: React.FormEvent) {
        
        if (stockpileName.length > 14 || stockpileName === '') {
            e.preventDefault()
            
            setErrorString('The name has to be lower than 14 characters and not empty')
            setAnimation('enterAnimation')
            setShow(true)
            setTimeout(() => {
              setAnimation('exitAnimation')
              setTimeout(() => {
                setShow(false)
              },1000)
              
            },2500)

        }else if (typeName.length > 10 || typeName === '') {
            e.preventDefault()
            
            setErrorString('The type has to be lower than 10 characters and not empty')
            setAnimation('enterAnimation')
            setShow(true)
            setTimeout(() => {
              setAnimation('exitAnimation')
              setTimeout(() => {
                setShow(false)
              },1000)
              
            },2500)

        }else if (enterpriseName.length > 14 || enterpriseName === '') {
            e.preventDefault()
            
            setErrorString('The enterprise has to be lower than 14 characters and not empty')
            setAnimation('enterAnimation')
            setShow(true)
            setTimeout(() => {
              setAnimation('exitAnimation')
              setTimeout(() => {
                setShow(false)
              },1000)
              
            },2500)

        }else {
            await api.post('/createStockpile', {
                stockpile: stockpileName,
                type: typeName,
                enterprise: enterpriseName,
                token: localStorage.getItem('token')
            })
    

            setDisplayCancelStockpile2(false)
            setStockpileName('')
            setTypeName('')
            setEnterpriseName('')
        }

        
    }



    
    const [displayCancelStockpile2, setDisplayCancelStockpile2] = useState(true)


    return (
        <>
        <section className={`absolute z-50 w-screen h-screen top-0 left-0 translucent_black ${displayCancelStockpile2 ? 'flex' : 'hidden'} ${displayCreateStockpile ? 'flex' : 'hidden'}`}>
            
            <section className={`absolute flex flex-col top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 m-auto bg-gray-800 shadow-2xl rounded-2xl w-1/3`}>
                <h3 className="mt-5 text-center poppins text-2xl text-white font-semibold">New Stockpile</h3>
                <form className="flex flex-col">
                    <section>
                        <div className="flex justify-evenly items-center mt-5 mb-5 ">
                            <label htmlFor="stockpileName" className="poppins text-xl text-white">Stockpile Name</label>
                            <input type="text"
                             onChange={(e) => setStockpileName(e.target.value)}
                             value={stockpileName}
                             id="stockpileName"
                             name="stockpileName"
                             className="focus:outline-none bg-gray-700 rounded-lg w-2/5 text-white poppins pl-3 pr-3"
                            />
                        </div>
                        <div className="flex justify-around items-center mt-5 mb-5">
                            <label htmlFor="stockpileName" className="poppins text-xl text-white">Product type</label>
                            <input type="text"
                             onChange={(e) => {setTypeName(e.target.value)}}
                             value={typeName}
                             id="type"
                             name="type"
                             className="focus:outline-none bg-gray-700 rounded-lg w-2/5 text-white poppins pl-3 pr-3"
                            />
                        </div>
                        <div className="flex justify-around items-center mt-5 mb-5 ">
                            <label htmlFor="stockpileName" className="mr-7 poppins text-xl text-white">Enterprise</label>
                            <input type="text"
                             onChange={(e) => setEnterpriseName(e.target.value)}
                             value={enterpriseName}
                             id="enterprise"
                             name="enterprise"
                             className="focus:outline-none bg-gray-700 rounded-lg w-2/5 text-white poppins pl-3 pr-3"
                            />
                        </div>
                    </section>
                    <div className="w-full mt-14 mb-10 flex justify-evenly">
                        
                        <button onClick={() => {setDisplayCancelStockpile2(false)}} className="hover:scale-105 transition-all bg-red-700 w-1/3 h-10 rounded-lg poppins text-xl font-semibold text-white shadow-lg">Cancel</button>
                        <CreateStockpileBtn onClickButton={handleSubmit}/>
                    </div>
                </form>
            
            </section>
            <ErrorMessage animation={animation} show={show} errorMessage={errorString}/>
        </section>
        
        </>
    )
}