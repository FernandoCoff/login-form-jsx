import "./button.module.scss"

const Button = ({text, click, type}) => {
    return <><button type={type} onClick={click}>{text}</button></>
}

export default Button