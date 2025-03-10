import React from "react";
import Message from "./Message";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <div>
      {/* <h1>Hello, React! 🎉</h1>
      <Message />   */}

      <Header title="React Learning Hub 🚀" />
      <h2>Learning React is Fun! 🎉</h2>

      <Footer text="React Learning Hub 🚀" />
      <h2>Made by Nadeem Hussain</h2>
      <Footer text="All Rights Reserved 2025" />
    </div>
  );
}

export default App;
