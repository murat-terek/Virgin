import React, { useState } from 'react'
import { Div, Avatar, TextInput, Icon } from '@startupjs/ui'
import Comment from './Comment'
import {
  faPaperPlane
} from '@fortawesome/free-solid-svg-icons'
import STYLES from './index.styl'

const { input, send } = STYLES

const author = 'Corey Hartmann'

const Comments = ({
  comments: commentsObj
}) => {
  const [comments, setComments] = useState(commentsObj)
  const [commentValue, setCommentValue] = useState('')

  const handleRemoveComment = (id) => {
    const index = comments.findIndex(c => c.id === id);

    if (index !== -1) {
      const newComments = [...comments]
      newComments.splice(index, 1)
      setComments(newComments)
    }
  }

  const handleAddComment = () => {
    if (!commentValue) {
      return
    }

    const newComments = [...comments]
    newComments.push({
      id: newComments.length,
      src: "/header/avatar3.jpeg",
      author: author,
      text: commentValue,
      date: "over 3 years ago"
    })
    setComments(newComments)
    setCommentValue('')
  }

  return pug`
    Div.comments
      each comment in comments
        Comment( ...comment onClickRemove=() => handleRemoveComment(comment.id) )
      Div.newComment
        Div.left
          Avatar( size='m' src='/header/avatar3.jpeg' )
        Div.right
          TextInput(
            placeholder='Reply to this suggestion...'
            inputStyle=input
            value=commentValue
            onChangeText=setCommentValue
            icon=faPaperPlane
            iconPosition='right'
            iconColor='#cc000c'
            onIconPress=handleAddComment
          )
  `
}

export default Comments
