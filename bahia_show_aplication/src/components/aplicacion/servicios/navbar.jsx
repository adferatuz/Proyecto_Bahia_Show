import { NavLink } from "react-router-dom"
import { useEffect, useState } from "react"
import '../servicios/css/navbar.css'


const Navbar = ({}) => {

    const [mostrar,setMostrar] = useState(false)
    const handleClick = () => {
       setMostrar(true) 
    }

    return (
        <>
        <nav className="navbar navbar-expand-lg bg-light navbar-dark bg-dark navbar-nav parent" >
            <div className="container-fluid">
                <nav className="navbar  navbar-dark bg-dark parent titulo">
                    <div className="container px-5 span1 ">    
                            <span  className="navbar-brand"><h1 >Bahia Show Orquesta!!</h1></span>    
                    </div>
                </nav>
                <div id="navbar-nav">
                    <ul className="navbar-nav">
                    
                    <li className="nav-item">
                            <NavLink
                                style={({ isActive }) => ({ color: isActive ? 'red' : 'white' })}
                                className="nav-link btn btn-ligth"
                                to="/PaginaPrincipal">PaginaPrincipal</NavLink>
                        </li>
                        
                        
                        <li className="nav-item">
                            <NavLink
                                style={({ isActive }) => ({ color: isActive ? 'red' : 'white' })}
                                className="nav-link btn btn-ligth"
                                to="/Eventos">Eventos</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                style={({ isActive }) => ({ color: isActive ? 'red' : 'white' })}
                                className="nav-link btn btn-ligth"
                                to="/Galeria">Galeria</NavLink>
                        </li>
                       
                        <li className="nav-item">
                            <NavLink
                                style={({ isActive }) => ({ color: isActive ? 'red' : 'white' })}
                                className="nav-link btn btn-ligth"
                                to="Contactenos" onClick={handleClick}>Contactenos</NavLink>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
        
    </>
    )
}

export default Navbar