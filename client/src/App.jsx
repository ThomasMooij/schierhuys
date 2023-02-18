import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";


function App() {
 
  const [selectedPage, setSelectedPage] = useState('home')
  const [topOfPage, setTopOfPage] = useState(true)

  return (
    <>
  <BrowserRouter>
  <Navbar 
    selectedPage={selectedPage} 
  />
    <Routes>
      <Route path='/' element ={<Landing />}  />
    </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
