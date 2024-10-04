import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './component/Navbar/Navbar'
import Home from './component/Home/Home'
import NotFound from './component/NotFound/NotFound'
import Login from './component/Login/Login'

function App() {

  return (
    <>
     <BrowserRouter>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
     </BrowserRouter> 
    </>
  )
}

export default App
