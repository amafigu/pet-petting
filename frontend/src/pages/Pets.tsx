import { PetsList } from '@/components/pets/PetsList'
import React from 'react'
import styles from './pets.module.scss'
export const Pets: React.FC = () => {
  return (
    <div className={styles.container}>
      Pets Page
      <div>
        <PetsList />
      </div>
    </div>
  )
}
