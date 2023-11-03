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
  const [num,setNum] =useState(1)
  const [selected, setSelected] = useState(false);
  
   const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const next = () => {
    setImage((prevState) => {
      const nextId = prevState.id + 1;
      const imageId = String(nextId).padStart(2,''); // Format to two digits with leading zeros
      const imagePath = `./image-product-${imageId}.jpg`;
      console.log(`Next image ID: ${imageId}`);
      console.log(`Next image path: ${imagePath}`);
      return {
        ...prevState,
        id: nextId,
        image: imagePath,
      };
    });
  };
  

 
//   const next = ()=> {
//     setImage(prevState => {
//       return {...prevState, id: prevState.id + 1,
//         image:`./image-product-${prevState.id}.jpg` ,
//       }
//     })
//   }

  return (
    <>
    <div>
        <img src='./icon-previous.svg' alt='previous' className='prev_image' />
        <img src={image} onClick={handleShow} className='img-fluid main-img'/>
        <img src='./icon-next.svg' onClick={next} alt='previous' className='next_image' />
    </div>
    
    
    
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