import { type Request, type Response } from 'express'
import { PetController } from '../controller/PetController'
import { type Pet } from '../entity/Pet'

const { PetRepository } = jest.requireActual('../repositories/PetRepository')

jest.mock('../repositories/PetRepository', () => {
  return {
    PetRepository: jest.fn().mockImplementation(() => ({
      getAll: jest.fn().mockResolvedValue([
        {
          id: 1,
          name: 'Test Pet',
          species: 'DOG',
          birthday: new Date(),
          avatarUrl: 'jpg',
          breed: 'breedy',
          description: 'nice guy',
          isSick: false
        }
      ] as Pet[])
    }))
  }
})

describe('PetController should', () => {
  let mockResponse: Partial<Response>

  beforeEach(() => {
    mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    }
  })

  test('should return all pets', async () => {
    const mockedRepo = new PetRepository()
    const controller = new PetController(mockedRepo)
    const req = {} as Request
    const res = mockResponse as Response

    await controller.getAll(req, res)
    expect(res.status).toHaveBeenCalledWith(expect.anything())
  })
})
