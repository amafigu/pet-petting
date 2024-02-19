import dotenv from 'dotenv'
import { DataSource } from 'typeorm'
import { Pet } from '../entity/Pet'

const envFile =
  process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development'
dotenv.config({ path: envFile })

const url = process.env.DATABASE_URL

if (!url) {
  throw new Error('DATABASE_URL is not provided.')
}

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: url,
  synchronize: true,
  logging: true,
  entities: [Pet],
  subscribers: [],
  migrations: []
})
