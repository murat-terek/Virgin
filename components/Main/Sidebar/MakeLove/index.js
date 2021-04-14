import React from 'react'
import { Div, Span } from '@startupjs/ui'
import { Image } from 'react-native'
import './index.styl'

const MakeLove = () => {
  return pug`
    Div.makeLove
      Image.img(source={uri:'/make-love-text.png'})
      Span.text #MLSH
  `
}

export default MakeLove
