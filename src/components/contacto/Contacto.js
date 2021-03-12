import React from 'react'
import './contacto.css'

export const Contacto = () => {
    return (
        <>
            <div className="container-fluid contacto">
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-6">
                        <h2>Habla con nosotros</h2>
                        <h4>Teléfono</h4>      
                        <p>+502-5480 6985</p>
                        <a className="btn btn-outline-dark btn-lg" href="tel:+50254806985">Llamar ahora</a>
                    </div>
                    <div className="col-sm-4">
                        <span className="glyphicon glyphicon-signal logo"><i className="fas fa-phone"></i></span>
                    </div>
                </div>
            </div>

            <div className="container-fluid bg-grey contacto">
                <div className="row">
                    <div className="col-sm-2">
                        
                    </div>
                    <div className="col-sm-4">
                        <span className="glyphicon glyphicon-globe logo"><i className="fab fa-whatsapp"></i></span>
                    </div>
                    <div className="col-sm-6">
                        <h2>Escribenos</h2>
                        <h4>WhatsApp</h4>      
                        <p>+502-5480 6985</p>
                        <a className="btn btn-outline-dark btn-lg" href="https://api.whatsapp.com/send?phone=50247172890&text=Quiero%20mas%20informaci%C3%B3n%20acerca%20de%20Eureka%20Negocios">
                            Chatear
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
