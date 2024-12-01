import { useState } from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Blogs from './components/Skills'
import Connect from './components/Connect'
import Project from './components/Project'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>

      <Route  path='/' element={<Navbar/>}>
        <Route index element={<Home/>}/>
        <Route path='/Skills' element={<Blogs/>}/>
        <Route path='/Project' element={<Project/>}/>
        <Route path='/Connect' element={<Connect/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
