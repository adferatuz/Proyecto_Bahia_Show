import { useState } from 'react'
import { BrowserRouter, Routes, Route, } from "react-router-dom"
import Navbar from "../src/components/aplicacion/servicios/navbar"
import './App.css'
import Contactenos from './components/aplicacion/servicios/contactenos'
import Galeria from './components/aplicacion/servicios/galeria'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
        <BrowserRouter>
            <Navbar />
            <div className='contenedor'>
              <Routes>
                <Route path="/Galeria" element ={<Galeria/>}></Route>
                <Route path="/Contactenos" element ={<Contactenos/>}></Route>
              </Routes>
                <footer>
                  <div>
                    
                  </div>
                  <div>  
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#273036" fillOpacity="1" d="M0,96L20,128C40,160,80,224,120,224C160,224,200,160,240,160C280,160,320,224,360,250.7C400,277,440,267,480,234.7C520,203,560,149,600,138.7C640,128,680,160,720,170.7C760,181,800,171,840,144C880,117,920,75,960,53.3C1000,32,1040,32,1080,42.7C1120,53,1160,75,1200,96C1240,117,1280,139,1320,144C1360,149,1400,139,1420,133.3L1440,128L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"></path></svg>
                  </div>
              </footer>
            </div>
            
        </BrowserRouter>
    </>
    
  
  )
}

export default App
