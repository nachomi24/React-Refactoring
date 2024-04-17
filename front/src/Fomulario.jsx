import React from 'react';

const Formulario = ({ newNote, handleNoteChange, addNote }) => {
  return (
    <div style={{textAlign: 'center', fontFamily: 'Arial, sans-serif'}}>
      <form onSubmit={addNote}>
        <input style={{
          backgroundColor: '#f0f0f0', padding: '15px', border: 'none', borderRadius: '5px',
          marginBottom: '20px', width: '80%', maxWidth: '400px', boxSizing: 'border-box', fontSize: '1.2em'
          }}
          className="notaIn" 
          //Utiliza el estado interno de newNote
          value={newNote}
          //Maneja cambios en el formulario actualizando el estado de las notas
          onChange={handleNoteChange}
          placeholder="Escribe aquí tu nueva nota..."
        />
        <button type="submit" style={{backgroundColor: '#ff00bb', color:'white', padding:'15px 30px',
      border: 'none', borderRadius:'5px', cursor: 'pointer', transition: 'background-coor 0.3s ease', fontSize: '1.2em'}}> 
          Guardar☺
        </button>
      </form>
    </div>
  );
};
//En este componente el estado de newNote se usa para mantener el valor del formulario de entrada donde el usuario escribe su nueva nota
//Cuando el usuario escribe en el formulario el estado de newNote se actualiza dinamicamente con la función setNewNote
//El hook es entonces lo que permite que lo que se escribe en este formulario refleje de manera precisa y en tiempo real lo que el usaurio está escribiendo

export default Formulario;
