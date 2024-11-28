import { useState } from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Blogs from './components/Skills'
import Contact from './components/Contact'
import About from './components/About'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>

      <Route  path='/' element={<Navbar/>}>
        <Route index element={<Home/>}/>
        <Route path='/Skills' element={<Blogs/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/About' element={<About/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
