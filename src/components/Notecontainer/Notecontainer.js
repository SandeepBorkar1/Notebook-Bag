import React from 'react';
import Note from '../Note/Note';
import './Notecontainer.css';

function Notecontainer({ notes, deletenote }) {
  return (
    <div className='Notecontainer'>
      <h3>Notes</h3>
      {
        notes.map((item) => (
          <Note
            key={item.id} // Use unique ID as the key
            note={item}
            deletenote={deletenote}
          />
        ))
      }
    </div>
  );
}

export default Notecontainer;
