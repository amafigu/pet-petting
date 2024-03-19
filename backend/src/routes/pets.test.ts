import supertest from 'supertest'
import { Pet } from '../entity/Pet'
import pets from '../mockData/pets'
import app from '../server'

const request = supertest(app)

jest.mock('../config/data-source.ts', () => ({
  AppDataSource: {
    getRepository: jest.fn().mockReturnValue({
      find: jest.fn().mockResolvedValue(pets)
    }),
    initialize: jest.fn().mockResolvedValue(Promise.resolve())
  }
}))

import { AppDataSource } from '../config/data-source'
describe('pet request should', () => {
  test('should return all pets', async () => {
    await AppDataSource.getRepository(Pet).find()
    const response = await request.get('/pets')
    expect(response.body).toEqual(pets)
  })
})
