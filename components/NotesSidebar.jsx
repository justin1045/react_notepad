import React, { useContext } from 'react';
import { MarkDownContext } from '../contex/MarkDownContext';
import { FaTrashAlt } from 'react-icons/fa';

function NotesSidebar() {
  const { notes, setActiveNoteId, addNewNote, activeNote, deleteNote } = useContext(MarkDownContext);

  return (
    <div className="sidebar p-4 border-r w-64 bg-white shadow-md">
      <h3 className="text-lg font-semibold mb-4">Your Notes</h3>
      <button
        onClick={addNewNote}
        className="mb-4 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-all duration-200 w-full"
      >
        + New Note
      </button>
      <ul className="space-y-3">
        {notes.map((note) => (
          <li
            key={note.id}
            className={`bg-gray-100 px-3 py-2 rounded hover:bg-gray-200 cursor-pointer ${
              note.id === activeNote?.id ? 'bg-blue-100 font-bold' : ''
            }`}
          >
            {/* Wrapper div with flexbox */}
            <div className="flex items-center justify-between">
              {/* Note Title */}
              <div
                onClick={() => setActiveNoteId(note.id)}
                className="flex-grow text-sm truncate"
              >
                {note.title}
              </div>

              {/* Delete Button */}
              <button
                onClick={() => deleteNote(note.id)}
                className="text-red-500 hover:text-red-700"
                title="Delete note"
              >
                <FaTrashAlt size={14} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NotesSidebar;
