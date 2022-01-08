import React, { useRef } from 'react'

import './Navbar.css'

function Navbar() {
  const navbar = useRef();
  const navOpen = useRef(false);
  const toggler = useRef();
  const active = useRef(null);
  const highlightSection = () => {
    let sections, targetContainer, spans, done;
    sections = document.querySelectorAll('section.container');
    done = false;
    sections.forEach((section, i) => {
      if (done) return;
      targetContainer = section.getBoundingClientRect().bottom - navbar.current.getBoundingClientRect().height;
      if (0 < targetContainer) {
        spans = document.querySelectorAll('span.nav-link');
        if (active.current !== null) {
          spans[active.current].classList.remove('active');
        }
        spans[i].classList.add('active');
        active.current = i;
        done = true;
      }
    });
  }
  const scrollToSection = (section) => {
    let sections = document.querySelectorAll('section.container');
    window.scrollBy(0, sections[section].getBoundingClientRect().top);
    setTimeout(() => {
      highlightSection();
    }, 500)
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
      <span onClick={() => scrollToSection(0)} className='nav-link'>ABOUT</span>
      <span onClick={() => scrollToSection(1)} className='nav-link'>STILLS</span>
      <span onClick={() => scrollToSection(2)} className='nav-link'>BTS</span>
      <span onClick={() => scrollToSection(3)} className='nav-link'>SHORT FILMS</span>
      <span onClick={() => scrollToSection(4)} className='nav-link'>VIDEOS</span>
      <span ref={toggler} onClick={toggleNav} className='hamburger'><i></i><i></i><i></i></span>
    </nav>
  )
}

export default Navbar
