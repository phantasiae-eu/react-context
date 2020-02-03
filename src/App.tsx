import React from 'react';
import './App.css';
import OuterNoContext from './OuterNoContext'
import OuterContext from './OuterContext'
import {MyContext} from './context'



const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <OuterNoContext title="text as props"/>
        <MyContext.Provider value={{title:'another funny context'}}>
          <OuterContext/>
        </MyContext.Provider>
      </header>
    </div>
  );
}

export default App;
