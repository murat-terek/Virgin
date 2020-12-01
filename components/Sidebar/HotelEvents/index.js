import React from 'react'
import { Div, Span } from '@startupjs/ui'
import Event from './Event'
import './index.styl'

const HotelEvents = () => {
  return pug`
    Div.events
      Span.title HOTEL
      Span.subtitle EVENTS
      Div.hr
      Event(
        img='/sidebar/event4.jpg'
        title='upside down tea party'
        info='commons club'
        date='March 09, 2020 at 2:00PM'
      )
      Div.wideHr
      Event(
        img='/sidebar/event5.jpg'
        title="sky high st. patty's day"
        info='cerise'
        date='March 14, 2020 at 9:00AM'
      )
      Div.wideHr
      Event(
        img='/sidebar/event6.jpg'
        title="st.patrick's day takeover"
        info='fdr'
        date='March 14, 2020 at 9:00AM'
      )
  `
}

export default HotelEvents
