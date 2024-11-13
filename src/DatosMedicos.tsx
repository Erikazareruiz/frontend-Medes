import React, { useState } from 'react';

const DatosMedicos= () => {
  const [dni, setDNI] = useState('');
  const [name, setName] = useState('');
  const [apellidoP, setApellidoP] = useState('');
  const [fecha, setfecha] = useState('');
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [tension, setTension] = useState(''); 
  const [message, setMessage] = useState('');


  const handleSubmit = (e:any) => {
    e.preventDefault();

    if ( !dni|| !name || !apellidoP || !fecha || !altura || !peso || !tension) {
      setMessage('Por favor, complete todos los campos.');
      return;
    }

    // Aquí agregarías la lógica para enviar los datos a una API o guardarlos en una base de datos
    console.log('Datos del paciente:', { dni, name,apellidoP, fecha, altura, peso, tension});
    setMessage('¡Registro completado con éxito!');
    
    // Limpiar el formulario después de guardar los datos
    setDNI('');
    setName('');
    setApellidoP('');
    setfecha('');
    setAltura('');
    setPeso('');
    setTension('')
  };

  return (
    <div className="registration-container">
      <h2>DATOS MEDICOS</h2>
      <form onSubmit={handleSubmit} className="form-grid">
      <div>
          <label htmlFor="dni">DNI: </label>
          <input
            type="dni"
            id="dni"
            placeholder="Número de DNI"
            value={dni}
            onChange={(e) => setDNI(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="name">Nombre: </label>
          <input
            type="text"
            id="name"
            placeholder="Nombre del paciente"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="apellidoP">Apellido Paterno: </label>
          <input
            type="text"
            id="apellidoP"
            placeholder="Ingresar Apellido"
            value={apellidoP}
            onChange={(e) => setApellidoP(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="fecha">Fecha:  </label>
          <input
            type="fecha"
            id="fecha"
            placeholder="Ingresar fecha"
            value={fecha}
            onChange={(e) => setfecha(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="altura">Altura: </label>
          <input
            type="altura"
            id="altura"
            placeholder="Altura del paciente"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
          />
        </div>
        
        <div>
          <label htmlFor="peso">Peso: </label>
          <input
            type="peso"
            id="peso"
            placeholder="Peso del Paciente"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="tension">Tension: </label>
          <input
            type="tension"
            id="tension"
            placeholder="Tension del Paciente"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
          />
        </div>
        
        {message && <div className="message">{message}</div>}
        <button type="submit" className="submit-button">Registrar Datos del Paciente</button>
      </form>
    </div>
  );
  
};

export default DatosMedicos;
