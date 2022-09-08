import React from 'react'
import { useContext } from "react";
import { Context } from "../Context";

function Entries() {

  const { theme, setTheme } = useContext(Context);

  return (
    <div>
      <div>Entries</div>
      <div>{theme}</div>
      <button onClick={() => setTheme('dark')}>Dark</button>
      <button onClick={() => setTheme('light')}>Light</button>
    </div>

  )
}

export default Entries