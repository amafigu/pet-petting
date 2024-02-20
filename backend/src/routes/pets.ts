import express, { Request, Response } from 'express'
import { AppDataSource } from '../config/data-source'
import { Pet } from '../entity/Pet'

const petModel = AppDataSource.getRepository(Pet)

const router = express.Router()

router.post('/', async (req: Request, res: Response) => {
  try {
    const pet = petModel.create(req.body as Pet)
    await petModel.save(pet)
    res.status(201).json({ message: 'Pet created successfully' })
  } catch (error) {
    res.status(400).json({ error: 'Error creating pet' })
  }
})

router.get('/', async (req: Request, res: Response) => {
  try {
    const pets = await petModel.find()
    res.status(200).json(pets)
  } catch (error) {
    res.status(400).json({ error: 'Error fetching pets' })
  }
})

router.get('/:id', async (req: Request, res: Response) => {
  const id = parseInt(req.params.id)
  try {
    const pet = await petModel.findOneBy({ id })
    if (pet === null || pet === undefined) {
      return res.status(404).json({ message: 'Pet not found' })
    }
    return res.status(200).json(pet)
  } catch (error) {
    res.status(400).json({ error: 'Error fetching pet' })
  }
})

router.put('/:id', async (req, res) => {
  const id = parseInt(req.params.id)
  const petData: Partial<Pet> = req.body
  try {
    const pet = await petModel.findOneBy({ id })
    if (pet === null || pet === undefined) {
      return res.status(404).json({ message: 'Pet not found' })
    }
    await petModel.update({ id }, petData)
    return res.status(200).json({ message: 'Pet updated successfully' })
  } catch (error) {
    return res.status(400).json({ error: 'Error updating pet' })
  }
})

router.delete('/:id', async (req, res) => {
  const id = parseInt(req.params.id)
  try {
    await petModel.delete(id)
    res.status(204).json({ message: 'Pet successfully deleted' })
  } catch (err) {
    res.status(500).json({ error: 'Error deleting pet' })
  }
})

export default router
