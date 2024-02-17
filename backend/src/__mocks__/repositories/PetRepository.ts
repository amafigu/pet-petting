import { type Pet } from '../../entity/Pet'
import Species from '../../enum/Species'

export class PetRepository {
  async create(pet: Pet): Promise<void> {}

  async getAll(): Promise<Pet[]> {
    return [
      {
        id: 1,
        name: 'Test Pet',
        species: Species.dog,
        birthday: new Date(),
        avatarUrl: 'jpg',
        breed: 'breedy',
        description: 'nice guy',
        isSick: false
      }
    ]
  }

  async findById(id: number): Promise<Pet | null> {
    return null
  }

  async update(id: number, pet: Partial<Pet>): Promise<void> {}

  async delete(id: number): Promise<void> {}
}
