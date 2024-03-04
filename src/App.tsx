import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom'; 
import './App.css'
import Home from './Component/Home'
import Book from './Component/Book'
import Nav from './Component/Navcmp'

function App() {

  return (
    <div className='container mx-auto maw-w-7xl'>
    <Nav />
    {/* <h1>Navbar</h1> */}
    <Router>
      <Routes>
        <Route path="/"  Component={Home} />
        <Route path="/book/:id" Component={Book} />
      </Routes>
    </Router>
    </div>
  )
}

export default App
