import React from 'react'

import './ShortFilms.css'

function ShortFilms() {
  const shortFilmProjects = [
    {
      name: 'Yaadein',
      link: 'https://drive.google.com/file/d/1TFFyt-cL_JqrY8xf6STB6_gc99H-QUBt/view?usp=sharing',
      genre: 'Independent Student short film, Heartwarming',
      duration : '2 mins 47secs',
      filmmaker : 'Madhusmita Das',
      synopsis : 'This film is based on a very simple life story of us, where we forget to acknowledge the close ones when they are always around us, but when they are not then we always recall them... This is a represenatation of such little things between a mother and son.',
    },
    {
      name: 'project 2',
      link: 'https://www.google.com/',
      genre: 'Lorem ipsum',
      duration : '2 mins 47secs',
      filmmaker : 'Madhusmita Das',
      synopsis : 'This film is based on a very simple life story of us, where we forget to acknowledge the close ones when they are always around us, but when they are not then we always recall them... This is a represenatation of such little things between a mother and son.',
    },
    {
      name: 'project 3',
      link: 'https://www.google.com/',
      genre: 'Lorem ipsum',
      duration : '2 mins 47secs',
      filmmaker : 'Madhusmita Das',
      synopsis : 'This film is based on a very simple life story of us, where we forget to acknowledge the close ones when they are always around us, but when they are not then we always recall them... This is a represenatation of such little things between a mother and son.',
    },
  ];

  const linkHandler = (link) => {
    window.open(link);
  }

  return (
    <section className='short-films info'>
    {shortFilmProjects.map((project) => {
      return (
        <section key={`project${project.name}`}>
          <img className='project' src={ process.env.PUBLIC_URL + `/images/about.jpg` } alt="Madhusmita Das" />
          <article>
            <header>{`${project.name.toUpperCase()}`}</header>
            <p><span>Genre : </span>{`${project.genre}`}</p>
            <p><span>Duration : </span>{`${project.duration}`}</p>
            <p><span>Filmmaker : </span>{`${project.filmmaker}`}</p>
            <p><span>Synopsis : </span>{`${project.synopsis}`}</p>
            <button onClick={() => linkHandler(project.link)}><i className='arrow'></i></button>
          </article>
        </section>
      )
    })}
    </section>
  )
}

export default ShortFilms
