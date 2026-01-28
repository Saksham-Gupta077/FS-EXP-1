import { useState } from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './App.css'


function Home() {
  return <>
    <h1>Home Page</h1>
  </>

}

function Profile() {
  return <>
  <h1>Saksham Gupta</h1>
  <img src="img.png" width="320px" height='400px' alt="" />
  </>
}

function DashBoard() {
  return <><h1>Skills:</h1><h2>HTML</h2>
  <h2>CSS</h2><h2>React</h2>
  </>
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<DashBoard />} />

      </Routes>
    </BrowserRouter>
  )
}
export default App;
