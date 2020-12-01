import React from 'react'
import { Div, Layout } from '@startupjs/ui'
import Header from './Header'
import Main from './Main'
import Sidebar from './Sidebar'
import './App.styl'

const App = () => {
  return pug`
    Layout.root
      Div.container
        Header
        Main
        Sidebar
  `
}

export default App
