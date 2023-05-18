import React from 'react';
import TextEditor from './TextEditor';
import Toolbar from './Toolbar';
import Sidebar from './Sidebar';

function App() {
  return (
    <div>
      <Toolbar />
      <div className="container">
        <Sidebar />
        <TextEditor />
      </div>
    </div>
  );
}

export default App;
