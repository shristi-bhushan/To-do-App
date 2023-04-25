import './App.css';
import NoteArea from './components/NoteArea';
import Header from "./components/Header";
import React, {useState} from 'react';
import NewNote from './components/NewNote';
import Footer from './components/Footer';


function App() {

  const [notes, setNotes] = useState([]);

  function addNote(newNote){
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
    console.log(notes);
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index!==id;
      });
    });
  }

  return (
    <div className="App">
      <Header />
      <NoteArea onAdd={addNote}/>
      {notes.map( (noteItem, index) => {
        return (
             <NewNote 
                key = {index}
                id = {index}
                title={noteItem.title}
                content={noteItem.content}
                onDelete={deleteNote}
        />
        );
      } )}
      <Footer />
      
    </div>
  ); 
}

export default App;
