import React from 'react'
import { View } from 'react-native'
import { Row, Div, Span, Avatar as AvatarUI } from '@startupjs/ui'
import './index.styl'

const Avatar = ({ src, name, size }) => {
  return pug`
    Row( vAlign='center' )
      Div.info
        Span.hello hello
        Span.name= name
      AvatarUI( size=size src=src )
  `
}

export default Avatar
