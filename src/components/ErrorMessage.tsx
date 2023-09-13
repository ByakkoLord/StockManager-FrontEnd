export default function ErrorMessage() {

    

    return (
        <div className="absolute bg-red-600 p-2 rounded-md shadow-xl left-10 bottom-10 flex justify-center items-center">
            <h1 className="roboto text-xl pr-4 font-bold text-white">Error:</h1>
            <p className="roboto text-xl font-bold text-white">Please fill in all fields</p>
        </div>
    )
}