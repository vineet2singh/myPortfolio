import { useState } from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Blogs from './pages/Skills'
import Connect from './pages/Connect'
import Project from './pages/Project'


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
