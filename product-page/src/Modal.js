import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './modal.css'

function ShowModal() {

  const [show, setShow] = useState(false);
  const [image,setImage] = useState('./image-product-1.jpg');
  const [selected, setSelected] = useState(false);
  
  // i'm saving full img in this array so i can access it when thumbnail is clicked

  const imageArray = [ {
    1: './image-product-1.png', 2: './image-product-2.png', 3: './image-product-3.png', 4: './image-product-4.png'
  } ];



  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const toggleBorder = () => {
    setSelected(!selected);
    setImage('./image-product-1.jpg')
  };
  const toggleBorder2 = () => {
    setSelected(!selected);
    setImage('./image-product-2.jpg')
  };
  const toggleBorder3 = () => {
    setSelected(!selected);
    setImage('./image-product-2.jpg')
  };
  

  return (
    <>
    <img src={image} onClick={handleShow} className='img-fluid main-img'/>
    <div className='thumbnail'>
    <label>
    <input type='radio' className='radio'/><span><img src='./image-product-1-thumbnail.jpg' onClick={toggleBorder} className={selected ? "selected-image": 'img-fluid thumb'}/>
          </span>
          <input
            type="radio"
            name="tabset"
            id="tab1"
            value="All"
            checked
          />
    </label>
   
                  <img src='./image-product-2-thumbnail.jpg' onClick={toggleBorder2} className={selected ? "selected-image": 'img-fluid thumb'}/>
              <img src='./image-product-3-thumbnail.jpg' onClick={toggleBorder3} className={selected ? "selected-image": 'img-fluid thumb'}/>
              <img src='./image-product-4-thumbnail.jpg' onClick={()=> setImage('./image-product-4.jpg')} className='img-fluid thumb'/>
            
    </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className='modall'
      >
        <Modal.Header closeButton className='header'>
         
        </Modal.Header>
        <Modal.Body className='modal_body'>
        
        <img src={image} alt='image' className='img-fluid main_img' />
        
        </Modal.Body>
        <Modal.Footer  className='thumbnail'>
        
             
             <img src='./image-product-1-thumbnail.jpg' onClick={()=> setImage('./image-product-1.jpg')} className='img-fluid thumb'/>
             <img src='./image-product-2-thumbnail.jpg' onClick={()=> setImage('./image-product-2.jpg')} className='img-fluid thumb'/>
             <img src='./image-product-3-thumbnail.jpg' onClick={()=> setImage('./image-product-3.jpg')} className='img-fluid thumb'/>
             <img src='./image-product-4-thumbnail.jpg' onClick={()=> setImage('./image-product-4.jpg')} className='img-fluid thumb'/>
           
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ShowModal;