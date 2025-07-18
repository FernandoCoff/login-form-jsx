import { useMemo } from "react"
import Button from "../../form components/button/button"
import Title from "../../form components/title/Title"
import Input from "../../form components/inputs/Input"
import { useEffect, useState } from "react"

const Register = ({setLogin}) => {

    // VALUE
    const [name, setName] = useState('default')
    const [email, setEmail] = useState('default')
    const [password, setPassword] = useState('default')
    const [confirmPassword, setConfirmPassword] = useState('default')

    // ERROR MESSAGE
    const [smallName, setSmallName] = useState('default')
    const [smallEmail, setSmallEmail] = useState('default')
    const [smallPassword, setSmallPassword] = useState('default')
    const [smallConfirmPass, setSmallConfirmPass] = useState('default')

    // STATUS INPUT
    const [statusName, setStatusName] = useState('')
    const [statusEmail, setStatusEmail] = useState('')
    const [statusPassword, setStatusPassword] = useState('')
    const [statusConfirmPass, setStatusConfirmPass] = useState('')

    // TEST EMAIL

    const regex = useMemo(() => /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, []);
    const nameRegex = useMemo(() => /^[a-zA-Z\sÀ-ÿ]+$/, []);
    const regexPassword = useMemo(() => /^\S.*\s.*\S$/, []);

    // BUTTON SUBMIT
    const submit = (e) =>{
        e.preventDefault()
    }

    
    useEffect(()=>{
        // Name
        if(name === "default"){
            setStatusName('')
        }else if(name.trim().length < 6){
            setStatusName('error')
            setSmallName('Insufficient Characters, min 6!')
        }else if(!nameRegex.test(name)){
            setStatusName('error')
            setSmallName('Enter a valid name!')
        }else{
            setStatusName('success')
        }
        // EMAIL
        if(email === "default"){
            setStatusEmail('')
        }else if(!regex.test(email)){
            setStatusEmail('error')
            setSmallEmail('Invalid email!')
        }else{
            setStatusEmail('success')
        }
        // PASSWORD
        if(password === "default"){
            setStatusPassword('')
        }else if(password.trim() == ""){
            setStatusPassword('error')
            setSmallPassword('Password cannot be empty!')
        }else if(regexPassword.test(password)){
            setStatusPassword('error')
            setSmallPassword('Inavlid password!')
        }else if(password.length < 6){
            setStatusPassword('error')
            setSmallPassword('Insufficient Characters, min 6!')
        }else{
            setStatusPassword('success')
        }

        // CONFIRM PASSWORD 
        if(confirmPassword === 'default'){
            setStatusConfirmPass('')
        }else if(confirmPassword == ""){
            setStatusConfirmPass('error')
            setSmallConfirmPass('Password cannot be empty!')
        }else if(confirmPassword != password){
            setStatusConfirmPass('error')
            setSmallConfirmPass('Passwords do not match!')
        }else{
            setStatusConfirmPass('success')
        }

    },[name, email, password, confirmPassword, nameRegex, regex, regexPassword])


    return(
        <form method="post" className="card">
            <div className="header">
            <Title text="Register"/>
            <p>Have an account? <a href="#" onClick={()=> setLogin()}>Login</a></p>
            </div>
            <div className="input_group">
                <Input name="Name" type="text" placeholder="Full Name" getValue={setName} status={statusName} small={smallName}/>
                <Input name="email" type="email" placeholder="Email" getValue={setEmail} status={statusEmail} small={smallEmail}/>
                <Input name="password" type="password" placeholder="Password" getValue={setPassword} status={statusPassword} small={smallPassword}/>
                <Input name="confirmPassword" type="password" placeholder="Confirm Password" getValue={setConfirmPassword} status={statusConfirmPass} small={smallConfirmPass}/>
            </div>
            <footer>
                <div>
                    <input type="checkbox" id="checkbox"/>
                    <label htmlFor="checkbox">I accept the <a href="#">Terms and Conditions</a></label>
                </div>
            </footer>
            <Button type="submit" text="Register" click={submit}/>
        </form>
    )
}
export default Register