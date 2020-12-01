import React from 'react'
import { Div, Span } from '@startupjs/ui'
import './index.styl'

const Tabs = ({
  value,
  onChange,
  children
}) => {
  const childItem = children.find(child => child.props.value === value)

  return pug`
    Div.tabs
      Div.header
        each child in children
          Span.tabWrapper( onPress=() => onChange(child.props.value) )
            Span.tab #{child.props.title}
            if childItem === child
              Div.activeTab
      Div.content #{childItem}
  `
}

export default Tabs

export const TabsItem = ({ children }) => children
