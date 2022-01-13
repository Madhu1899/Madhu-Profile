import React from 'react'

import './Videos.css'

function Videos() {
  const videos = [
    {
      id: 0,
      link: "https://www.youtube.com/embed/i3xjYKo_6fM",
    },
    {
      id: 1,
      link: "https://www.youtube.com/embed/CnLY2Y7ld98",
    },
    {
      id: 2,
      link: "https://www.youtube.com/embed/wWyclTvzX7k",
    },
    {
      id: 3,
      link: "https://www.youtube.com/embed/G31m3uFJZhM",
    },
    {
      id: 4,
      link: "https://www.youtube.com/embed/FOWja84lTYs",
    },
    {
      id: 5,
      link: "https://www.youtube.com/embed/iQTvKW5qijE",
    },
    {
      id: 6,
      link: "https://www.youtube.com/embed/rpS9mpM4qMk",
    },
    {
      id: 7,
      link: "https://www.youtube.com/embed/A0sZsrLX-io",
    },
    {
      id: 8,
      link: "https://www.youtube.com/embed/Swl31im_Pzs",
    },
    {
      id: 9,
      link: "https://www.youtube.com/embed/b6ZYlIYNQb8",
    },
  ]
  return (
    <section className='videos info'>
      {
        videos.map((video) => {
          return (
            <iframe key={video.id} className={`${video.id === 0 ? 'main-video' : 'video'} ${video.id < 3 ? 'enlarge' : ''}`} src={`${video.link}${video.id === 0 ? '?autoplay=1&mute=1' : ''}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          )
        })
      }
    </section>
  )
}

export default Videos
