
import './App.css';
import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Nav, Button, NavLink, NavItem} from 'react-bootstrap'


function App() {
  return (
    <div className="App container-fluid col-sm-12 col-md-12 col-lg-12 col-xl-12">
    
      <div className='body'>
        <Nav className='navbar navbar-expand-lg navbar-light bg-light justify-content-between'>
          <button className='navbar-toggler' type='button' data-toggle="collapse"
          data-target=".navbaravDropdown" aria-controls="#navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <NavLink className='navbar-brand mb-4 h1'>sneakers</NavLink>
          
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
            <span><img src='./icon-cart.svg'  alt='re'/></span>
            <span><img src='./image-avatar.png' alt='pro' /></span>
          </NavItem>

        </Nav>
        <section className='container col-sm-12 col-md-12 col-lg-12 col-xl-12'>
          <div className='col-sm-12 col-md-6 col-lg-6 col-xl-6'>
            <img src='./image-product-1.jpg' className='img-fluid' />
            <img src='./image-product-1-thumbnail.jpg' className='img-fluid'/>
            <img src='./image-product-2-thumbnail.jpg' className='img-fluid'/>
            <img src='./image-product-3-thumbnail.jpg' className='img-fluid'/>
            <img src='./image-product-4-thumbnail.jpg' className='img-fluid'/>
          </div>

          <div className='col-sm-12 col-md-6 col-lg-6 col-xl-6'>
            <h4>SNEAKER COMPANY</h4>
            <h1>Fall limited Sneakers</h1>
            <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
            <h3>$125.00  <span>50%</span></h3>
            <span></span>
          </div>
        

        </section>
      </div>
    </div>
  );
}

export default App;
