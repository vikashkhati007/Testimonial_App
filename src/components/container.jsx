import React from 'react'

export default function container(props) {
  return (
    <div className='container'>
      {props.text}{props.email}
    </div>
  )
}
