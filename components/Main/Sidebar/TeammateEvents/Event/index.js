import React from 'react'
import { Row, Div, Span, Icon } from '@startupjs/ui'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import './index.styl'

const Event = ({
  day,
  month,
  date,
  title,
  info,
  range
}) => {
  return pug`
    Row
      Div.left
        Span.day= day
        Span.month= month
        Span.date= date
      Div.middle
        Span.title= title
        Span.info= info
        Span.range= range
      Div.right
        Icon.icon( icon=faChevronDown size='xl' )
  `
}

export default Event
