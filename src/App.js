import React from 'react';
import logo from './logo.svg';
import './App.css';
import AccountTable from './AccountTable'

function App() {
  return (
    <div className="App">
      <AccountTable />
      <div class="load">
            <a>Load more</a>
      </div>  

    </div>
  );
}

export default App;
