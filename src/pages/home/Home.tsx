import Header from '../../components/Header'



export default function Home(){
    return(
        <div className="bg-gray-900 w-screen h-screen">
            <Header/>
            <aside className='flex flex-col bg-gray-800 w-1/4 h-screen pt-16'>
                <h2 className='text-center mt-4 poppins text-2xl text-white'>Stocks</h2>
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
            </aside>
        </div>
    )
}