import './App.css'
import{useState} from 'react'
import React from 'react'


export function Experiencia () {

const [empresa, setEmpresa] = useState('')
function controlEmpresa(e) {
    setEmpresa(e.target.value.replace(/[&<>"']/gi, ''))
}
const [cargo, setCargo] = useState('')
function controlCargo(e) {
    setCargo(e.target.value.replace(/[&<>"']/gi, ''))
}
const [responsabilidad, setResponsabilidad] = useState('')
function controlResponsabilidad(e) {
    setResponsabilidad(e.target.value.replace(/[&<>"']/gi, ''))
}

    return( 
  <>
     <h2>Experiencia</h2>
       <form >
        <input
        placeholder='Empresa: '
        value={empresa.replace(/[&<>"']/gi,'')}
        onChange={controlEmpresa}
        />
        <input
        placeholder='Cargo: '
        value={cargo.replace(/[&<>"']/gi,'')}
        onChange={controlCargo}
        />
        <input
        placeholder='Responsabilidades: '
        value={responsabilidad.replace(/[&<>"']/gi,'')}
        onChange={controlResponsabilidad}
        />
<button onClick={()=>{
empresa = ''
cargo = ''
responsabilidad = ''
}}>editar</button>

       </form>
    </>
    )
  }