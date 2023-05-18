import React, { useState } from 'react';

const Toolbar = () => {
  const [documentName, setDocumentName] = useState('');
  const [selectedFormatting, setSelectedFormatting] = useState('');

  const handleDocumentNameChange = (event) => {
    setDocumentName(event.target.value);
  };

  const handleFormattingOptionClick = (option) => {
    setSelectedFormatting(option);
  };

  const handleShareButtonClick = () => {
    // Handle share functionality
  };

  return (
    <div className="toolbar">
      <input
        type="text"
        placeholder="Untitled Document"
        value={documentName}
        onChange={handleDocumentNameChange}
      />

      <div className="formatting-options">
        <button
          className={selectedFormatting === 'bold' ? 'active' : ''}
          onClick={() => handleFormattingOptionClick('bold')}
        >
          Bold
        </button>
        <button
          className={selectedFormatting === 'italic' ? 'active' : ''}
          onClick={() => handleFormattingOptionClick('italic')}
        >
          Italic
        </button>
        <button
          className={selectedFormatting === 'underline' ? 'active' : ''}
          onClick={() => handleFormattingOptionClick('underline')}
        >
          Underline
        </button>
      </div>

      <button className="share-button" onClick={handleShareButtonClick}>
        Share
      </button>
    </div>
  );
};

export default Toolbar;
