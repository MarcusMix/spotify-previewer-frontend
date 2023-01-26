import { Route, Routes } from "react-router-dom"

// pages
import Auth from "./pages/Auth/auth"
import Home from "./pages/Home/home"
import Login from "./pages/Login/login"
import Logout from "./pages/Logout/logout"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/logout" element={<Logout/>}/>
      <Route path="/auth" element={<Auth/>} >
        <Route path=":token" />
      </Route>
    </Routes>
  )
}

export default AppRoutes