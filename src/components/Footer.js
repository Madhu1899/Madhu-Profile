import React from 'react'

import './Footer.css'

function Footer() {
  return (
    <footer>
      <section id='photo'>
        <img id='madhu' src={ process.env.PUBLIC_URL + `/images/madhu.jpg` } alt="Madhusmita Das" />
      </section>
      <section id='contactInfo'>
        <img id='sign' src={ process.env.PUBLIC_URL + `/images/signature.png` } alt="Madhusmita Das" />
        <p><strong>WhatsApp</strong><br/>+91 8420150570</p>
        <p><strong>Phone</strong><br/>+91 7980964157</p>
        <p><strong>Email</strong><br/>madhusmita1802@gmail.com</p>
        <p><strong>Instagram</strong><br/>@madhusmita._.d</p>
      </section>
    </footer>
  )
}

export default Footer
