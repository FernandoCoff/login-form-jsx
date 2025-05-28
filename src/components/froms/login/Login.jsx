import "./login.module.scss"
import Button from "../../form components/button/button"
import Title from "../../form components/title/Title"
import Input from "../../form components/inputs/Input"
import { use, useEffect, useState } from "react"


const Login = () =>{ 

    const [email, setEmail] = useState('default')
    const [password, setPassword] = useState('default')
    const [statusEmail, setStatusEmail] = useState('')
    const [statusPassword, setStatusPassword] = useState('')
    const [smallEmail, setSmallEmail] = useState('')
    const [smallPassword, setSmallPassword] = useState('')

    // BUTTON SUBMIT
    const submit= (e) =>{
        e.preventDefault()
    }

    useEffect(()=>{

        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(email === 'default'){
            setStatusEmail('')
        }else if(!regex.test(email)){
            setStatusEmail('error')
            setSmallEmail('Email Inválido!')
        }else{
            setStatusEmail('success')
        }

        if(password === 'default'){
            setStatusPassword('')
        }else if(password.length < 6){
            setStatusPassword('error')
            setSmallPassword('Incorrect Password!')
        }else{
            setStatusPassword('success')
        }
    },[email, password])

    

    return(
        <form method="post" className="card">
            <Title text="login"/>
            <div className="input_group">
                <Input name="email" type="email" placeholder="Email" getValue={setEmail} status={statusEmail} small={smallEmail}></Input>
                <Input name="password" type="password" placeholder="Password" getValue={setPassword} status={statusPassword} small={smallPassword}></Input>
            </div>
            <Button type="submit" text="Login" click={submit}/>
        </form>
    )
}

export default Login