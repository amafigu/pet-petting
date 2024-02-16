import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import type Species from '../enum/Species'

@Entity()
export class Pet {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  avatarUrl!: string

  @Column()
  birthday!: Date

  @Column()
  breed!: string

  @Column('text', { nullable: true })
  description?: string

  @Column()
  isSick!: boolean

  @Column({
    length: 100
  })
  name!: string

  @Column()
  species!: Species
}
