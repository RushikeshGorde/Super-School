import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import './review.css'

function Reviews() {
    const people = [
  {
    id: 1,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6B-EqTBZxfXiKCEkNn37JR6qqU-pHqNu_Hw&s',
    name: 'Ramesh Kumar',
    title: 'Father of Umesh Kumar',
    quote:
      'Your school excels in providing a nurturing environment where every student feels valued and supported. It demonstrates a commitment to academic excellence and personal growth, making it a standout institution in the community.',
  },
  {
    id: 2,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQerMEs6BTz7AKRH_BgWcx39mJpaGlmbjKx20hMtlJakF92F7EZNDQfCS13T_tSS_fBVEg&usqp=CAU',
    name: 'Ajay Sharma ',
    title: 'Father of Nitish Sharma',
    quote:
      'Your school embodies an inspiring environment, where each student is cherished and empowered to thrive. Its unwavering dedication to fostering academic prowess and holistic development is commendable, setting a shining example for educational institutions across Maharashtra.',
  },
  {
    id: 3,
    image:
      'https://img.freepik.com/free-photo/portrait-3d-male-doctor_23-2151107432.jpg',
    name: 'Ravi Verma',
    title: 'Father of Prakash Verma',
    quote:
      `Your school creates a supportive atmosphere where students thrive. It's a hub of learning and growth, shaping future leaders within our community.`,
  },
  {
    id: 4,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIzbL8v6Cdccu-4YarUBHdxKqFbJ8ULSzr5g&s',
    name: 'Vijay Tiwari',
    title: 'Father of Om Tiwari',
    quote:
      `Your school creates a welcoming atmosphere where students feel cared for and inspired to learn. It's a place where academic excellence meets personal growth, making it a standout choice for families in our community.`,
  },
];



    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      const lastIndex = people.length - 1;
      if (index < 0) {
        setIndex(lastIndex);
      }
      if (index > lastIndex) {
        setIndex(0);
      }
    }, [index, people]);
  
    useEffect(() => {
      let slider = setInterval(() => {
        setIndex(index + 1);
      }, 5000);
      return () => {
        clearInterval(slider);
      };
    }, [index]);
  
    return (
      <section className="class_section">
        <div className="class_title">
          
          <h2 className='text-center mt-5 fs-1 fw-bold'><span className='head-frist'>/</span><span className='head-second'>reviews</span> </h2>
        </div>
        <div className="class_section-center">
          {people.map((person, personIndex) => {
            const { id, image, name, title, quote } = person;
  
            let position = 'class_nextSlide';
            if (personIndex === index) {
              position = 'class_activeSlide';
            }
            if (
              personIndex === index - 1 ||
              (index === 0 && personIndex === people.length - 1)
            ) {
              position = 'class_lastSlide';
            }
  
            return (
              <article className={position +" class_article"} key={id}>
                <img src={image} alt={name} className="class_person-img" />
                <h4 className='class_h4'>{name}</h4>
                <p className="class_title class_ptitle">{title}</p>
                <p className="class_text class_ptext">{quote}</p>
                <FaQuoteRight className="class_icon" />
              </article>
            );
          })}
          <button className="class_prev" onClick={() => setIndex(index - 1)}>
            <FiChevronLeft />
          </button>
          <button className="class_next" onClick={() => setIndex(index + 1)}>
            <FiChevronRight />
          </button>
        </div>
      </section>
    );
}

export default Reviews
