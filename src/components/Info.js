import React from 'react'
import About from './About'
import Stills from './Stills'
import Bts from './Bts'
import ShortFilms from './ShortFilms'
import Collabs from './Collabs'

import './Info.css'

function Info(props) {
  const infoIndex = {
    'ABOUT': 0,
    'STILLS': 1,
    'BTS': 2,
    'SHORT FILMS': 3,
    'COLLABS': 4,
  };

  if (infoIndex[props.heading] === 0) {
    return (
      < About />
    )
  } else if (infoIndex[props.heading] === 1) {
    return (
      < Stills />
    )
  } else if (infoIndex[props.heading] === 2) {
    return (
      < Bts />
    )
  } else if (infoIndex[props.heading] === 3) {
    return (
      < ShortFilms />
    )
  } else if (infoIndex[props.heading] === 4) {
    return (
      <div>{props.heading}</div>
    )
  }
}

export default Info
