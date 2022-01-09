import React from 'react'

import './Bts.css'

function Bts() {
  const btsProjects = [
    {
      projectName: 'Amazon Prime Series',
      projectLink: 'https://drive.google.com/drive/folders/1Cr1xFtKd-tc9zGy4-PXHqO5b6S0cj_aw?usp=sharing',
    },
    {
      projectName: 'TVC - Green Tea',
      projectLink: 'https://drive.google.com/drive/folders/1ZUtGaFOoXy4Fnrz8NAYDpyI6skCVn43Y?usp=sharing',
    },
    {
      projectName: 'ZEE5 - Comedy Shots',
      projectLink: 'https://drive.google.com/drive/folders/1ZVs74Ee152wIyFGWQaFbUipk3dwbeyiT?usp=sharing',
    },
  ];

  const linkHandler = (link) => {
    window.open(link);
  }

  return (
    <section className='bts info'>
    {btsProjects.map((project) => {
      return (
        <span key={`project${project.projectName}`}>
          <img className='project' src={ process.env.PUBLIC_URL + `/images/about.jpg` } alt="Madhusmita Das" />
          <span onClick={() => linkHandler(project.projectLink)}>{`${project.projectName}`}</span>
        </span>
      )
    })}
    </section>
  )
}

export default Bts
