import React, { useContext, useRef } from 'react';
import { MarkDownContext } from '../contex/MarkDownContext';
import EditorToolbar from '../components/EditorToolbar';

function Write() {
  const { activeNote, updateNoteContent } = useContext(MarkDownContext);
  const textareaRef = useRef();

  const formatText = (tag) => {
    const textarea = textareaRef.current;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = activeNote?.content || '';
    const selected = text.slice(start, end);

    let newText;

    if (tag === '[text](url)') {
      newText = text.slice(0, start) + `[${selected || 'text'}](url)` + text.slice(end);
    } else if (text.slice(start - tag.length, end + tag.length) === `${tag}${selected}${tag}`) {
      newText = text.slice(0, start - tag.length) + selected + text.slice(end + tag.length);
    } else {
      newText = text.slice(0, start) + tag + selected + tag + text.slice(end);
    }

    updateNoteContent(newText);

    setTimeout(() => {
      textarea.setSelectionRange(start + tag.length, end + tag.length);
      textarea.focus();
    }, 0);
  };

  return (
    <div className="container">
      <h2 className="text-xl font-semibold mb-2">Write Markdown</h2>
      <EditorToolbar onFormat={formatText} />
      <textarea
        ref={textareaRef}
        value={activeNote?.content || ''}
        onChange={(e) => updateNoteContent(e.target.value)}
        placeholder="Type your markdown here..."
        className="w-full h-[75vh] p-4 border rounded resize-none bg-inherit text-inherit"
      />
    </div>
  );
}

export default Write;
