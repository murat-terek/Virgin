import React from 'react'
import { View } from 'react-native'
import { Div, Span, Avatar as AvatarUI } from '@startupjs/ui'
import './index.styl'

const Avatar = ({ src, name, size }) => {
  return pug`
    Div.avatar
      AvatarUI( size=size src=src )
      Div.info
        Span.hello hello
        Span.name #{name}
  `
}

export default Avatar
