import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import MeetUp from '../MeetUp'
import Header from '../Header'
import Footer from '../Footer'

import './_app.css'

export default function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter key="router">
        <Switch>
          <Route path="/meetup" component={MeetUp} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  )
}
