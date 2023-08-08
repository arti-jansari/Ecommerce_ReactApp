import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import "../components/main.css"

const Navbar = () => {
   
    
    const state = useSelector(state => state.handleCart)
    const handleswitch = ()=>{
        let element = document.body;
        element.classList.toggle("dark");
    }
    return (
        <nav className="navbar navbar-expand-lg  py-3 sticky-top">
            <div className="container">
                <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/"> Arti</NavLink>
                <button className="navbar-toggler mx-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto my-2 text-center">
                        <li className="nav-item">
                            <NavLink className="nav-link fw-bold " to="/">Home </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link fw-bold " to="/product">Products</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link fw-bold " to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link fw-bold " to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                    <div className="buttons text-center">
                        <NavLink to="/login" className="m-2"><i className="fa fa-sign-in-alt mr-1"></i> Login</NavLink>
                        <NavLink to="/register" className=" m-2"><i className="fa fa-user-plus mr-1"></i> Register</NavLink>
                        <NavLink to="/cart" className="m-2"><i className="fa fa-cart-shopping mr-1"></i> Cart ({state.length}) </NavLink>
                        <button onclick={handleswitch}>Switch mode</button>
                    </div>
                </div>


            </div>
        </nav>
    )
}

export default Navbar