import React from 'react'
import { Div, Span } from '@startupjs/ui'
import MakeLove from './MakeLove'
import Features from './Features'
import TeammateEvents from './TeammateEvents'
import HotelEvents from './HotelEvents'

const Sidebar = () => {
  return pug`
    Div.sidebar
      MakeLove
      Features
      TeammateEvents
      HotelEvents
  `
}

export default Sidebar
