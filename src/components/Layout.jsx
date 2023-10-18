import React from 'react';
import './layout.scss'; 

function Layout({ children }) {
  return (
    <div className="layout">
      {children}
    </div>
  );
}

export default Layout;
