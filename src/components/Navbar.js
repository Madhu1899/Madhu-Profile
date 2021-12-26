import React, { useRef } from 'react'

import './Navbar.css'

function Navbar() {
  const navbar = useRef();
  const navOpen = useRef(false);
  const toggler = useRef();
  const active = useRef(null);
  const highlightSection = () => {
    let sections = document.querySelectorAll('section.container');
    sections.forEach((section, i) => {
      console.log(section);
      if (0 < section.getBoundingClientRect().bottom - navbar.current.getBoundingClientRect().height) {
        console.log('entered if');
        if (active.current) {
          console.log('entered second if');
          document.querySelector(`span.nav-link:nth-child(${active.current + 1})`).classList.remove('active');
          document.querySelector(`span.nav-link:nth-child(${i + 1})`).classList.add('active');
          active.current = i;
          return
        }
        document.querySelector(`span.nav-link:nth-child(${i + 1})`).classList.add('active');
        active.current = i;
        return
      }
    });
  }
  const toggleNav = () => {
    if (navOpen.current) {
      navbar.current.classList.add('closed');
      toggler.current.classList.add('hamburger');
      toggler.current.classList.remove('cross');
    } else {
      navbar.current.classList.remove('closed');
      toggler.current.classList.add('cross');
      toggler.current.classList.remove('hamburger');
      highlightSection();
    }
    navOpen.current = !navOpen.current;
  }

  return (
    <nav ref={navbar} className='closed'>
      <span className='nav-link'>ABOUT</span>
      <span className='nav-link'>STILLS</span>
      <span className='nav-link'>BTS</span>
      <span className='nav-link'>SHORT FILMS</span>
      <span className='nav-link'>COLLABS</span>
      <span ref={toggler} onClick={toggleNav} className='hamburger'><i></i><i></i><i></i></span>
    </nav>
  )
}

export default Navbar
