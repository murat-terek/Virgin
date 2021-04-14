import React, { useState } from 'react'
import { Row, Menu, Link } from '@startupjs/ui'
import './index.styl'

const WideMenu = () => {
  return pug`
    Row
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
