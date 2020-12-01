import React, { useState } from 'react'
import { Image } from 'react-native'
import { Div, Drawer, Menu, Link } from '@startupjs/ui'
import MenuIcon from './MenuIcon'
import Avatar from './Avatar'
import STYLES from './index.styl'

const { Item } = Menu

const {
  item
} = STYLES

const App = () => {
  const [open, setOpen] = useState(false)

  return pug`
    Div.header
      Image.img(source={ uri: '/header/main-logo-white.png' })
      Drawer.menu(
        visible=open
        onDismiss=() => setOpen(false)
        styleContent={ width: 250 }
      )
        Div.sidebar
          Image.img(source={ uri: '/header/main-logo-white.png' })
          Menu.menu
            Link.item Valentines
            Link.item Vopeeps
            Link.item Voprep
            Link.item Bare it
            Link.item Culture
            Link.item Tribe
            Link.item Resources
            Link.item Vowell
          Avatar( size='l' src='/header/avatar3.jpeg' name='Niraj' )
      MenuIcon(open=open onPress=() => setOpen(true))
  `
}

export default App
