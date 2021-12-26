import React, { useState, useRef, useEffect } from 'react'
import Info from './Info'

import './Section.css'

function Section(props) {
  const [info, setInfo] = useState(false);
  const sectionContainer = useRef();
  const infoContainer = useRef();
  const sectionBG = useRef();
  const firstRender = useRef(true);
  let top, height;

  const scrollBackground = () => {
    top = sectionContainer.current.getBoundingClientRect().top;
    sectionBG.current.style.top = `${-top / 1.65}px`;
  }
  const scrollHandler = () => {
    if (info) {
      window.scrollBy(0, infoContainer.current.getBoundingClientRect().top);
    } else {
      top = sectionContainer.current.getBoundingClientRect().top;
      height = sectionContainer.current.getBoundingClientRect().height;
      window.scrollBy(0, top + (height / 4));
    }
  }

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return
    }
    scrollHandler();
  }, [info]);
  useEffect(() => {
    document.addEventListener('scroll', scrollBackground);
    return () => {
      document.removeEventListener('scroll', scrollBackground);
    }
  });

  return (
    <>
    <section ref={ sectionContainer } className='container'>
      <img ref={ sectionBG } className='section-bg' src={ process.env.PUBLIC_URL + `/images/${props.bgImage}.jpg` } alt="Madhusmita Das" />
      <header>{props.heading}</header>
      <button className='toggle' onClick={() => setInfo(true)}>+</button>
    </section>
    <section ref={infoContainer} className={`info-container ${info ? 'expand' : null}`}>
      <button className='toggle' onClick={() => setInfo(false)}>-</button>
      {info ? < Info heading = {props.heading} /> : null}
    </section>
    </>
  )
}

export default Section
