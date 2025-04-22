import React, { createContext, useState } from 'react';

export const MarkDownContext = createContext();

export function MarkDownProvider({ children }) {
  const [notes, setNotes] = useState([
    { id: 1, title: 'Note 1', content: '' },
  ]);

  const [activeNoteId, setActiveNoteId] = useState(1);

  const updateNoteContent = (content) => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === activeNoteId ? { ...note, content } : note
      )
    );
  };

  const addNewNote = () => {
    const newId = Date.now();
    const newNote = {
      id: newId,
      title: `Note ${notes.length + 1}`,
      content: '',
    };
    setNotes((prev) => [...prev, newNote]);
    setActiveNoteId(newId);
  };

  const activeNote = notes.find((note) => note.id === activeNoteId);

  return (
    <MarkDownContext.Provider
      value={{
        notes,
        activeNote,
        updateNoteContent,
        addNewNote,
        setActiveNoteId,
      }}
    >
      {children}
    </MarkDownContext.Provider>
  );
}
