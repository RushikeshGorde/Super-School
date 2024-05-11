import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft, faCircleChevronRight, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import './Gallery.css';
import gallerydata from './galleryData';

const Gallery = () => {

  const [slideNumber, setSlideNumber] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const refs = gallerydata.map(() => useRef(null)); // Array of refs

  const handleOpenModal = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const prevSlide = () => {
    slideNumber === 0 ? setSlideNumber(gallerydata.length - 1) : setSlideNumber(slideNumber - 1);
  };

  const nextSlide = () => {
    slideNumber + 1 === gallerydata.length ? setSlideNumber(0) : setSlideNumber(slideNumber + 1);
  };

  const handleMove = (e, index) => {
    const el = refs[index].current; // Access the correct ref for this image
    if (!el) return;

    const zIndex = 10; // Set a default z-index value

    const { clientHeight: height, clientWidth: width } = el;
    const xVal = e.nativeEvent.offsetX;
    const yVal = e.nativeEvent.offsetY;
    const yRotation = 20 * ((xVal - width / 2) / width);
    const xRotation = -20 * ((yVal - height / 2) / height);
    const string = `perspective(500px) scale(1.2) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;

    // Apply the transform and increase z-index
    el.style.transform = string;
    el.style.zIndex = zIndex;

    // Reset z-index for other images
    refs.forEach((ref, i) => {
      if (i !== index && ref.current) {
        ref.current.style.zIndex = zIndex - 1;
      }
    });
  };

  const handleMouseOut = (index) => {
    const el = refs[index].current;
    if (!el) return;

    el.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)';
  };

  const handleMouseDown = (index) => {
    const el = refs[index].current;
    if (!el) return;

    el.style.transform = 'perspective(500px) scale(0.9) rotateX(0) rotateY(0)';
  };

  const handleMouseUp = (index) => {
    const el = refs[index].current;
    if (!el) return;

    el.style.transform = 'perspective(500px) scale(1.1) rotateX(0) rotateY(0)';
  };

  return (
    <div>
      {openModal && slideNumber !== null && (
        <div className='sliderWrap'>
          <FontAwesomeIcon icon={faCircleXmark} className='btnClose' onClick={handleCloseModal} />
          <FontAwesomeIcon icon={faCircleChevronLeft} className='btnPrev' onClick={prevSlide} />
          <FontAwesomeIcon icon={faCircleChevronRight} className='btnNext' onClick={nextSlide} />
          <div className='fullScreenImage'>
            <img src={gallerydata[slideNumber].img} alt='' />
          </div>
        </div>
      )}

      <div className='container'>
      <h2 className='text-center mt-5 fs-1 fw-bold'><span className='head-frist'>Our</span><span className='head-second ms-3'>Gallery</span> </h2>
        <div className='grid-wrapper'>
          {gallerydata.map((item, index) => (
            <div
              className='img-box'
              key={index}
              ref={refs[index]} // Assign the correct ref for this image
              onMouseMove={(e) => handleMove(e, index)} // Pass index to the event handler
              onMouseOut={() => handleMouseOut(index)}
              onMouseDown={() => handleMouseDown(index)}
              onMouseUp={() => handleMouseUp(index)}
              onClick={() => handleOpenModal(index)} // Open modal on click
            >
              <img  src={item.img} alt={item.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
