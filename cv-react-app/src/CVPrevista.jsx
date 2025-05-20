
import React from 'react';

export function CVPrevista({ 
  nombre, email, fono, 
  titulo, institucion, fechaEstudios,
  empresa, cargo, responsabilidad,
 }) {
  return (
    < >
    <div id='CVcontainer'>
      <h1>Vista previa</h1>
      <div>
        <h2>Información General</h2>
        <p> 👤 {nombre}</p>
        <p> 📧 {email}</p>
        <p> 📞 {fono}</p>

        <h2>Educación</h2>
        <p> 🎓 {titulo}</p>
        <p> 🏛 {institucion}</p>
        <p> 📆 {fechaEstudios}</p>

        <h2>Experiencia</h2>
        <p> 💼 {empresa}</p>
        <p> 👷🏼‍♂️ {cargo}</p>
        <p> 🛠 {responsabilidad}</p>
      </div>

<button type='submit'
        onClick={(e) => {
          e.preventDefault()
          
// Validación: si alguno está vacío
    if (
      !nombre.trim() || 
      !email.trim() || 
      !fono.trim() ||
      !titulo.trim() ||
      !institucion.trim() ||
      !fechaEstudios.trim() ||
      !empresa.trim() ||
      !cargo.trim() ||
      !responsabilidad.trim()
    ) {
      alert('⚠️ No has rellenado todos los campos.');
      return; // detener el proceso
    }
    
      alert ('TU CV FUE ENVIADO !!!') 
    
    console.log(` 
          ✅ Datos enviados:

          👤 ${nombre}
          📧 ${email}
          📞 ${fono}

          🎓 ${titulo}
          🏛  ${institucion} 
          📆  ${fechaEstudios}

          💼 ${empresa} 
          👷🏼‍♂️ ${cargo}
          🛠 ${responsabilidad}
        `); 
        }}
      style={{backgroundColor: 'green'}}
      >
        ENVIAR
      </button>
      </div>
    </>
  );
}
