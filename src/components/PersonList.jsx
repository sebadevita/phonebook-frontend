import React from 'react'
import {Person} from './Person.jsx'

export const PersonList = ({ persons, deletePerson }) => {
    return (
     <div>
       {persons.map((person) => (
         <Person 
         key={person.id} 
         name={person.name} 
         number={person.number}
         idPerson={person.id}
         deletePerson={deletePerson}
         />
       ) 
       )}
     </div> 
    )
  }