import { type Request, type Response } from 'express'
import { PetController } from '../controller/PetController'
import { expectedPets } from '../utils/pets'

jest.mock('../repositories/PetRepository', () => ({
  __esModule: true,
  PetRepository: {
    getAll: jest.fn().mockResolvedValue(expectedPets)
  }
}))

describe('PetController should', () => {
  let mockResponse: Partial<Response>

  beforeEach(() => {
    mockResponse = { status: jest.fn().mockReturnThis(), json: jest.fn() }
  })

  test('should return all pets', async () => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { PetRepository } = require('../repositories/PetRepository')
    PetRepository.getAll.mockResolvedValue(expectedPets)

    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const controller = new PetController(PetRepository)
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    const req = {} as Request
    const res = mockResponse as Response

    await controller.getAll(req, res)

    expect(res.json).toHaveBeenCalledWith(expectedPets)
  })
})
