import supertest from 'supertest'
import pets from '../../__mocks__/data/pets'
import { AppDataSource } from '../../config/data-source'
import { Pet } from '../../entity/Pet'
import app from '../../server'

const request = supertest(app)

jest.mock('../../config/data-source.ts', () => ({
  AppDataSource: {
    getRepository: jest.fn().mockReturnValue({
      find: jest.fn().mockResolvedValue(pets)
    }),
    initialize: jest.fn().mockResolvedValue(Promise.resolve())
  }
}))

describe('pet request should', () => {
  test('should return all pets', async () => {
    await AppDataSource.getRepository(Pet).find()
    const response = await request.get('/pets').send(pets)
    expect(response.body).toEqual(pets)
  })
})
