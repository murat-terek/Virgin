import React, { useState } from 'react'
import { Image } from 'react-native'
import { Div, Span } from '@startupjs/ui'
import MobileMenu from './MobileMenu'
import WideMenu from './WideMenu'
import Avatar from './Avatar'
import './index.styl'

const Header = () => {
  return pug`
    Div.header
      Div.top
        Image.img(source={ uri: '/header/main-logo-white.png' })
        Div.mobileMenu
          MobileMenu
        Div.wideMenu
          WideMenu
          Div.avatar
            Avatar( size='xl' src='/header/avatar3.jpeg' name='Niraj' )
      Span.bareIt Bare it!
  `
}

export default Header
