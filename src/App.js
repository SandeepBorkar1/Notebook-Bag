import { useState, useEffect } from 'react';
import './App.css';
import Notecontainer from './components/Notecontainer/Notecontainer';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  const [notes, setNotes] = useState(() => {
    // Load notes from local storage or initialize with an empty array
    const savedNotes = localStorage.getItem('notes');
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  // Use useEffect to save notes to local storage whenever they change
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  // Function to add a new note
  const addNote = (color) => {
    const newNote = {
      id: Date.now(), // Unique ID for each note
      text: '',
      time: Date.now(),
      color
    };
    setNotes(prevNotes => [...prevNotes, newNote]);
  };

  // Function to delete a note
  const deleteNote = (id) => {
    setNotes(prevNotes => prevNotes.filter(note => note.id !== id));
  };

  return (
    <div className="App">
      <Sidebar addNote={addNote} />
      <Notecontainer notes={notes} deletenote={deleteNote} />
    </div>
  );
}

export default App;
