import React from 'react'
import { Link } from 'react-router-dom';


export const Imagecards_2 = ({product}) => {
    const {name,description,url} = product;
    const vinculo = ()=>{
        window.location.href = "https://www.facebook.com/eureka.ageneg"
    }
    console.log(url)
    return (
        <div className="col">
            
            <div className="card shadow-sm">
                    
                    <img src={url} className="img-thumbnail" alt={name} />
                    <div className="card-body">
                    <p className="card-text">{name}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary" onClick={vinculo}>Ver</button>
                        <Link type="button" className="btn btn-sm btn-outline-secondary" to="/contacto"  >Contacto</Link>
                        </div>
                        <small className="text-muted">9 mins</small>
                    </div>
                    </div>
            </div>
        </div>
    )
}

//<svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>