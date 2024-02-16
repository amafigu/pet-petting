// src/controllers/PetController.ts
import { type Request, type Response } from 'express'
import { type Pet } from '../entity/Pet'
import { type PetRepository } from '../repositories/PetRepository'

export class PetController {
  constructor(private readonly repository: PetRepository) {}

  async create(req: Request, res: Response): Promise<Response> {
    try {
      await this.repository.create(req.body as Pet)
      return res.status(201).json({ message: 'Pet created successfully' })
    } catch (error) {
      return res.status(400).json({ error: 'Error creating pet' })
    }
  }

  async getAll(req: Request, res: Response): Promise<Response> {
    try {
      const pets = await this.repository.getAll()
      return res.status(200).json(pets)
    } catch (error) {
      return res.status(400).json({ error: 'Error fetching pets' })
    }
  }

  async findById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    try {
      const pet = await this.repository.findById(parseInt(id))
      if (pet === null || pet === undefined) {
        return res.status(404).json({ message: 'Pet not found' })
      }
      return res.status(200).json(pet)
    } catch (error) {
      return res.status(400).json({ error: 'Error finding pet' })
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    const petData: Partial<Pet> = req.body
    try {
      const pet = await this.repository.findById(parseInt(id))
      if (pet === null || pet === undefined) {
        return res.status(404).json({ message: 'Pet not found' })
      }
      await this.repository.update(parseInt(id), petData)
      return res.status(200).json({ message: 'Pet updated successfully' })
    } catch (error) {
      return res.status(400).json({ error: 'Error updating pet' })
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    try {
      await this.repository.delete(parseInt(id))
      return res.status(204).send()
    } catch (error) {
      return res.status(400).json({ error: 'Error deleting pet' })
    }
  }
}
