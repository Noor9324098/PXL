import { useState } from 'react'
import './App.css'

function App() { //This is a component, components start with a capital letter

  return (
    <>
      <Text display ="What's up"/>

      <Text display = "Hello"/>

    </>);

}
function Text({display}) {
  return (
    <div>
      <p>{display}</p>
    </div>
  );

}

export default App
