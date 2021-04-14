import React from 'react'
import { Image } from 'react-native'
import { Div, Icon, Span } from '@startupjs/ui'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import './index.styl'

const MenuIcon = ({ open, onPress }) => {
  return pug`
    Div.menuIcon(onPress=onPress)
      if !open
        Image.imgBurger(source={uri: '/header/burger.png'})
      else
        Icon.close( icon=faTimes size='48' )
  `
}

export default MenuIcon
