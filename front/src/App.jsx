import { useState, useEffect } from "react";
import axios from "axios";
import Header from './Header';
import NotasLista from './NotasLista';
import Formulario from './Fomulario';

const baseUrl = 'http://localhost:3001/api/notes'//URL base para las solicitudes HTTP

const App = () => {
  //Hooks de estado
  const [newNote, setNewNote] = useState("");//Para gestionar el estado de la nueva nota newNote
  const [notes, setNotes] = useState([]);//Para actualizar el estado de los valores y que REact vuelva a renderizar el componente cuando cambien
  //Se utilizan estos hooks de estado para gestionar el estado global de la aplicación y obtener notas de la bdd así como poder agregarlas
  //Son necesarios para tener una interfaz de usuario dinámica antes las acciones del usuario y a los cambios en los datos

  useEffect(() => {//Para hacer la solicitud y obtener las notas del servidor
    console.log("effect");
    axios.get(baseUrl).then((response) => {//Solicitud GET para traer las notas de la bdd
      setNotes(response.data);//Actualizar el estado de notes con las notas obtenidas
    });
  }, []);//Array de dependencias

  const handleNoteChange = (event) => {//Para manejar cambios en el formulario de la nota
    console.log(event.target.value);
    setNewNote(event.target.value);//Actualizar el estado de newNote con el valor del formulario
  };

  const addNote = (event) => {//Para agregar una nota nueva
    event.preventDefault();
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      date: new Date().toISOString(),  // Formato ISO para compatibilidad con SQL
    };
   
    axios
      .post(baseUrl, noteObject)//Solicitud POST para agregar la nota a la bdd
      .then((response) => {
        console.log(response);
        setNotes(notes.concat(response.data))//Agregar la nueva nota a la lista de notas en el estado
        setNewNote("");//Reestablecer el formulario
      });
  };

  return (
    //Renderizar componentes
    //En el componente NotasLista se le pasa la prop notes que contiene la lista de notas de la bdd. 
    //En el componente Formulario se le pasan tres props, newNote tiene el valor del formulario de la nueva nota, handleNoteChange la función que maneja los cambios y addNote agrega la nota a la bdd.
    <div>
    <Header />
    <NotasLista notes={notes} />
    <Formulario
      newNote={newNote}
      handleNoteChange={handleNoteChange}
      addNote={addNote}
    />
  </div>
  );
};

export default App;