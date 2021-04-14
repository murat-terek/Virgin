import React from 'react'
import { Div } from '@startupjs/ui'
import Suggestion from './Suggestion'
import STYLES from './index.styl'

const { wrapper } = STYLES

const Suggestions = ({ suggestions }) => {
  return pug`
    Div.suggestions
      each suggestion, index in suggestions
        Div( style=index!==0?wrapper:undefined )
          Suggestion( key=suggestion.id index=index+1 ...suggestion )
  `
}

export default Suggestions
