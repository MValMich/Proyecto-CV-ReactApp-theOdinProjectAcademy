import './App.css'
import { useState } from 'react'
import React from 'react'

export function Educacion () {

const [titulo, setTitulo] = useState('')
function controlTitulo(e) {
    setTitulo(e.target.value.replace(/[&<>"']/gi, ''))
}
const [institucion, setInstitucion] = useState('')
function controlInstitucion(e) {
    setInstitucion(e.target.value.replace(/[&<>"']/gi, ''))
}
const [fechaEstudios, setFechaEstudios] = useState('')
function controlFechaEstudios(e) {
    setFechaEstudios(e.target.value.replace(/[&<>"']/gi, ''))
}

    return( 
  <>
     <h2>Experiencia</h2>
       <form >
        <input
        placeholder='Título: '
        value={titulo.replace(/[&<>"']/gi,'')}
        onChange={controlTitulo}
        />
        <input
        placeholder='Institución: '
        value={institucion.replace(/[&<>"']/gi,'')}
        onChange={controlInstitucion}
        />
        <input
        placeholder='Fecha desde/hasta: '
        value={fechaEstudios.replace(/[&<>"']/gi,'')}
        onChange={controlFechaEstudios}
        />
<button onClick={()=>{
titulo = ''
institucion = ''
fechaEstudios = ''
}}>editar</button>

       </form>
    </>
    )
  }
