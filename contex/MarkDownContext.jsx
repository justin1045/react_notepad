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

  const deleteNote = (id) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
    if (id === activeNoteId && notes.length > 1) {
      const remaining = notes.find((note) => note.id !== id);
      setActiveNoteId(remaining.id);
    }
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
        deleteNote
      }}
    >
      {children}
    </MarkDownContext.Provider>
  );
}
