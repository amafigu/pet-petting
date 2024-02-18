import axios from 'axios'

export const getAllPets = () => axios.get('pets/')
export const getPetById = (id: number) => axios.get(`pets/${id}`)
export const createPet = (data: object) => axios.post('pets/', data)
export const updatePet = (id: number, data: object) =>
  axios.put(`pets/${id}`, data)
export const deletePet = (id: number) => axios.delete(`pets/${id}`)
