import React from 'react'
import { Card } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom'
import CardsDetails from './Components/CardsDetails'
import Header from './Components/Header'

const App = () => {
  return (
      <>
       <Header />
        <Routes>
            <Route path="/" element={<Card/>} />
            <Route path='/card' element={<CardsDetails/>}/>
        </Routes>
      </>
  )
}

export default App