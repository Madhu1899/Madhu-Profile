import React from 'react'

import './Stills.css'

function Stills() {
  const stillsAlbumsLeft = [
    {
      albumName: 'album 1',
      albumLink: 'https://www.google.com/',
      albumClass: 'landscape',
    },
    {
      albumName: 'album 2',
      albumLink: 'https://www.google.com/',
      albumClass: '',
    },
    {
      albumName: 'album 3',
      albumLink: 'https://www.google.com/',
      albumClass: 'portrait',
    },
    {
      albumName: 'album 4',
      albumLink: 'https://www.google.com/',
      albumClass: 'landscape',
    },
    {
      albumName: 'album 5',
      albumLink: 'https://www.google.com/',
      albumClass: '',
    },
    {
      albumName: 'album 6',
      albumLink: 'https://www.google.com/',
      albumClass: 'portrait',
    },
  ];
  const stillsAlbumsRight = [
    {
      albumName: 'album 1',
      albumLink: 'https://www.google.com/',
      albumClass: '',
    },
    {
      albumName: 'album 2',
      albumLink: 'https://www.google.com/',
      albumClass: 'portrait',
    },
    {
      albumName: 'album 3',
      albumLink: 'https://www.google.com/',
      albumClass: 'landscape',
    },
    {
      albumName: 'album 4',
      albumLink: 'https://www.google.com/',
      albumClass: '',
    },
    {
      albumName: 'album 5',
      albumLink: 'https://www.google.com/',
      albumClass: 'portrait',
    },
    {
      albumName: 'album 6',
      albumLink: 'https://www.google.com/',
      albumClass: 'landscape',
    },
  ];

  const linkHandler = (link) => {
    window.open(link);
  }

  return (
    <section className='stills info'>
      <section>
      {stillsAlbumsLeft.map((album) => {
        return (
          <span key={`album${album.albumName}`}>
            <img className={`album ${album.albumClass}`} src={ process.env.PUBLIC_URL + `/images/about.jpg` } alt="Madhusmita Das" />
            <span onClick={() => linkHandler(album.albumLink)}>{`${album.albumName}`}</span>
          </span>
        )
      })}
      </section>
      <section>
      {stillsAlbumsRight.map((album) => {
        return (
          <span key={`album${album.albumName}`}>
            <img className={`album ${album.albumClass}`} src={ process.env.PUBLIC_URL + `/images/about.jpg` } alt="Madhusmita Das" />
            <span onClick={() => linkHandler(album.albumLink)}>{`${album.albumName}`}</span>
          </span>
        )
      })}
      </section>
    </section>
  )
}

export default Stills
