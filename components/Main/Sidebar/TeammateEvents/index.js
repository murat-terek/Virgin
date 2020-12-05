import React from 'react'
import { Div, Span } from '@startupjs/ui'
import Event from './Event'
import './index.styl'

const TeammateEvents = () => {
  return pug`
    Div.events
      Span.title TEAMMATE
      Span.subtitle EVENTS
      Div.hr
      Event(
        day='tue'
        month='mar'
        date='17'
        title='st patricks day celebration'
        info='fdr'
        range='12:00p-1:00p'
      )
      Div.wideHr
      Event(
        day='wed'
        month='mar'
        date='18'
        title='march madness at fdr'
        info='fdr'
        range='11:00a-2:00p'
      )
      Div.wideHr
  `
}

export default TeammateEvents
