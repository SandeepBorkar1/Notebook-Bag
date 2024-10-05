import React, { useEffect, useState } from 'react';
import './Note.css';
import deleteimg from '../../images/deleteimg.png';

function Note({ note, deletenote }) {
  const [text, setText] = useState(note.text); // Initialize state for note text

  // Update local state whenever the note prop changes
  useEffect(() => {
    setText(note.text);
  }, [note.text]);

  // Effect to update the note text in local storage whenever it changes
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    const updatedNotes = savedNotes.map(n => 
      n.id === note.id ? { ...n, text } : n
    );
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
  }, [text, note.id]);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className='note' style={{ color: note.color }}>
      <input 
        type="text" 
        value={text} 
        onChange={handleTextChange} 
        placeholder="Type your note here..." 
        className="note-input" 
      />
      <p>{new Date(note.time).toLocaleString()}</p>
      <img 
        src={deleteimg} 
        alt='deleteimg' 
        className='delete-icon' 
        onClick={() => deletenote(note.id)} 
      />
    </div>
  );
}

export default Note;
