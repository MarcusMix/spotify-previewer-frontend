import { Route, Routes } from "react-router-dom"

// pages
import Auth from "./pages/Auth/Auth"
import Login from "./pages/Login/login"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/auth" element={<Auth/>} >
        <Route path=":token" />
      </Route>
    </Routes>
  )
}

export default AppRoutes