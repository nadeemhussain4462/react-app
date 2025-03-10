import React from "react";

function Header(props) {
  return (
    <header>
      {/* <h1>Welcome to My React App! 🚀</h1> */}
      <h1>{props.title}</h1>
    </header>
  );
}

export default Header;
