import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./pages/Home";
import Pay from "./pages/Pay";
import ReviewComponent from "./components/ReviewComponent"
import InfoComponent from "./components/InfoComponent"
import OmgevingComponent from "./components/OmgevingComponent"
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import Protected from "./components/Protected";

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
      <Route path='/' element ={<Home setSelectedPage={setSelectedPage} />}>
        <Route path="reviews" element={<ReviewComponent />}/>
        <Route path="omgeving" element={<OmgevingComponent />}/>
        <Route path="info" element={<InfoComponent />}/>
      </Route>
      <Route path='/pay' element ={<Pay />}  />
      <Route path='/login' element ={<Login />}  />
      <Route path="/admin" element={<Protected />}>
        <Route exact path="/admin" element={<Admin />} />
      </Route>
    </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
