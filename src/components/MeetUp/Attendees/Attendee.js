
import React from 'react';
import Avatar from 'material-ui/Avatar'

export default function Attendee(props) {
  const guestString = props.guests ? `Guests: ${props.guests}` : ''
  return (
    <div className="Attendee">
      <p className="Attendee-name">{props.name}</p>
      <Avatar src={props.thumb_link} size={56} />
      <p className="Attendee-guest">{guestString}</p>
      <p className="Attendee-response">{props.show && props.response}</p>
    </div>
  )
}