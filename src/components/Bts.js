import React from 'react'

import './Bts.css'

function Bts() {
  const btsProjects = [
    {
      name: 'Modern Love (TV Series)',
      desc1: 'ep : Cutting Chai',
      desc2: 'an Amazon Prime Show',
      source: 'bts_mdLove',
      link: 'https://drive.google.com/drive/folders/1Cr1xFtKd-tc9zGy4-PXHqO5b6S0cj_aw?usp=sharing',
    },
    {
      name: 'Green Tea',
      desc1: 'TVC',
      desc2: 'by E02 Films and events',
      source: 'bts_tvc',
      link: 'https://drive.google.com/drive/folders/1ZUtGaFOoXy4Fnrz8NAYDpyI6skCVn43Y?usp=sharing',
    },
    {
      name: 'Comedy Shots',
      desc2: 'a ZEE5 Original series',
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
          <span onClick={() => linkHandler(project.link)}>
            <header className='name'>{project.name}</header>
            <p className='desc1'>{project.desc1}</p>
            <p className='desc2'>{project.desc2}</p>
          </span>
        </span>
      )
    })}
    </section>
  )
}

export default Bts
