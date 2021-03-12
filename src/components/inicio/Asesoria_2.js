import React from 'react'
import { Link } from 'react-router-dom';

export const Asesoria_2 = ({service}) => {

    const {id,name,description,url}=service;
    
    return (
        <div className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-primary">Opcion {id}</strong>
                <h3 className="mb-0">{name}</h3>
                <div className="mb-1 text-muted">Nov 12</div>
                <p className="card-text mb-auto">{description}</p>
                <Link to="/contacto" >Solicitar</Link>
                </div>
                <div className="col-auto d-none d-lg-block">
                <img className="bd-placeholder-img" width="200" height="250" src={url} role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"/>

                </div>
            </div>
        </div> 
    )
}
