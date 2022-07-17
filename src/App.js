import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import UserState from './Context/UserState'
import Users from './Components/Users'
import Navbar from './Components/Navbar'
import Login from './Components/Login'
const App = () => {

  return (
    <UserState>
      <Router>
        <Navbar/>
        <Routes>
          <Route path = "/" element = {<Users />} />
          <Route path = "/login" element = {<Login/>} />
        </Routes>
      </Router>
    </UserState>
  )
}

export default App