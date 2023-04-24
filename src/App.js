import './App.css';
import NoteArea from './components/NoteArea';
import Header from "./components/Header";
import React, {useState} from 'react';


function App() {

  const [notes, setNotes] = useState([]);

  function addNote(newNote){
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
    console.log(notes);
  }

  return (
    <div className="App">
      <Header />
      <NoteArea onAdd={addNote}/>
    </div>
  ); 
}

export default App;
