import React from 'react';

const NotasLista = ({ notes }) => {//Recibe el props notes que conteine el array de objetos que representan las notas
  return (
    <div>
      <ul style={{ listStyle: 'none', padding: '0', fontFamily: 'Arial, sans-serif', textAlign: 'center', fontSize: '2em', color: '#bc008a' }}>
        {notes.map((note) => (//Mapea sobre el array de notas y renderiza un elemento de lista para cada nota
          <li key={note.id} style={{ backgroundColor: '#ffc5de', padding: '10px', marginBottom: '10px', borderRadius: '5px', boxShadow: '2px 2px 5px rgba(134, 0, 90, 0.59)' }}>
            {note.content}
          </li>
        ))}
      </ul>
    </div>
  );
};
//Aquí tienen efecto lo hooks porque en este componente, el estado de notes se usa para renderizar dinámicamente la lista de notas. 
//Entonces cada vez que el esado de notes cambie el componente se volverá a renderizar 
//Así el hook es lo que asegura que la interfaz siempre muestre la información más reciente de las notas
export default NotasLista;
