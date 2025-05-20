// App.jsx
import './App.css';
import React, { useState } from 'react';
import { InfoGeneral } from './InfoGeneral.jsx';
import { Educacion } from './Educacion.jsx';
import { Experiencia } from './Experiencia.jsx';
import { CVPrevista } from './CVPrevista.jsx';

export function App() {
  // Estados inicial: InfoGeneral / Educacion / Experiencia
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [fono, setFono] = useState('');

  const [titulo, setTitulo] = useState('');
  const [institucion, setInstitucion] = useState('');
  const [fechaEstudios, setFechaEstudios] = useState('');

  const [empresa, setEmpresa] = useState('');
  const [cargo, setCargo] = useState('');
  const [responsabilidad, setResponsabilidad] = useState('');

  return (
    <>
      <h1>Curriculum Vitae</h1>
      
     {/* Nuevos Estados: InfoGeneral / Educacion / Experiencia */}
      <InfoGeneral
        nombre={nombre}
        setNombre={setNombre}
        email={email}
        setEmail={setEmail}
        fono={fono}
        setFono={setFono}
      />
      <Educacion
       titulo={titulo}
        setTitulo={setTitulo}
       institucion={institucion}
        setInstitucion={setInstitucion}
      fechaEstudios={fechaEstudios}
        setFechaEstudios={setFechaEstudios}
      />
      <Experiencia
       empresa={empresa}
        setEmpresa={setEmpresa}
       cargo={cargo}
        setCargo={setCargo}
      responsabilidad={responsabilidad}
        setResponsabilidad={setResponsabilidad}
      />

     <CVPrevista
  nombre={nombre}
  email={email}
  fono={fono}

  titulo={titulo}
  institucion={institucion}
  fechaEstudios={fechaEstudios}

  empresa={empresa}
  cargo={cargo}
  responsabilidad={responsabilidad}
/>
    </>
  );
}
