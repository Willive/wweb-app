import React from 'react';
import AppBar from 'material-ui/AppBar';

const styles = {
  title: {
    cursor: 'pointer',
  },
}

export default function Header(props) {
  return (
    <AppBar
      title={<span style={styles.title}>JSCONF Dallas</span>}
      showMenuIconButton={false}
      onTitleClick={props.handleClick}
    />
  )
}

