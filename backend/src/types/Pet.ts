import type Species from '../enum/Species'

interface Pet {
  id: number
  avatarUrl: string
  birthday: Date
  breed: string
  description: string
  isSick: boolean
  name: string
  species: Species
}

export default Pet
