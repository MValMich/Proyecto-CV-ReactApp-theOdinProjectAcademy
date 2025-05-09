import './App.css'
import React from 'react'
import { InfoGeneral} from './InfoGeneral'
import { Educacion } from './Educacion'
import { Experiencia } from './Experiencia'
import { CVPrevista} from './CVPrevista'


export function App2() {
return(
<>
 <h1>Curriculum Vitae</h1> 
 <form>
    {InfoGeneral}
    {Educacion}
    {Experiencia}
    {CVPrevista}
 </form>
</>

)

}

