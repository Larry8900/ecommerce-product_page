import { useState } from "react";
import "./modal.css";

const Modal = ({ children, show, onClose, title }) => {
    const [image, setImage] = useState('./image-product-1.jpg')


    return (
    show && (
      <>
        <div className="modal-backdrop" onClick={onClose} />
        <div className="modal-wrapper">
          <div className="modal-content">
            <div className="modal-header">
              <div className="modal-title">{title}</div>
              <div onClick={onClose} className="modal-close">
                X
                <img src={image} className='img-fluid main_displayimage' />
  
              </div>
            </div>
            <div className="modal-body">{children}</div>
          </div>
        </div>
      </>
    )
  );
};

const Slider = ({ images, active, setActive }) => {
    const onNext = () => {
      if (active < images.length - 1) {
        setActive(active + 1);
      }
    };
  
    const onPrev = () => {
      if (active > 0) {
        setActive(active - 1);
      }
    };
  
    return (
      <div className="slider">
        <div className="slides">
          {images.map((e, i) => (
            <Slide key={e.caption} {...e} active={i === active} />
          ))}
        </div>
        <div className="navigation">
          <div className="navigation-next-prev">
            <div class="next-prev prev" onClick={onPrev}>
              {" "}
              &lt;{" "}
            </div>
            <div class="next-prev next" onClick={onNext}>
              {" "}
              &gt;{" "}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  const Slide = ({ image_url, caption, active }) => {
    return (
      <div className={`slide ${active ? "active" : ""}`}>
        <img src={image_url} alt={caption} />
        <span>{caption}</span>
      </div>
    );
  };

export default Modal;