import React, { useEffect, useState } from 'react';
import './App.css';
import { Context } from './Context';
import Entries from './components/Entries';
import CreditForm from './components/CreditForm';
import Try from './components/Try';

function App() {

  const [theme, setTheme] = useState('light');
  const [entries, setEntries] = useState({});
  const [results, setResults] = useState({});

  useEffect(() => {
    console.log('kral:', entries);
  }, [entries]);

  const data = {
    theme,
    setTheme,
    entries,
    setEntries,
    results,
    setResults
  };

  return (
    <Context.Provider value={data}>
      <div className="App">
        {/* < Try /> */}
        <Entries />
        < CreditForm />
      </div>
    </Context.Provider>
  );
}

export default App;
