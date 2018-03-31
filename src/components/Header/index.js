import React from 'react'
import AppBar from 'material-ui/AppBar'

const styles = {
  title: {
    cursor: 'pointer',
  },
}
const defaultHeader = 'William Wherry'

export default function Header(props) {
  const {HeaderText, onTitleClick} = props
  return (
    <AppBar
      title={<span style={styles.title}>{HeaderText || defaultHeader}</span>}
      showMenuIconButton={false}
      onTitleClick={onTitleClick}
    />
  )
}

