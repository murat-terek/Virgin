import React from 'react'
import { Image, TouchableOpacity } from 'react-native'
import { Div, Span } from '@startupjs/ui'
import './index.styl'

const MenuIcon = ({ open, onPress }) => {
  return pug`
    Div
      TouchableOpacity(onPress=onPress)
        Div.menuIcon
          if !open
            Image.imgBurger(source={uri: '/header/burger.png'})
          else
            Span.close X
  `
}

export default MenuIcon
