import React, { useContext } from 'react';
import { MarkDownContext } from '../contex/MarkDownContext';

function Write() {
  const { activeNote, updateNoteContent } = useContext(MarkDownContext);

  return (
    <div className="container">
      <h2>Write Markdown</h2>
      <textarea
        value={activeNote?.content || ''}
        onChange={(e) => updateNoteContent(e.target.value)}
        placeholder="Type your markdown here..."
      />
    </div>
  );
}

export default Write;