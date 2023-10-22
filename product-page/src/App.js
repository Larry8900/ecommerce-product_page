
import './App.css';
import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Nav, Button, NavLink, NavItem} from 'react-bootstrap'


function App() {
  const [image, setImage] = useState('./image-product-1.jpg');
  // setImage('./image-product-1.jpg')
  const imagesSet = ()=> {
    setImage()
  }

  return (
    <div className="App col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
    
      <div className='body'>
        <Nav className='navbar navbar-expand-lg navbar-light bg-light justify-content-between'>
          <button className='navbar-toggler' type='button' data-toggle="collapse"
          data-target=".navbaravDropdown" aria-controls="#navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <NavLink className='navbar-brand mb-4 h1' id='brand'>sneakers</NavLink>
          
          <div className='collapse navbar-collapse' id='navbarNavDropdown'>
            <ul className='navbar-nav mr-auto inline' id='ul_navbar'>
              <li className='nav-items'>Collections</li>
              <li className='nav-items'>Men</li>
              <li className='nav-items'>Women</li>
              <li className='nav-items'>About</li>
              <li className='nav-items'>Contact</li>
            </ul>
          </div>
          
          <NavItem className='cart_avatar'>
            <span><img src='./icon-cart.svg' className='cart' alt='icon-cart'/></span>
            <span><img src='./image-avatar.png' className='img-fluid avatar' alt='avatat-image' /></span>
          </NavItem>

        </Nav>
        <section className='container col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
          <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6'>
            <div className='main_display'>
              <img src={image} className='img-fluid main_displayimage' />
            </div>
            <div className='thumbnail'>
              <img src='./image-product-1-thumbnail.jpg' onClick={()=> setImage('./image-product-1.jpg')} className='img-fluid'/>
              <img src='./image-product-2-thumbnail.jpg' onClick={()=> setImage('./image-product-2.jpg')} className='img-fluid'/>
              <img src='./image-product-3-thumbnail.jpg' onClick={()=> setImage('./image-product-3.jpg')} className='img-fluid'/>
              <img src='./image-product-4-thumbnail.jpg' onClick={()=> setImage('./image-product-4.jpg')} className='img-fluid'/>
            
            </div>
          </div>

          <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 info'>
            <h4>SNEAKER COMPANY</h4>
            <h1>Fall Limited Sneakers</h1>
            <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
            <h3>$125.00  <span>50%</span></h3>
            <span>$250.00</span>
            <div>
              <span>
                <button>-</button>
                <span></span>
                <button>+</button>
              </span>
              <button>Add to cart</button>

            </div>


          </div>
        

        </section>
      </div>
    </div>
  );
}

export default App;
