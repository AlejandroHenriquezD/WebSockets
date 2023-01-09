import React from "react";
import "./Layout.css";

function Layout({ children }) {
  return (
    <div id="layout-container">
      <h1>Using Websockets with React & NodeJS</h1>
      <h2>An Example to ask for help and give help in a classroom</h2>
      <div id="layout-children">
        {children}
      </div>
    </div>
  );
}

export default Layout;