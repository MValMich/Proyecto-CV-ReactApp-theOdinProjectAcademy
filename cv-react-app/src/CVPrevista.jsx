
import React from 'react';

export function CVPrevista({ 
  nombre, email, fono, 
  titulo, institucion, fechaEstudios,
  empresa, cargo, responsabilidad,
}) {
  console.log('Props recibidos en CVPrevista:', {
    nombre, email, fono, 
    titulo, institucion, fechaEstudios,
    empresa, cargo, responsabilidad
  });
  return (
    < >
    <div id='CVcontainer'>
      <h1>Vista previa</h1>
      <div>
        <h2>Información General</h2>
        <p translate='no'> 👤 {nombre}</p>
        <p translate='no'> 📧 {email}</p>
        <p translate='no'> 📞 {fono}</p>

        <h2>Educación</h2>
        <p translate='no'> 🎓 {titulo}</p>
        <p translate='no'> 🏛 {institucion}</p>
        <p translate='no'> 📆 {fechaEstudios}</p>

        <h2>Experiencia</h2>
        <p translate='no'> 💼 {empresa}</p>
        <p translate='no'> 👷🏼‍♂️ {cargo}</p>
        <p translate='no'> 🛠 {responsabilidad}</p>
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

