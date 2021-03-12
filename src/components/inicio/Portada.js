import React from 'react'
import {Link} from 'react-router-dom' 

export const Portada = () => {
    return (
        <section className="py-5 text-center bg-light sec1" name="sec1">
            <div className="row py-lg-5">
              <div className="col-lg-6 col-md-8 mx-auto">
                <h1 className="fw-light">Eureka!</h1>
                <p className="text-muted ">Por fin lo encontré</p>
                <p className="lead blockquote textc">Somos tu socio y asesor en compra-venta de todo tipo de bienes en Guatemala, 
                si tienes algo para vender o que necesites comprar, nosotros tenemos a la persona interesada.</p>
                <p className="">
                  <Link href="#" className="btn btn-primary mx-1" to="/contacto">Contacto</Link>
                  <a href="#" className="btn btn-secondary mx-1" href="#intermedio">Información</a>
                </p>
              </div>
            </div>
        </section>
    )
}
