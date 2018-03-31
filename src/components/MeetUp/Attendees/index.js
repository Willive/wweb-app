import React from 'react';
import Attendee from './Attendee'

import './_attendees.css'

export default function Attendees(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <div className="Attendees">
        {!props.attendees.length && <h2>Nothing To See Here</h2>}
        {props.attendees.map((el, i) => <Attendee show={props.title === 'All Invites'} {...el} key={i} />)}
      </div>
    </div>
  )
}