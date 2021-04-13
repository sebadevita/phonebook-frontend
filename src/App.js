import React, { useState, useEffect } from "react"

//Components
import { PersonList } from "./components/PersonList"
import { PersonForm } from "./components/PersonForm"
import { PersonFilter } from "./components/PersonFilter"
import { Notification } from './components/Notification'
import { Error } from './components/Error'

//PersonService

import * as PersonService from "./services/personService"

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")
  const [filterName, setFilterName] = useState("")
  const [sucessMessage, setSucessMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    async function fetchData() {
      setPersons(await PersonService.getAllPersons())
    }

    fetchData()
  }, [])

  const addPerson = async (e) => {
    e.preventDefault()

    if (!personAlreadyExists(newName)) {
      const personObject = {
        id: persons.length + 1,
        name: newName,
        number: newNumber,
      }

      try {
        const newPerson = await PersonService.createPerson(personObject)

      setPersons(persons.concat(newPerson))
      showSucessMessage(`${newName} was added to the phonebook!`)
      setNewName("")
      setNewNumber("")
      } catch (error) {
        showErrorMessage(`${newName} was already been added to the phonebook`)
      }
    } else {
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        const person = persons.find((person) => person.name === newName)
        const changedPerson = { ...person, number: newNumber }

        try {
          await PersonService.updatePerson(
            persons.find((person) => person.name === newName).id,
            changedPerson
          )

          setPersons(await PersonService.getAllPersons())
          showSucessMessage(`${newName}'s number was changed!`)
          setNewName("")
          setNewNumber("")

        } catch (error) {
          showErrorMessage(`'Information of ${findByName(newName).name}' has already been removed from server`)

        }
        
      }
    }
  }

  const showSucessMessage = (message) => {
    setSucessMessage(message)

    setTimeout(() =>{
      setSucessMessage(null)

    }, 2000)
    
  }

  const deletePerson = async (idPerson) => {
     if (confirmDelete(idPerson)){
      try {
        await PersonService.deletePerson(findById(idPerson).id)
      setPersons(await PersonService.getAllPersons())
      } catch (error) {
        showErrorMessage(`'Information of ${findById(idPerson).name}' has already been removed from server`)
        
      }
     }

    }

    const showErrorMessage = (message) => {
      setErrorMessage(message)
  
      setTimeout(() =>{
        setErrorMessage(null)
  
      }, 2000)
    }
  
  const confirmDelete = (idPerson) => {
    return (window.confirm(`Delete ${findById(idPerson).name} ?`))
  }

  const findById = (idPerson) => {
    return persons.find((person) => person.id === idPerson)
  }

  const findByName = (name) =>{
    return persons.find((person) => person.name === name)
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterName = (event) => {
    setFilterName(event.target.value)
  }

  const personAlreadyExists = (newName) => {
    return persons.some((person) => person.name === newName)
  }

  const filteredPersons = () => {
    return persons.filter((person) =>
      person.name.toLowerCase().includes(filterName.toLowerCase())
    )
  }

  const personsToShow = filterName ? filteredPersons() : persons

  return (
    <div>
      <h1>Phonebook</h1>

      <Notification message={sucessMessage}/>
      <Error message={errorMessage}/>

      <PersonFilter
        filterName={filterName}
        handleFilterName={handleFilterName}
      />

      <h2>Add a new...</h2>

      <PersonForm
        addPerson={addPerson}
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />

      <h2>Numbers</h2>

      <PersonList persons={personsToShow} deletePerson={deletePerson} />
    </div>
  )
}

export default App
