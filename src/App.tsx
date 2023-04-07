import { useState } from 'react'
import './App.css'
import Header from './components/mainpage/Header'
import Main from './components/mainpage/Main'
import Footer from './components/mainpage/Footer'
import Information from './components/mainpage/Information'
import { Routes, Route } from 'react-router-dom'
import Statistic from './components/mainpage/Statistic'

function App() {

  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route path='/' element={<Main/>}/>
            <Route path='/information' element={<Information/>}/>
            <Route path='/Statistic' element={<Statistic />}>
          </Route>
        </Routes>
      <Footer/>
    </div>
  )
}

export default App
