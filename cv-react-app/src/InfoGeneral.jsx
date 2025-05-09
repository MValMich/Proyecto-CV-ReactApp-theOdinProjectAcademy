import './App.css'
import React, { Children } from 'react'
import { useState } from 'react'

// export const [nomberCompleto, setNombreCompleto] = useState('')
export function InfoGeneral() {
const [nomberCompleto, setNombreCompleto] = useState('')
function controlNombreCompleto(e) {
    setNombreCompleto(e.target.value)
}
    const [email, setEmail] = useState('')
function controlEmail(e) {
    setEmail(e.target.value)
}
    const [fono, setFono] = useState('')
function controlFono(e) {
    setFono(e.target.value)
}

    return (
        <>
        <h2>Info General</h2>
       <form >
        <input
        placeholder='Nombre Completo: '
        value={nomberCompleto.replace(/[&<>"']/gi,'')}
        onChange={controlNombreCompleto}
        />
        <input
        placeholder='Email: '
        value={email.replace(/[&<>"']/gi,'')}
        onChange={controlEmail}
        />
        <input
        placeholder='Fono: '
        value={fono.replace(/[&<>"']/gi,'')}
        onChange={controlFono}
        />
<button onClick={()=>{
nomberCompleto = ''
email = ''
fono = ''
}}>editar</button>

       </form>
        </>
    )
}

