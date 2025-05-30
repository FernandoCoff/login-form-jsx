import Login from "./components/froms/login/Login"
import Register from "./components/froms/register/Register"
import Forgot from "./components/froms/forgot/forgot"
import { useState } from "react"

function App() {

  const authPage = () => {
    const [currentPage, setCurrentPage] = useState('login')
    
    switch(currentPage){
      case 'login':
        return <Login setRegister={()=> setCurrentPage('register')} setForgot={()=> setCurrentPage('forgot')}/>
      case 'register':
        return <Register setLogin={()=> setCurrentPage('login')}/>
      case 'forgot':
        return <Forgot setLogin={()=> setCurrentPage('login')} />
      default:
        <Login/>
    }

  }

  return (
    <>
      {authPage()}
    </>
  )
}

export default App
