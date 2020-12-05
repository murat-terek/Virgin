import React from 'react'
import { Div, Span, Icon } from '@startupjs/ui'
import {
  faCheck,
  faTimes,
  faHeart
} from '@fortawesome/free-solid-svg-icons'
import Comments from '../../Comments'
import './index.styl'

const Suggestion = ({
  title,
  author,
  date,
  text,
  vote,
  comments,
  index
}) => {
  return pug`
    Div.suggestion
      Div.left
        Span.index #{index}
      Div.right
        Span.title #{title}
        Span.author #{author}  
          Span.time #{date}
        Span.text #{text}
        Div.footer
          Div.footerLeft
            Icon.check( icon=faCheck )
            Span.vote vote: 
              Span.voteNumber #{vote}
          Div.footerRight
            Icon.remove( icon=faTimes )
            Div.manage
              Icon.heart( icon=faHeart )
              Span.manageText manage
        Comments( comments=comments )
  `
}

export default Suggestion
