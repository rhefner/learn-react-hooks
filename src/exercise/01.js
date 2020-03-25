// useState: greeting
// http://localhost:3000/isolated/exercise/01.js

import React from 'react';

function Greeting({ initialName = '' }) {
  const [name, setName] = React.useState(initialName);

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" placeholder="Fill me in.." />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  );
}

function App() {
  return <Greeting initialName="Rich" />;
}

export default App;
