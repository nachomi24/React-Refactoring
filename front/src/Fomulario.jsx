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
          value={newNote}
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

export default Formulario;
