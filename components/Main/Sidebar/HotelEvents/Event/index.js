import React from 'react'
import { Image } from 'react-native'
import { Row, Div, Span } from '@startupjs/ui'
import './index.styl'

const Event = ({
  img,
  title,
  info,
  date
}) => {
  return pug`
    Row
      Div.left
        Image.img( source=img )
      Div.middle
        Span.title= title
        Span.info= info
        Span.date= date
      Div.right
  `
}

export default Event
