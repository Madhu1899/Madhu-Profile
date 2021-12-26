import React from 'react'

import './ShortFilms.css'

function ShortFilms() {
  const shortFilmProjects = [
    {
      projectName: 'project 1',
      projectLink: 'https://www.google.com/',
      projectDesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
    {
      projectName: 'project 2',
      projectLink: 'https://www.google.com/',
      projectDesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
    {
      projectName: 'project 3',
      projectLink: 'https://www.google.com/',
      projectDesc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
  ];

  const linkHandler = (link) => {
    window.open(link);
  }

  return (
    <section className='short-films info'>
    {shortFilmProjects.map((project) => {
      return (
        <section key={`project${project.projectName}`}>
          <img className='project' src={ process.env.PUBLIC_URL + `/images/about.jpg` } alt="Madhusmita Das" />
          <article>
            <header>{`${project.projectName.toUpperCase()}`}</header>
            <p>{`${project.projectDesc}`}</p>
            <button onClick={() => linkHandler(project.projectLink)}><i className='arrow'></i></button>
          </article>
        </section>
      )
    })}
    </section>
  )
}

export default ShortFilms
