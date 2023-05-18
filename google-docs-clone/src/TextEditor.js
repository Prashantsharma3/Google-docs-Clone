import React, { useState } from 'react';

const TextEditor = () => {
  const [content, setContent] = useState('');

  const handleInputChange = (event) => {
    setContent(event.target.value);
  };

  return (
    <div className="text-editor">
      <textarea
        className="editor-area"
        value={content}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default TextEditor;
