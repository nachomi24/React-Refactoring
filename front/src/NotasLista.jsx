import React from 'react';

const NotasLista = ({ notes }) => {
  return (
    <div>
      <ul style={{ listStyle: 'none', padding: '0', fontFamily: 'Arial, sans-serif', textAlign: 'center', fontSize: '2em', color: '#bc008a' }}>
        {notes.map((note) => (
          <li key={note.id} style={{ backgroundColor: '#ffc5de', padding: '10px', marginBottom: '10px', borderRadius: '5px', boxShadow: '2px 2px 5px rgba(134, 0, 90, 0.59)' }}>
            {note.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotasLista;
