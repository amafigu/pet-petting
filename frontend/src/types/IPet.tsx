import { Species } from '@/enum/Species'

export interface IPet {
  id: number
  avatarUrl: string
  birthday: Date
  breed: string
  description: string
  isSick: boolean
  name: string
  species: Species
}
