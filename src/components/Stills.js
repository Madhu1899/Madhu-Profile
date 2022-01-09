import React from 'react'

import './Stills.css'

function Stills() {
  const stillsAlbumsLeft = [
    {
      name: 'Loreal',
      source: 'loreal_1',
      link: 'https://drive.google.com/drive/folders/1cL8DM5NZWhA-DOaEzOJmQO2yaTDZ2OUp?usp=sharing',
      class: 'portrait',
    },
    {
      name: 'Theatre',
      source: 'theatre_2',
      link: 'https://www.google.com/',
      class: 'landscape',
    },
    {
      name: 'Theatre',
      source: 'theatre_1',
      link: 'https://www.google.com/',
      class: '',
    },
    {
      name: 'Modern Love',
      source: 'mdLove_3',
      link: 'https://www.google.com/',
      class: 'landscape',
    },
    {
      name: 'Theatre',
      source: 'theatre_3',
      link: 'https://www.google.com/',
      class: 'landscape',
    },
    {
      name: 'Theatre',
      source: 'theatre_4',
      link: 'https://www.google.com/',
      class: '',
    },
    {
      name: 'Loreal',
      source: 'loreal_2',
      link: 'https://www.google.com/',
      class: 'portrait',
    },
  ];
  const stillsAlbumsRight = [
    {
      name: 'Modern Love',
      source: 'mdLove_2',
      link: 'https://www.google.com/',
      class: 'landscape',
    },
    {
      name: 'Modern Love',
      source: 'mdLove_1',
      link: 'https://www.google.com/',
      class: '',
    },
    {
      name: 'Modern Love',
      source: 'mdLove_4',
      link: 'https://www.google.com/',
      class: 'portrait',
    },
    {
      name: 'Loreal',
      source: 'loreal_4',
      link: 'https://www.google.com/',
      class: 'landscape',
    },
    {
      name: 'Modern Love',
      source: 'mdLove_5',
      link: 'https://www.google.com/',
      class: '',
    },
    {
      name: 'Modern Love',
      source: 'mdLove_6',
      link: 'https://www.google.com/',
      class: 'portrait',
    },
    {
      name: 'Loreal',
      source: 'loreal_3',
      link: 'https://www.google.com/',
      class: 'landscape',
    },
  ];

  const linkHandler = (link) => {
    // window.open(link);
    return
  }

  return (
    <section className='stills info'>
      <section>
      {stillsAlbumsLeft.map((album) => {
        return (
          <span key={`album${album.source}`}>
            <img className={`album ${album.class}`} src={ process.env.PUBLIC_URL + `/images/${album.source}.jpg` } alt="Madhusmita Das" />
            <span onClick={() => linkHandler(album.link)}>{`${album.name}`}</span>
          </span>
        )
      })}
      </section>
      <section>
      {stillsAlbumsRight.map((album) => {
        return (
          <span key={`album${album.source}`}>
            <img className={`album ${album.class}`} src={ process.env.PUBLIC_URL + `/images/${album.source}.jpg` } alt="Madhusmita Das" />
            <span onClick={() => linkHandler(album.link)}>{`${album.name}`}</span>
          </span>
        )
      })}
      </section>
    </section>
  )
}

export default Stills
