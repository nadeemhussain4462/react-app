import React, { useState } from "react";
import Message from "./Message";
import Header from "./Header";
import Footer from "./Footer";
import EventButton from "./components/EventButton";
import ChangeText from "./components/ChangeText";
import Counter from "./components/counter";
import ToggleButton from "./components/ToggleMode";
function App() {
  return (
    <div>
      {/* <h1>Hello, React! 🎉</h1>
      <Message />   */}

      <Header title="React Learning Hub 🚀" />
      <h2>Learning React is Fun! 🎉</h2>

      {/* <Footer text="React Learning Hub 🚀" /> */}
      <h2>Made by Nadeem Hussain</h2>
      {/* <Footer text="All Rights Reserved 2025" /> */}
      {/* <EventButton />
      <ChangeText /> */}
      {/* <Counter /> */}
      <ToggleButton />
    </div>
  );
}

export default App;
