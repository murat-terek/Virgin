import React from 'react'
import { Div, Span, Avatar, Icon } from '@startupjs/ui'
import {
  faTimes,
} from '@fortawesome/free-solid-svg-icons'
import './index.styl'

const Comment = ({
  src,
  author,
  text,
  date,
  onClickRemove
}) => {
  return pug`
    Div.comment
      Div.left
        Avatar( size='m' src=src )
      Div.center
        Span.author #{author} 
          Span.text #{text}
        Span.time #{date}
      Div.right
        Icon.remove( icon=faTimes onPress=onClickRemove )
  `
}

export default Comment
