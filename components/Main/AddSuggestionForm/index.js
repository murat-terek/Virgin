import React, { useState } from 'react'
import { Div, H1, H3, TextInput, Span, Button } from '@startupjs/ui'
import './index.styl'

const AddSuggestionForm = ({
  onPost
}) => {
  const [title, setTitle] = useState('')
  const [suggestion, setSuggestion] = useState('')

  const handlePost = () => {
    onPost(title, suggestion)
    setTitle('')
    setSuggestion('')
  }

  return pug`
    Div.suggestionForm
      H1.title ADD A SUGGESTION
      H3.description We love to hear new ideas on how to be even more awesome
      TextInput(
        placeholder='Title of suggestion'
        inputStyleName='input'
        value=title
        onChangeText=setTitle
      )
      TextInput.textarea(
        placeholder='Make a suggestion'
        inputStyleName='textarea'
        numberOfLines=4
        value=suggestion
        onChangeText=setSuggestion
      )
      Div.footer
        Div.left
          Span.info To send a private suggestion email ut at:
          Span.email CULTURE@VIRGINHOTEL.COM
        Button.button( onPress=handlePost ) POST
  `
}

export default AddSuggestionForm
