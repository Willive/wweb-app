import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import SubHeader from '../SubHeader'

import './_app.css'

export default function AppContainer(props) {
  const { SubHeaderChild } = props
  return (
    <div className="App">
      <header>
        <Header />
        {SubHeaderChild && <SubHeader><SubHeaderChild /></SubHeader>}
      </header>
      {props.children}
      <Footer />
    </div>
  )
}
