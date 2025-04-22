import React, { useContext } from 'react';
import { MarkDownContext } from '../contex/MarkDownContext';

function NotesSidebar() {
  const { notes, setActiveNoteId, addNewNote, activeNote } = useContext(MarkDownContext);

  return (
    <div className="sidebar">
      <h3>Your Notes</h3>
      <button onClick={addNewNote}>+ New Note</button>
      <ul>
        {notes.map((note) => (
          <li
            key={note.id}
            onClick={() => setActiveNoteId(note.id)}
            className={note.id === activeNote?.id ? 'active-note' : ''}
          >
            {note.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NotesSidebar;
