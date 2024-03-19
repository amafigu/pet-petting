import { PetsList } from 'components/pets/PetsList'
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
