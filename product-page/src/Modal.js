import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './modal.css'


function ShowModal() {

  const [show, setShow] = useState(false);
  const [image, setImage] = useState({
    image: './image-product-1.jpg',
    id: 1
  });

  
   const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const next = (image) => {
    const nextId = image.id + 1;
    const imageId = String(nextId).padStart(2,'');  // Format to two digits with leading zeros
    
    if (imageId >= 1 && imageId <= 4) {
        const imagePath = `./image-product-${imageId}.jpg`;
         setImage({
        id: nextId,
        image: imagePath,
      })
    }
  };

  const previous = () => {
    const nextId = image.id - 1;
    const imageId = String(nextId).padStart(2,''); // Format to two digits with leading zeros
    
    if (imageId >= 1 && imageId <= 4) {
        const imagePath = `./image-product-${imageId}.jpg`;
        setImage({
        id: nextId,
        image: imagePath,
      })
    }
  };
  



  return (
    <>
    <div className='setDiv'>
        <img src={image.image} onClick={handleShow} className='img-fluid main-img'/>
        <img src='./icon-previous.svg' onClick={() => previous(image)} alt='previous' className='prev_image' />
        <img src='./icon-next.svg' onClick={() => next(image)} alt='previous' className='next_image' />
    </div>
        
    <div className='thumbnail'>

        <img src='./image-product-1-thumbnail.jpg' onClick={()=> setImage({image: './image-product-1.jpg', id: 1})} className='img-fluid thumb' />
        <img src='./image-product-2-thumbnail.jpg' onClick={()=> setImage({image: './image-product-2.jpg', id: 2})} className='img-fluid thumb'/>
        <img src='./image-product-3-thumbnail.jpg' onClick={()=> setImage({image: './image-product-3.jpg', id: 3})} className='img-fluid thumb'/>
        <img src='./image-product-4-thumbnail.jpg' onClick={()=> setImage({image: './image-product-4.jpg', id: 4})} className='img-fluid thumb'/>
                
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
        
        <img src={image.image} alt='image' className='img-fluid main_img' />
        
        </Modal.Body>
        <Modal.Footer  className='thumbnail'>
             
             <img src='./image-product-1-thumbnail.jpg' onClick={()=> setImage({image: './image-product-1.jpg', id: 1})} className='img-fluid thum'/>
             <img src='./image-product-2-thumbnail.jpg' onClick={()=> setImage({image: './image-product-2.jpg', id: 2})} className='img-fluid thum'/>
             <img src='./image-product-3-thumbnail.jpg' onClick={()=> setImage({image: './image-product-3.jpg', id: 3})} className='img-fluid thum'/>
             <img src='./image-product-4-thumbnail.jpg' onClick={()=> setImage({image: './image-product-4.jpg', id: 4})} className='img-fluid thum'/>
           
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ShowModal;