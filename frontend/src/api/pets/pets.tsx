import { IPet } from '@/types/IPet'
import { AxiosResponse } from 'axios'
import instance from '../api'

export const getAllPets = (): Promise<AxiosResponse<IPet[]>> =>
  instance.get<IPet[]>('pets/')
export const getPetById = (id: number): Promise<AxiosResponse<IPet> | null> =>
  instance.get(`pets/${id}`)
export const createPet = (data: object): Promise<AxiosResponse<void>> =>
  instance.post('pets/', data)
export const updatePet = (
  id: number,
  data: object
): Promise<AxiosResponse<void>> => instance.put(`pets/${id}`, data)
export const deletePet = (id: number): Promise<AxiosResponse<void>> =>
  instance.delete(`pets/${id}`)
