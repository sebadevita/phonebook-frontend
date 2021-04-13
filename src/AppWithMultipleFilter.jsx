
// import React, { useState } from "react"

// import { Persons } from "./components/Persons.jsx"

// const App = () => {
//   const [persons, setPersons] = useState([
//     { id: 1, name: "Arto Hellas", number: "12-34567-8" },
//     { id: 2, name: "Seba De Vita", number: "87-65432-1" },
//   ])
//   const [newName, setNewName] = useState("")
//   const [newNumber, setNewNumber] = useState("")
//   const [nameFilter, setNameFilter] = useState("")
//   const [numberFilter, setNumberFilter] = useState()

//   const addPerson = (e) => {
//     e.preventDefault()

//     if (!personAlreadyExists(newName)) {
//       const personObject = {
//         id: persons.length + 1,
//         name: newName,
//         number: newNumber,
//       }

//       setPersons(persons.concat(personObject))
//       setNewName("")
//       setNewNumber("")
//     } else {
//       window.alert(`${newName} is already added to phonebook`)
//     }
//   }

//   const handleNameChange = (event) => {
//     setNewName(event.target.value)
//   }

//   const handleNumberChange = (event) => {
//     setNewNumber(event.target.value)
//   }


//   const personAlreadyExists = (newName) => {
//     return persons.some((person) => person.name === newName)
//   }

//   const filteredPersons = () => {

//    return persons.filter(person => filterByName(person) && filterByNumber(person))
//   }

//   function filterByName (person){
//     return person.name.toLowerCase().includes(nameFilter.toLowerCase())

//   }

//   function filterByNumber(person){
//     return person.number.includes(numberFilter)
//   }


//   const handleInputFilterByName = (event) =>{
//     setNameFilter(event.target.value)
    
//   }

//   const handleInputFilterByNumber = (event) =>{
//     setNumberFilter(event.target.value)
//   }
//   return (
//     <div>
//       <h1>Phonebook</h1>

  


//       <p>Filter by...</p>
//       <label>Name:</label><input onChange={handleInputFilterByName} />
//       <label>Number:</label><input onChange={handleInputFilterByNumber} />

//       <h2>Add a new...</h2>
//       <form onSubmit={addPerson}>
//         <div>
//           <p>
//             name: <input value={newName} onChange={handleNameChange} />
//           </p>
//           <p>
//             number: <input value={newNumber} onChange={handleNumberChange} />
//           </p>
//         </div>
//         <div>
//           <button type="submit">add</button>
//         </div>
//       </form>
//       <h2>Numbers</h2>

//       { nameFilter || numberFilter ? (
//         <Persons persons={filteredPersons()} />
//       ) : (
//         <Persons persons={persons} />
//       )}

      
//     </div>
//   )
// }

// export default App
