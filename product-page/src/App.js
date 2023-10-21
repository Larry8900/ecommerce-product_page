
import './App.css';
import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Nav, Button, NavLink, NavItem} from 'react-bootstrap'

function App() {
  return (
    <div className="App">
    
      <div className='body'>
        <Nav className='navbar navbar-expand-lg navbar-light bg-light'>
          <NavLink className='navbar-brand mb-4 h1'>sneakers</NavLink>
          <button className='navbar-toggler' type='button' data-toggle="collapse"
          data-target=".navbaravDropdown" aria-controls="#navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNavDropdown'>
            <ul className='navbar-nav mr-auto inline'>
              <li className='nav-items'>Collections</li>
              <li className='nav-items'>Men</li>
              <li className='nav-items'>Women</li>
              <li className='nav-items'>About</li>
              <li className='nav-items'>Contact</li>
            </ul>
          </div>
          
          <NavItem>
            <span>Cart pic</span>
            <span>Profile pic</span>
          </NavItem>

        </Nav>
      </div>
    </div>
  );
}

export default App;
