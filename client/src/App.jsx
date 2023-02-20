import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";


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
      <Route path='/' element ={<Landing />}  />
    </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
