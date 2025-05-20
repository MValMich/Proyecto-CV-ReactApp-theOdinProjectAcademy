
import React from 'react';

export function Educacion({ 
  titulo, setTitulo, 
  institucion, setInstitucion, 
  fechaEstudios, setFechaEstudios 
}) {
  // Manejo Cambio Estado inicial: titulo / institución / fechaEstudios
  const tituloMamejoCambio = (e) => {
    setTitulo(e.target.value.replace(/[&<>"']/gi, ''));
  };

  const institucionManejoCabio = (e) => {
    setInstitucion(e.target.value.replace(/[&<>"']/gi, ''));
  };

  const fechaEstudiosManejoCambio = (e) => {
    setFechaEstudios(e.target.value.replace(/[&<>"']/gi, ''));
  };

// Editar input: Educación
const inputManejarEdicion = () => {
setTitulo('') 
setInstitucion('') 
setFechaEstudios('') 
}

  return (
    <div>
      <h2>Educación</h2>
      <label>
        <input placeholder='* Título:'  type="text" value={titulo} maxLength={45} onChange={tituloMamejoCambio} required />
      </label>

      <label>
        <input placeholder='* Institución:' type="text" value={institucion} maxLength={45} onChange={institucionManejoCabio} required />
      </label>

      <label>
        <input placeholder='* Fecha de estudios:' type="text" value={fechaEstudios} maxLength={45} onChange={fechaEstudiosManejoCambio} required />
      </label>

      <button type='button' onClick={inputManejarEdicion}>editar</button>
    </div>
  );
}