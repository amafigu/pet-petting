import express from 'express'
import { AppDataSource } from '../config/data-source'
import { PetController } from '../controller/PetController'
import { PetRepository } from '../repositories/PetRepository'

const router = express.Router()
const petRepository = new PetRepository(AppDataSource.getRepository('Pet'))
const petController = new PetController(petRepository)

router.post('/', async (req, res) => await petController.create(req, res))
router.get('/', async (req, res) => await petController.getAll(req, res))
router.get('/:id', async (req, res) => await petController.findById(req, res))
router.put('/:id', async (req, res) => await petController.update(req, res))
router.delete('/:id', async (req, res) => await petController.delete(req, res))

export default router
