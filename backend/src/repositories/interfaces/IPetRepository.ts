import { type Pet } from '../../entity/Pet'

export interface IPetRepository {
  create(pet: Pet): Promise<void>
  findById(id: number): Promise<Pet | null>
  getAll(): Promise<Pet[]>
  update(
    id: number,
    pet: Partial<Pet>
  ): Promise<{ success: boolean; message?: string }>
  delete(id: number): Promise<{ success: boolean; message?: string }>
}
