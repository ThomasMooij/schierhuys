import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./pages/Home";


function App() {
 
  const [selectedPage, setSelectedPage] = useState('Home')
  const [topOfPage, setTopOfPage] = useState(true)

  return (
    <>
  <BrowserRouter>
  <Navbar 
    selectedPage={selectedPage} 
    setSelectedPage={setSelectedPage}
  />
    <Routes>
      <Route path='/' element ={<Home />}  />
    </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
