import React from 'react'
import '../styles/error.css'
export const Error = ({ message }) => {
  if (message === null) {
    return null
  }

  return (
    <div className='errorMessage'>
      {message}
    </div>
  )
}
