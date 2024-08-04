import "./CommonButton.scss"

export default function CommonButton(props){

    const {className, value, click, selected} = {...props}
    


    return(
        <button 
            className={`${className} ${selected ? "selected" : ""}`}
            onClick={click}
        >
            {value}
        </button>
    )
}