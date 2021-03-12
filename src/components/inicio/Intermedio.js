import React from 'react'

export const Intermedio = () => {
    return (
        <div className="p-4 p-md-5 mb-4 text-white rounded bg-dark" id="intermedio">
            <div className="col-md-6 px-0">
                <h1 className="display-4 fst-italic">Somos</h1>
                <p className="lead my-3">una empresa dedicada a la asesoría legal y de negocios desde hace mucho tiempo,
                comprometidos con la realización de negocios exitosos tanto para vendedores como compradores. </p>
                <div className="collapse" id="collapseExample">
                    <p className="lead my-3">
                    Conocemos acerca de los inconvenientes que el realizar un negocio conlleva, en temas de legalidad, viabilidad
                    y rentabilidad, por lo que ofrecemos un servicio de
                    asesoría de calidad, en el que se garantiza el acometimiento de negocios transparentes con una cobertura de todos los
                    escenarios posibles para propiciar un ambiente de
                    satisfacción en ambas partes (compradores y vendedores).
                    </p>

                </div>
                <p className="lead mb-0">
                    <a data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                    Continuar leyendo...
                    </a>
                </p>
                
            </div>
        </div>
    )
}
