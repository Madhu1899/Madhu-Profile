import React from 'react'

import './ShortFilms.css'

function ShortFilms() {
  const shortFilmProjects = [
    {
      name: 'Yaadein',
      poster: 'Yaadein_poster',
      link: 'https://drive.google.com/file/d/1TFFyt-cL_JqrY8xf6STB6_gc99H-QUBt/view?usp=sharing',
      genre: 'Independent Student short film, Heartwarming',
      duration : '2 mins 47 secs',
      filmmaker : 'Madhusmita Das',
      synopsis : 'This film is based on a very simple life story of us, where we forget to acknowledge the close ones when they are always around us, but when they are not then we always recall them... This is a represenatation of such little things between a mother and son.',
    },
    {
      name: 'The Shell',
      poster: 'The Shell_poster',
      link: 'https://drive.google.com/file/d/1m9Z43FmMZ7lCvM_QkTI6Mc0Bqiy93mnI/view?usp=sharing',
      genre: 'Psychological, Fiction, Independent',
      duration : '6 mins 15 secs',
      filmmaker : 'Madhusmita Das',
      synopsis : 'Not being able to be herself to the outer world and becoming the way the world wants to see her, she decides to come out of the shell of whom she is becoming and kill that persona.',
    },
    {
      name: 'Locked',
      poster: 'Locked_poster',
      link: 'https://drive.google.com/file/d/1o4P8WKxY-GoILVg6m0JldZUn0_pYiSKp/view?usp=sharing',
      genre: 'Independent, Open Interpretation , Psychological',
      duration : '1 mins 37secs',
      filmmaker : 'Madhusmita Das',
      synopsis : 'The transformation from a regular talkative girl into a silent patrified person along with the whole  transformed situation of the year 2020 , this film is a representation of how any changing situation can effect the mental health of a person and make them stuck in their own different time zone.',
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
          <img className='project' src={ process.env.PUBLIC_URL + `/images/${project.poster}.jpg` } alt="Madhusmita Das" />
          <article>
            <header>{`${project.name.toUpperCase()}`}</header>
            <table>
              <tbody>
                <tr>
                  <td><strong>Genre</strong> <span>:</span></td>
                  <td>{`${project.genre}`}</td>
                </tr>
                <tr>
                  <td><strong>Duration</strong> <span>:</span></td>
                  <td>{`${project.duration}`}</td>
                </tr>
                <tr>
                  <td><strong>Filmmaker</strong> <span>:</span></td>
                  <td>{`${project.filmmaker}`}</td>
                </tr>
                <tr>
                  <td><strong>Synopsis</strong> <span>:</span></td>
                  <td>{`${project.synopsis}`}</td>
                </tr>
              </tbody>
            </table>
            <button onClick={() => linkHandler(project.link)}><i className='arrow'></i></button>
          </article>
        </section>
      )
    })}
    </section>
  )
}

export default ShortFilms
