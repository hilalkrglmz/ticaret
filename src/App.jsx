import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import MainPage from './Pages/MainPage'
import Basket from './Pages/Basket'
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div>
      <BrowserRouter>

        <Header />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/basket' element={<Basket />} />
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App