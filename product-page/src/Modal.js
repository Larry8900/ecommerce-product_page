import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './modal.css'


function ShowModal() {

  const [show, setShow] = useState(false);
  const [image,setImage] = useState('./image-product-1.jpg');
  const [selected, setSelected] = useState(false);
  
   const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  

  return (
    <>
    <img src={image} onClick={handleShow} className='img-fluid main-img'/>
    
    
    <div className='thumbnail'>

        <img src='./image-product-1-thumbnail.jpg' onClick={()=> setImage('./image-product-1.jpg')} className='img-fluid thumb' />
        <img src='./image-product-2-thumbnail.jpg' onClick={()=> setImage('./image-product-2.jpg')} className='img-fluid thumb'/>
        <img src='./image-product-3-thumbnail.jpg' onClick={()=> setImage('./image-product-3.jpg')} className='img-fluid thumb'/>
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
        
             
             <img src='./image-product-1-thumbnail.jpg' onClick={()=> setImage('./image-product-1.jpg')} className='img-fluid thum'/>
             <img src='./image-product-2-thumbnail.jpg' onClick={()=> setImage('./image-product-2.jpg')} className='img-fluid thum'/>
             <img src='./image-product-3-thumbnail.jpg' onClick={()=> setImage('./image-product-3.jpg')} className='img-fluid thum'/>
             <img src='./image-product-4-thumbnail.jpg' onClick={()=> setImage('./image-product-4.jpg')} className='img-fluid thum'/>
           
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ShowModal;