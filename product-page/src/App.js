
import './App.css';
import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Button, NavLink, NavItem} from 'react-bootstrap'
import Modal from './Modal';
import ShowModal from './Modal';

function App() {
  const [image, setImage] = useState('./image-product-1.jpg');
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
              <ShowModal />
            </div>
            
          
            {/* <Modal show={show} title="Lightbox" onClose={onClose} >
        <Slide images={images} active={active} setActive={setActive} />
      </Modal>
      <div className="image-list">
        {images.map((e, i) => (
          <div
            className={i === active ? "active" : ""}
            onClick={() => handleClick(i)}
            key={e.caption}
          >
            <img src={e.image_url} alt={e.caption} />
          </div>
        ))}
      </div> */}
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
                <h2 onClick={minus} className='minus_button col-4'>-</h2>
                <p className='piece_no col-4'>{price.piece}</p>
                <h2 onClick={plus} className='add_button col-4'>+</h2>
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
