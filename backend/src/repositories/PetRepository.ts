import { type Repository } from 'typeorm'
import { type Pet } from '../entity/Pet'
import { type IPetRepository } from './interfaces/IPetRepository'

export class PetRepository implements IPetRepository {
  private readonly repo: Repository<Pet>

  constructor(repo: Repository<Pet>) {
    this.repo = repo
  }

  async create(pet: Pet): Promise<void> {
    await this.repo.save(pet)
  }

  async getAll(): Promise<Pet[]> {
    return await this.repo.find()
  }

  async findById(id: number): Promise<Pet | null> {
    return await this.repo.findOneBy({ id })
  }

  async update(id: number, pet: Partial<Pet>): Promise<void> {
    await this.repo.update(id, pet)
  }

  async delete(id: number): Promise<void> {
    await this.repo.delete(id)
  }
}
