import React from 'react'
import { ScrollView, ImageBackground } from 'react-native'
import { Div } from '@startupjs/ui'
import Header from './Header'
import Main from './Main'
import './App.styl'

const App = () => {
  return pug`
    ScrollView.root
      ImageBackground.background( source='/background.png' )
        Div.container
          Header
          Main
  `
}

export default App
