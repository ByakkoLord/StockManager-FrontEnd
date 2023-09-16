interface Props {
    onClickButton:  (e: React.FormEvent<Element>) => void
}

const CreateStockpileBtn =  (prop: Props) => {
    const { onClickButton } = prop
    
    return (
        <div>
            <button onClick={onClickButton} className="hover:scale-105 transition-all primaryColor w-48 h-10 rounded-lg poppins text-xl font-semibold text-black shadow-lg">Create</button>
        </div>
    )
}

export default CreateStockpileBtn