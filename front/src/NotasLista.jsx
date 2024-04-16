import React from 'react';
import './NotasLista.css'; 

const NotasLista = ({ notes }) => {
  return (
    <div>
      <ul className="listaNotas"> 
        {notes.map((note) => (
          <li key={note.id} className="notaCont">
            {note.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotasLista;
