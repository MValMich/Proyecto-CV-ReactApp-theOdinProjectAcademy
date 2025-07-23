import React from 'react';

export function InfoGeneral({ 
  nombre, setNombre, 
  email, setEmail, 
  fono, setFono 
}) {
  const handleNombreChange = (e) => {
    setNombre(e.target.value.replace(/[<>{}()'"&%\-=:#?|]/gi,""));
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value.replace(/[<>{}()'"&%\-=:#?|]/gi,""));
  };

  const handleFonoChange = (e) => {
    setFono(e.target.value.replace(/[<>{}()'"&%\-=:#?|]/gi,""));
  };

// Editar input: Info General
const inputManejarEdicion = () => {
setNombre('') 
setEmail('') 
setFono('') 
}

  return (
    <div>
      <h2>Info General</h2>
      <label>
        <input placeholder='* Nombre completo:' type="text" value={nombre} maxLength={45} onChange={handleNombreChange} required />
      </label>

      <label>
        <input placeholder='* E-mail:' type="email" value={email} maxLength={45} onChange={handleEmailChange} required />
      </label>

      <label>
        <input placeholder='* Fono:' type="tel" value={fono} maxLength={15} onChange={handleFonoChange} required />
      </label>
      
      <button type='button' onClick={inputManejarEdicion}>editar</button>

    </div>
  );
}
