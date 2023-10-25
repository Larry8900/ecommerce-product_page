// Slide.js

import React from "react";

function Slide({ images, active, setActive }) {
  return (
    <div className="slide">
      <img src={images[active].image_url} alt={`Slide ${active + 1}`} />
    </div>
  );
}

export default Slide;
