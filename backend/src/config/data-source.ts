import dotenv from 'dotenv'
import { DataSource } from 'typeorm'
import { Pet } from '../entity/Pet'

dotenv.config()
const DbPort = process.env.DB_PORT != null ? Number(process.env.DB_PORT) : 5432
export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: DbPort,
  username: process.env.DB_USER,
  password: process.env.password,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: true,
  entities: [Pet],
  subscribers: [],
  migrations: []
})
