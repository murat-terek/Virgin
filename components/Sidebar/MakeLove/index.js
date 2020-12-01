import React from 'react'
import { Div, Span } from '@startupjs/ui'
import { Image } from 'react-native'
import MakeLoveText from './MakeLoveText'
import './index.styl'

const MakeLove = () => {
  return pug`
    Div.makeLove
      MakeLoveText
      Span.text #MLSH
  `
}

export default MakeLove
