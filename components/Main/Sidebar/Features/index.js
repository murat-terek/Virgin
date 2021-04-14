import React from 'react'
import { Row, Div, Icon, Span } from '@startupjs/ui'
import {
  faBook,
  faMap,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import './index.styl'

const Feature = ({ icon, text }) => {
  return pug`
    Div.feature
      Icon.icon( icon=icon size='xl' )
      Span.text= text
  `
}

const Features = () => {
  return pug`
    Row.features
      Feature( icon=faBook text='BOOK OF LOVE' )
      Feature( icon=faMap text='CULTURE MAP' )
      Feature( icon=faComment text='SEND FEEDBACK' )
  `
}

export default Features
