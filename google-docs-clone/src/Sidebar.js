import React from 'react';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <a href="https://mail.google.com/">Gmail</a>
        </li>
        <li>
          <a href="https://drive.google.com/">Drive</a>
        </li>
        <li>
          <a href="https://calendar.google.com/">Calendar</a>
        </li>
        {/* Add more app links here */}
      </ul>
    </div>
  );
};

export default Sidebar;
