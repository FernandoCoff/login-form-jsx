import "./input.scss"

const Input = ({type, name, status, placeholder, getValue, small}) =>{
    
    return(
        <div className={status}>
            <label htmlFor={name}>{placeholder}</label>
            <input type={type} id={name} placeholder={placeholder} name={name} onChange={({target})=> getValue(target.value)}></input>
            <i className="fa-solid fa-circle-check"></i>
            <i className="fa-solid fa-circle-exclamation"></i>
            <small>{small}</small>
        </div>
    )
} 

export default Input