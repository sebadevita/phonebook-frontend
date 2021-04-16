import React from 'react'

export const Person = ({ name, number, idPerson, deletePerson }) => {
  const onDeletePerson = () => {
    deletePerson(idPerson)
  }

  return (
    <div>
      <p>{name} {number} <button onClick={onDeletePerson}>delete</button></p>
    </div>
  )
}
