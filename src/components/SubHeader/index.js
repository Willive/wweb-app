import React from 'react'

import './_subheader.css'

export default function SubHeader(props){
  return (
    <div className="Subheader">
      {props.children}
    </div>
  )
}