
import './App.css';
import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Button, NavLink, NavItem} from 'react-bootstrap'
import Modal from './Modal';
import ShowModal from './Modal';

import Cart from './Cart';

function App() {
  const [image, setImage] = useState('./image-product-1.jpg');
  const [cartOpen, setCartOpen] = useState(false);
  const [price, setPrice] = useState({
    price: 125,
    piece: 0,
    total: 0
  });
 


  const plus = ()=>{
    setPrice(prevState => {
  
      return{...prevState,total: prevState.total + 125.00, 
        piece: prevState.piece + 1,
      } 
    })
  }
  const minus = ()=> {
    setPrice(prevState => {
      return {...prevState, total: prevState.total - 125,
        piece: prevState.piece -1,
      }
    })
  }

  const cartToggle = () => setCartOpen(!cartOpen);


  return (
    <div className="App col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
    
      <div className='body'>
        <Nav id='navhead' className='navbar navbar-expand-lg navbar-light bg-light justify-content-between ps-2 '>
          
          <img src='./icon-menu.svg' alt='menu' className='' />
         
          <img src='./logo.svg' alt='logo' className='navbar-logo ps-5' />
          
          
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
            <span><img src='./icon-cart.svg' onClick={cartToggle}  className='cart' alt='icon-cart'/></span>
            <span><img src='./image-avatar.png' className='img-fluid avatar' alt='avatat-image' /></span>
          </NavItem>

        </Nav>
        
        <section className='container col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
          <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6'>
            <div className='main_display ps-0'>
            
              {cartOpen && (
                <div className='cartopen container'>
                  <h2>Cart</h2>
                  <hr />
                  <div>
                      <img src='./image-product-1-thumbnail.jpg' />
                      <p>Fall Limited Edition Sneakers</p>
                      <h4> ${price.price}.00 x {price.piece} <span>${price.total}.00</span></h4>
                      <span>delete icon </span>
                  </div>
                  <button>Checkout</button>
              </div>
              )}
            
              <ShowModal />
              {/* <BsFillArrowRightCircleFill /> */}
            </div>
            
          
          </div>

          <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 info'>
            <h4>SNEAKER COMPANY</h4>
            <h1>Fall Limited Sneakers</h1>
            <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
            <div className='price'>
            <h3> ${price.price}.00</h3><span className='discount'>50%</span>
            </div>
            <span>${price.total}.00</span>
            <div>
              <span className='select_piece col-6'>
                <img src='./icon-minus.svg' alt='icon-minus' onClick={minus} className='minus' />
                
                <p className='piece_no col-4'>{price.piece}</p>
                <img src='./icon-plus.svg' alt='icon-plus' onClick={plus} className='plus' />
                
              </span>
              
              <button><span><img src='./icon-cart.svg' /></span>Add to cart</button>

            </div>


          </div>
        

        </section>
      </div>
    </div>
  );
        }

export default App;
