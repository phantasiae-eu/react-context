import React from 'react';
import './App.css';
import OuterNoContext from './OuterNoContext'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <OuterNoContext title="some text"/>
      </header>
    </div>
  );
}

export default App;
