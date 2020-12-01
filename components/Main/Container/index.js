import React from 'react'
import { Div } from '@startupjs/ui'
import './index.styl'

const Container = ({ children, sidebar }) => (
  pug`
    Div.container
      Div.content #{children}
      Div.sidebar #{sidebar}
  `
)

export default Container
