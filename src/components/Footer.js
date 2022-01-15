import React from 'react'

import './Footer.css'

function Footer() {
  return (
    <footer>
      <section id='identity'>
        <img id='madhu' src={ process.env.PUBLIC_URL + `/images/madhu.jpg` } alt="Madhusmita Das" />
        <img id='sign' src={ process.env.PUBLIC_URL + `/images/signature.png` } alt="Madhusmita Das" />
      </section>
      <section id='contactInfo'>
        <p><strong>Contact</strong><br/>+91 7980964157</p>
        <p><strong>Email</strong><br/>madhusmita1802@gmail.com</p>
      </section>
    </footer>
  )
}

export default Footer
