
import axios from 'axios'

const URI_API_PERSONS = 'https://phonebook-backend-express.herokuapp.com/api/persons/'


export const getAllPersons = async ()  => {
    const res = await axios.get(URI_API_PERSONS)
    return res.data
}

export const createPerson = async (newPerson) => {
    const res = await axios.post(URI_API_PERSONS, newPerson)
    return res.data
}

export const deletePerson = async (idPerson) => {
    return await axios.delete(URI_API_PERSONS + idPerson)
}

export const updatePerson = async (idPerson, person) => {
    return await axios.put(URI_API_PERSONS + idPerson, person)
}