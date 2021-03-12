import React from 'react'
import {services} from '../../data/products' 
import { Asesoria_2 } from './Asesoria_2';

export const Asesoria = () => {

    return (
        <div className="row mb-2">
            {
            services.map(service=>{
                return <Asesoria_2 service={service} key={service.id} />
            })
            
            }
        </div>
    )
}
