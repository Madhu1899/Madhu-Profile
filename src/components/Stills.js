import React from 'react'

import './Stills.css'

function Stills() {
  const stillsAlbumsLeft = [
    {
      albumName: 'Loreal',
      albumSource: 'loreal',
      albumLink: 'https://drive.google.com/drive/folders/1cL8DM5NZWhA-DOaEzOJmQO2yaTDZ2OUp?usp=sharing',
      albumClass: 'portrait',
    },
    {
      albumName: 'album 2',
      albumSource: 'about',
      albumLink: 'https://www.google.com/',
      albumClass: '',
    },
    {
      albumName: 'album 3',
      albumSource: 'about',
      albumLink: 'https://www.google.com/',
      albumClass: 'landscape',
    },
    {
      albumName: 'album 4',
      albumSource: 'about',
      albumLink: 'https://www.google.com/',
      albumClass: 'landscape',
    },
    {
      albumName: 'album 5',
      albumSource: 'about',
      albumLink: 'https://www.google.com/',
      albumClass: '',
    },
    {
      albumName: 'album 6',
      albumSource: 'about',
      albumLink: 'https://www.google.com/',
      albumClass: 'portrait',
    },
  ];
  const stillsAlbumsRight = [
    {
      albumName: 'album 1',
      albumSource: 'about',
      albumLink: 'https://www.google.com/',
      albumClass: '',
    },
    {
      albumName: 'album 2',
      albumSource: 'about',
      albumLink: 'https://www.google.com/',
      albumClass: 'portrait',
    },
    {
      albumName: 'album 3',
      albumSource: 'loreal',
      albumLink: 'https://www.google.com/',
      albumClass: 'landscape',
    },
    {
      albumName: 'album 4',
      albumSource: 'about',
      albumLink: 'https://www.google.com/',
      albumClass: '',
    },
    {
      albumName: 'album 5',
      albumSource: 'about',
      albumLink: 'https://www.google.com/',
      albumClass: 'portrait',
    },
    {
      albumName: 'album 6',
      albumSource: 'about',
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
            <img className={`album ${album.albumClass}`} src={ process.env.PUBLIC_URL + `/images/${album.albumSource}.jpg` } alt="Madhusmita Das" />
            <span onClick={() => linkHandler(album.albumLink)}>{`${album.albumName}`}</span>
          </span>
        )
      })}
      </section>
      <section>
      {stillsAlbumsRight.map((album) => {
        return (
          <span key={`album${album.albumName}`}>
            <img className={`album ${album.albumClass}`} src={ process.env.PUBLIC_URL + `/images/${album.albumSource}.jpg` } alt="Madhusmita Das" />
            <span onClick={() => linkHandler(album.albumLink)}>{`${album.albumName}`}</span>
          </span>
        )
      })}
      </section>
    </section>
  )
}

export default Stills
