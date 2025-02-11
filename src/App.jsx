import React from 'react'
import {Route,Routes} from 'react-router-dom'
import NotFound from './pages/NotFound'
import Login from './components/auth/Login'

const App = () => {
  return (
    <>
      <Routes>
          <Route path="/home?" element={<h1 >home</h1>} />
          <Route path="/about" element={ <h1>about</h1> } />
          <Route path="/login" element={<Login />} />  
          <Route path="/*" element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
