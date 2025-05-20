// import './App.css'
import React from 'react';

export function Experiencia({ 
  empresa, setEmpresa, 
  cargo, setCargo, 
  responsabilidad, setResponsabilidad 
}) {
// Manejo Cambio Estado inicial: empresa / cargo / responsabilidad
  const empresaMamejoCambio = (e) => {
    setEmpresa(e.target.value.replace(/[&<>"']/gi, ''));
  };

  const cargoManejoCabio = (e) => {
    setCargo(e.target.value.replace(/[&<>"']/gi, ''));
  };

  const responsabilidadManejoCambio = (e) => {
    setResponsabilidad(e.target.value.replace(/[&<>"']/gi, ''));
  };

// Editar input: Educación
const inputManejarEdicion = () => {
setEmpresa('') 
setCargo('') 
setResponsabilidad('') 
}

  return (
    <div>
      <h2>Experiencia</h2>
      <label>
        <input placeholder='* Empresa:' type="text" value={empresa} maxLength={45} onChange={empresaMamejoCambio} required />
      </label>

      <label>
        <input placeholder='* Cargo:' type="text" value={cargo} maxLength={45} onChange={cargoManejoCabio} required />
      </label>

      <label>
        <textarea placeholder='* Principales responsabilidades:'  value={responsabilidad} maxLength={100} onChange={responsabilidadManejoCambio} required />
      </label>

      <button type='button' onClick={inputManejarEdicion}>editar</button>
    </div>
  );
}



