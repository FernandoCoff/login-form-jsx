import "./forgot.module.scss"
import Title from "../../form components/title/Title"
import Input from "../../form components/inputs/Input"
import { useEffect, useState } from "react"
import Button from "../../form components/button/button"

const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const Forgot = ({setLogin}) => {

    const [email, setEmail] = useState('default')
    const [statusEmail, setStatusEmail] = useState('')
    const [smallEmail, setSmallEmail] = useState('default')

    useEffect(()=>{
        if(email === 'default'){
            setStatusEmail('')
        }else if(!regex.test(email)){
            setStatusEmail('error')
            setSmallEmail('Invalid Email!')
        }else{
            setStatusEmail('success')
        }
    },[email])

    const submit = (e) =>{
        e.preventDefault()
    }

    return(
        <form method="post" className="card">
            <Title text="Recover account"/>
            <div className="input_group">
                <Input name="email" type="email" placeholder="Email" getValue={setEmail} status={statusEmail} small={smallEmail}></Input>
            </div>
            <footer>
                <p>When you click "Reset Password" we will send you a link to reset your password.</p>
                <h6>Already have an account? <a href="#" onClick={()=> setLogin()}>Login</a></h6>
            </footer>
            <Button text="Send Email" type="submit" click={submit}/>
        </form>
    )
}

export default Forgot