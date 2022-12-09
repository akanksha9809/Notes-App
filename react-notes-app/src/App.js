
import './App.css';
import NotesList from './components/NotesList';
import { useState } from 'react';
import {nanoid} from "nanoid";
import Search from './components/Search';
import Header from './components/Header';


function App() {

  const [notes,setNotes]=useState([
    {
      text:'This is my first note',
      date:'15/02/22',
      id:nanoid(),
    },
    {
      text:'This is my second note',
      date:'15/02/22',
      id:nanoid(),
    },
    {
      text:'This is my third note',
      date:'15/02/22',
      id:nanoid(),
    },
    {
      text:'This is my fourth note',
      date:'15/02/22',
      id:nanoid(),
    },
    
  ]);

  const [searchText,setSearchText]=useState('');
  const [darkMode,setDarkMode]=useState(false);
 
  const addNote = (text) =>{
    const date = new Date();
    const newNote = {
      id:nanoid(),
      text:text,
      date:date.toLocaleDateString()
    }
    const newNotes=[...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id!==id);
    setNotes(newNotes);
  };

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode}/>
        <Search handleSearchNote={setSearchText}/>
        <NotesList 
          notes={notes.filter((note)=>
            note.text.toLocaleLowerCase().includes(searchText))} 
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
          />
          
      </div>
    </div>
  );
}

export default App;
