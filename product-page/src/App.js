
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
  const [checkout, setCheckout] = useState(false);
  const [price, setPrice] = useState({
    price: 125,
    piece: 0,
    total: 0
  });
 


  const plus = ()=>{
    setPrice(prevState => {
        setCheckout(true)
  
      return{...prevState,total: prevState.total + 125.00, 
        piece: prevState.piece + 1,
      } 
    })
  }
  const minus = ()=> {
    setPrice(prevState => {
      if(prevState.piece < 2){
        setCheckout(false)
      }
      
      return {...prevState, total: prevState.total - 125,
        piece: prevState.piece -1,
      }
    })
  }
  const deleteItem = () => {
    setPrice(prevState => {
        setCheckout(false)
      
      return { ...prevState, total:0, piece: 0}
    })
    
  }

  const cartToggle = () => setCartOpen(!cartOpen);



  return (
    <div className="App col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
    
      <div className='body'>
        <Nav id='navhead' className='navbar '>
          
          <img src='./icon-menu.svg' alt='menu' className='menu-icon col-1 ps-2 img-fluid' />
         
          <img src='./logo.svg' alt='logo' className='navbar-logo ps-3' />
          
          
          <div className='collapse ' id='navbarNavDropdown'>
            <ul className='navbar-nav ' id='ul_navbar'>
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
                <div className='cartopen col-xs-11 col-sm-11 col-md-4 col-xl-4 '>
                  <h2>Cart</h2>
                  <hr />
                 

                  {checkout && (

                    <div className='cart-checkout '>

                    <div className='cart-div'>
                      <span className='col-2'>
                        <img src='./image-product-1-thumbnail.jpg' className='img-fluid cart-image'/>
                      </span>
                      <span className='cart-checkout col-xs-9 col-sm-9 col-md-10 col-xl-10'>
                        <p>Fall Limited Edition Sneakers</p>
                        <h4> ${price.price}.00 x {price.piece} <span>${price.total}.00</span></h4>
                        
                      </span>
                      <span className='p-1'>
                        <img src='./icon-delete.svg' onClick={deleteItem}/> 
                      </span>
                     
                  </div>
                    <button className='checkout-btn'>Checkout</button>
                  </div>
                    
                    
                  )
                  
                  }
                  
                  
                  
              </div>
              )}
            
              <ShowModal />
              {/* <BsFillArrowRightCircleFill /> */}
            </div>
            
          
          </div>

          <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 info'>
            <h4>SNEAKER COMPANY</h4>
            <h1>Fall Limited Edition Sneakers</h1>
            <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
            <div className='price'>
            <h3> ${price.price}.00</h3><span className='discount ms-2'>50%</span>
            </div>
            <span>${price.total}.00</span>
            <div>
              <span className='select_piece col-12'>
                <span className='col-xs-4 col-sm-4 col-md-4 col-xl-4 addPlus-btn'>
                  <span >
                    <img src='./icon-minus.svg' alt='icon-minus' className='minus' onClick={minus}  />
                  </span>
                  <span>
                    <p className='piece_no col-4'>{price.piece}</p>
                  </span>
                  <span>
                    <img src='./icon-plus.svg' alt='icon-plus' onClick={plus} className='plus' />
                  </span>
                  
                </span>
                <button className='col-xs-6 col-sm-6 col-md-6 col-xl-6'>
                  <span><img src='./icon-cart.svg' /></span>Add to cart</button>

              </span>
              
              
            </div>


          </div>
        

        </section>
      </div>
    </div>
  );
        }

export default App;
