import React from 'react';
import './Formulario.css'; 

const Formulario = ({ newNote, handleNoteChange, addNote }) => {
  return (
    <div className="formCont">
      <form onSubmit={addNote}>
        <input
          className="notaIn" 
          value={newNote}
          onChange={handleNoteChange}
          placeholder="Escribe aquí tu nueva nota..."
        />
        <button type="submit" className="btn"> 
          Guardar☺
        </button>
      </form>
    </div>
  );
};

export default Formulario;
