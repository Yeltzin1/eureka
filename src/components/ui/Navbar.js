import React from 'react'
import { Link, NavLink } from 'react-router-dom' 

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark border-bottom border-primary border-3">
            <div className="container-fluid">

            
            <Link 
                className="navbar-brand px-3" 
                to="/inicio"
                >
                <img src="./assets/img/logoeureka3.jpg" width="200" height="30" className="d-inline-block align-top" alt=""/>
            </Link>

            <div className="collapse navbar-collapse ">
                <div className="navbar-nav float-right">

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/inicio"
                        >
                            
                        Inicio
                    </NavLink>
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/contacto"
                        >
                        Contacto
                    </NavLink>
                </div>
            

            <div className="navbar-collapse d-flex">
                <ul className="navbar-nav ml-auto">

                </ul>
            </div>
            {/*
                <form className="d-flex">
                    <input className="form-control me-2" type="search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                    <button className="btn btn-danger mx-1"><i className="fas fa-sign-out-alt"></i></button>
                </form>
            */}
            </div>
        </div>
        </nav>
    )
}
