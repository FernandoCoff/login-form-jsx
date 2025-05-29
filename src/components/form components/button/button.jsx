import "./button.module.scss"

const Button = ({text, click, type, disabled}) => {
    return <><button type={type} onClick={click}>{text}</button></>
}

export default Button