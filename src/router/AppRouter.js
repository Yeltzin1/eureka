import React from 'react'
import { Route, Redirect, BrowserRouter as Router, Switch } from 'react-router-dom'
import { Contacto } from '../components/contacto/Contacto'
import { Inicio } from '../components/inicio/Inicio'
import { Footer } from '../components/ui/Footer'
import { Navbar } from '../components/ui/Navbar'

export const AppRouter = () => {
    return (
        <Router>
            <Navbar/>
            <div>
                <Switch>
                    <Route exact path='/inicio' component={Inicio}/>
                    <Route exact path='/contacto' component={Contacto}/>
                    <Redirect to="/inicio"/>
                </Switch>
            </div>
            <hr/>
            <Footer/>
        </Router>
    )
}
