import React, { useEffect, useState } from 'react';
import './App.css';
import { Context } from './Context';
import CreditForm from './components/CreditForm';

function App() {

  const [entries, setEntries] = useState({});
  const [results, setResults] = useState({});

  useEffect(() => {
    console.log('kral:', entries);
  }, [entries]);

  const data = {
    entries,
    setEntries,
    results,
    setResults
  };

  return (
    <Context.Provider value={data}>
      <div className="App">
        < CreditForm />
      </div>
    </Context.Provider>
  );
}

export default App;
