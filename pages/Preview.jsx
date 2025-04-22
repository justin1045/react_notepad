import React, { useContext } from 'react';
import { MarkDownContext } from '../contex/MarkDownContext';
import ReactMarkdown from 'react-markdown';

function Preview() {
  const { activeNote } = useContext(MarkDownContext);

  return (
    <div className="container">
      <h2 style={{ fontSize: '28px', fontWeight: '600', marginBottom: '16px' }}>📝 Notes Preview</h2>
      <div className="results">
        <ReactMarkdown>{activeNote?.content || ''}</ReactMarkdown>
      </div>
    </div>
  );
}

export default Preview;