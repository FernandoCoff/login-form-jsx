import "./login.module.scss"
import Button from "../../form components/button/button"
import Title from "../../form components/title/Title"
import Input from "../../form components/inputs/Input"
import { use, useEffect, useState } from "react"


const Login = ({setRegister, setForgot}) =>{ 

    const [email, setEmail] = useState('default')
    const [password, setPassword] = useState('default')
    const [statusEmail, setStatusEmail] = useState('')
    const [statusPassword, setStatusPassword] = useState('')
    const [smallEmail, setSmallEmail] = useState('default')
    const [smallPassword, setSmallPassword] = useState('default')

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
            setSmallEmail('Invalid Email!')
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
            <div class="header">
                <Title text="login"/>
                <p>Need an account? <a href="#" onClick={()=> setRegister()}>Sign up</a></p>
            </div>
            <div className="input_group">
                <Input name="email" type="email" placeholder="Email" getValue={setEmail} status={statusEmail} small={smallEmail}></Input>
                <Input name="password" type="password" placeholder="Password" getValue={setPassword} status={statusPassword} small={smallPassword}></Input>
            </div>
            <footer className="Footer">
                <div>
                    <input type="checkbox" id="checkbox"/>
                    <label htmlFor="checkbox">Remember-me</label>
                </div>
                <a href="#" onClick={()=> setForgot()}>Forgot Password?</a>
            </footer>
            <Button type="submit" text="Login" click={submit}/>
        </form>
    )
}

export default Login