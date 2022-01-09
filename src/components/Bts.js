import React from 'react'

import './Bts.css'

function Bts() {
  const btsProjects = [
    {
      name: 'Amazon Prime Series',
      source: 'bts_mdLove',
      link: 'https://drive.google.com/drive/folders/1Cr1xFtKd-tc9zGy4-PXHqO5b6S0cj_aw?usp=sharing',
    },
    {
      name: 'TVC - Green Tea',
      source: 'bts_tvc',
      link: 'https://drive.google.com/drive/folders/1ZUtGaFOoXy4Fnrz8NAYDpyI6skCVn43Y?usp=sharing',
    },
    {
      name: 'ZEE5 - Comedy Shots',
      source: 'bts_zee5',
      link: 'https://drive.google.com/drive/folders/1ZVs74Ee152wIyFGWQaFbUipk3dwbeyiT?usp=sharing',
    },
  ];

  const linkHandler = (link) => {
    window.open(link);
  }

  return (
    <section className='bts info'>
    {btsProjects.map((project) => {
      return (
        <span key={`project${project.name}`}>
          <img className='project' src={ process.env.PUBLIC_URL + `/images/${project.source}.jpg` } alt="Madhusmita Das" />
          <span onClick={() => linkHandler(project.link)}>{`${project.name}`}</span>
        </span>
      )
    })}
    </section>
  )
}

export default Bts
