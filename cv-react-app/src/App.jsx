import './App.css'

import { idEmail} from './componentes/InfoGeneral'
import {SendButton} from './componentes/CVPrevista'

import { useState } from 'react'
export function App () {

    const [nombreCompleto, setNombreCompleto] = useState('')
function controlNombreCompleto(e){
    setNombreCompleto(e.target.value)
}

 return (
    <>
    <h1>Curriculum Vitae  </h1>
    <form onSubmit={e=>e.preventDefault()} >
        <section id='section-1'>
            <h2>Info General</h2>
        <input placeholder='Nombre completo: 'id='idNombre' className='inp-Section-1'
        value={nombreCompleto.replace(/[&<>"']/gi,'')}
        onChange={controlNombreCompleto}
        />
        <input placeholder='Email: ' id='idEmail' className='inp-Section-1' 
        // value={idEmail}
        onChange={idEmail}
        />
        <input placeholder='Fono: ' id='idFono' className='inp-Section-1' 
        />
       
        
        </section>
        <section>
            <h2>Educación</h2>
        <input placeholder='Nombre completo: ' />
        <input placeholder='Fono: ' />
        <input placeholder='Email: ' />
        </section>
        <section>
            <h2>Experiencia</h2>
        <input placeholder='Nombre completo: ' />
        <input placeholder='Fono: ' />
        <input placeholder='Email: ' />
        </section>
        <button onClick={SendButton
        }>Enviar</button>
    </form>
    <div id='container'></div>
    </>
 )
}


