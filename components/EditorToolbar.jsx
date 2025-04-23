import React from 'react';
import { FaBold, FaItalic, FaHeading, FaCode, FaListUl, FaLink } from 'react-icons/fa';

const icons = [
  { icon: <FaBold />, label: 'Bold', tag: '**' },
  { icon: <FaItalic />, label: 'Italic', tag: '_' },
  { icon: <FaHeading />, label: 'Heading', tag: '# ' },
  { icon: <FaCode />, label: 'Code', tag: '`' },
  { icon: <FaListUl />, label: 'List', tag: '- ' },
  { icon: <FaLink />, label: 'Link', tag: '[text](url)' },
];

function EditorToolbar({ onFormat }) {
  return (
    <div className="flex justify-end gap-2 p-2">
      {icons.map(({ icon, label, tag }) => (
        <button
          key={label}
          title={label}
          onClick={() => onFormat(tag)}
          className="text-lg p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          {icon}
        </button>
      ))}
    </div>
  );
}

export default EditorToolbar;
