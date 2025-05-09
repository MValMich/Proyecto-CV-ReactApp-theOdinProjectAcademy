import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import {App} from './App.jsx'
import {App2} from './App2.jsx'
import {InfoGeneral} from './InfoGeneral.jsx'
import {Educacion} from './Educacion.jsx'
import {Experiencia } from './Experiencia.jsx'
import {CVPrevista } from './CVPrevista.jsx'
// import {CVPevista} from './CVPrevista.jsx'
// import {InfoGeneral} from '../infoGeneral.js'
// import {Educacion} from '../Educacion.js'
// import {Experiencia} from '../Experiencia.js'
// import {CVPrevista} from '../CVPrevista.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <App2 />
    <InfoGeneral />
    <Educacion />
    <Experiencia />
    <CVPrevista />
    {/* <App /> */}

    {/* <Experiencia /> */}
    {/* <CVPrevista /> */}

  </StrictMode>,
)