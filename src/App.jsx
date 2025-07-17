import Login from "./components/froms/login/Login"
import Register from "./components/froms/register/Register"
import Forgot from './components/froms/forgot/Forgot'
import { useState } from "react"

function App() {

  const [currentPage, setCurrentPage] = useState('login')

  const renderAuthPage = () => {
    switch(currentPage){
      case 'login':
        return <Login setRegister={()=> setCurrentPage('register')} setForgot={()=> setCurrentPage('forgot')}/>
      case 'register':
        return <Register setLogin={()=> setCurrentPage('login')}/>
      case 'forgot':
        return <Forgot setLogin={()=> setCurrentPage('login')} />
      default:
        return <Login/>
    }
  }

  return (
    <>
      {renderAuthPage()}
    </>
  )
}

export default App
