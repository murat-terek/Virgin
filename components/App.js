import React from 'react'
import { ScrollView, View, Text } from 'react-native'
import './App.styl'


const App = () => {
  return pug`
    ScrollView.root
      View.container
        Text 111
  `
}

export default App
