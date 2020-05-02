import React from 'react';
import logo from './logo.svg';
import './App.css';
import AccountTable from './AccountTable'
import Button from 'react-bootstrap/Button'; 
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Carousel from 'react-bootstrap/Carousel'

function App() {
  return (
    <div className="App">
      <AccountTable />
      <div class="load">
           <Button variant="primary">Load More</Button>
      </div>  
    </div>
  );
}

export default App;
