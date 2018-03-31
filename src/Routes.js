import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import MeetUp from './components/MeetUp'

export default function Routes() {
  return (
    <BrowserRouter key="router">
      <Switch>
        <Route path="/meetup" component={MeetUp} />
      </Switch>
    </BrowserRouter>
  )
}
