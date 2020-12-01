import React, { useState } from 'react'
import { Div, Span } from '@startupjs/ui'
import Container from './Container'
import AddSuggestionForm from './AddSuggestionForm'
import Suggestions from './Suggestions'
import Tabs, { TabsItem } from './Tabs'
import './index.styl'

const suggestions = [
  {
    id: 1,
    title: 'Classes',
    author: 'Rebecca La Malfa',
    date: 'over 3 years ago',
    text: 'I think it would be amazing to offer Excel and offer computer refresher classes',
    vote: 6,
    comments: [
      {
        id: 1,
        src: "/header/avatar3.jpeg",
        author: "Rebecca La Malfa",
        text: "Corey I will bake you what ever you want!!",
        date: "over 3 years ago"
      },
      {
        id: 2,
        src: "/header/avatar3.jpeg",
        author: "Cllo Knowles",
        text: "Hi Rebecca, Great suggestion! We can definetely make this happen. We'll update you with further details... Thanks!",
        date: "over 3 years ago"
      },
      {
        id: 3,
        src: "/header/avatar3.jpeg",
        author: "Corey Hartmann",
        text: "I'm willing to trade tutoring sessions for baked goods",
        date: "over 3 years ago"
      },
    ]
  },
  {
    id: 2,
    title: 'Virgin hotel holiday cookie swap',
    author: 'Rebecca La Malfa',
    date: 'over 3 years ago',
    text: 'Would anyone be interested in participating?',
    vote: 5,
    comments: []
  },
  {
    id: 3,
    title: 'beverage station light',
    author: 'Candice Jackson',
    date: 'about 4 years ago',
    text: 'The light on the beverage station seems to be left on at all times. I am guessing this is true due to the fact that guest call at least 4 times.',
    vote: 0,
    comments: []
  },
]

const suggestions2 = [suggestions[1], suggestions[0]]

const Main = () => {
  const [tabValue, setTabValue] = useState(1)
  const [suggestionList, setSuggestionList] = useState(suggestions)

  const handlePost = (title, suggestion) => {
    setSuggestionList(suggestionList => {
      return [...suggestionList, {
        title,
        text: suggestion,
        id: suggestionList.length + 1,
        author: 'Candice Jackson',
        date: 'about 4 years ago',
        vote: 0,
        comments: []
      }]
    })
  }

  return pug`
    Div.main
      Span.bareIt Bare it!
      Container
        AddSuggestionForm( onPost=handlePost )
        Tabs( value=tabValue onChange=(tabValue) => setTabValue(tabValue) )
          TabsItem( title='ALL' value=1 )
            Suggestions( suggestions=suggestionList )
          TabsItem( title='MOST LOVED' value=2 )
            Suggestions( suggestions=suggestions2 )
          TabsItem( title='IN ACTION' value=3 )
            Suggestions( suggestions=suggestions )
          TabsItem( title='ARCHIVE' value=4 )
            Suggestions( suggestions=suggestions2 )
  `
}

export default Main
