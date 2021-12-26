import React from 'react'

import './Bts.css'

function Bts() {
  const btsProjects = [
    {
      projectName: 'project 1',
      projectLink: 'https://www.google.com/',
    },
    {
      projectName: 'project 2',
      projectLink: 'https://www.google.com/',
    },
    {
      projectName: 'project 3',
      projectLink: 'https://www.google.com/',
    },
    {
      projectName: 'project 4',
      projectLink: 'https://www.google.com/',
    },
    {
      projectName: 'project 5',
      projectLink: 'https://www.google.com/',
    },
    {
      projectName: 'project 6',
      projectLink: 'https://www.google.com/',
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
