import React, { useState } from "react";
import "./App.css";
import { Context } from "./Context";
import CreditForm from "./components/CreditForm";

function App() {
  const [entries, setEntries] = useState({});

  const data = {
    entries,
    setEntries,
  };

  return (
    <Context.Provider value={data}>
      <div className='App'>
        <CreditForm />
      </div>
    </Context.Provider>
  );
}

export default App;
