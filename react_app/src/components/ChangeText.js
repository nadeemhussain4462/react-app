import React, { useState } from "react";

function ChangeText() {
  const [text, setText] = useState("Hello, World! 🌍");

  function changeText() {
    setText("Text Changed! 🚀");
  }
  return (
    <div>
      <h1>{text}</h1>
      <button onClick={changeText}>change text</button>
    </div>
  );
}

export default ChangeText;