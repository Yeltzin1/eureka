import React from 'react'
import { Asesoria } from './Asesoria'
import { Imagecards } from './Imagecards'
import './Inicio.css'
import { Intermedio } from './Intermedio'
import { Portada } from './Portada'

export const Inicio = () => {
    return (
      <>
        <Portada/>
        <div className="container">
        <Imagecards/>
        </div>
        <Intermedio/>
        <div className="container">
        <Asesoria/>
        </div>
      </>
    )
}
