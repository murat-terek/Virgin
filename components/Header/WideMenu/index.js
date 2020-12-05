import React, { useState } from 'react'
import { Menu, Link } from '@startupjs/ui'
import STYLES from './index.styl'

const { item } = STYLES

const WideMenu = () => {
  return pug`
    Menu.menu
      Link.item Valentines
      Link.item Vopeeps
      Link.item Voprep
      Link.item Bare it
      Link.item Culture
      Link.item Tribe
      Link.item Resources
      Link.item Vowell
  `
}

export default WideMenu
