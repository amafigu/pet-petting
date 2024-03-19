import { getAllPets } from 'api/pets/pets'
import { useEffect, useState } from 'react'
import { IPet } from 'types/IPet'

export const PetsList: React.FC = () => {
  const [pets, setPets] = useState<IPet[]>([])
  useEffect(() => {
    const getPets = async () => {
      try {
        const allPetsResponse = await getAllPets()
        console.log(allPetsResponse.data)
        setPets(allPetsResponse.data)
      } catch (error) {
        console.error('Can not get pets', error)
      }
    }

    getPets()
  }, [])
  return (
    <ul>
      {pets.map((pet, index) => (
        <li key={index}>
          <ul>
            <img src={pet.avatarUrl} alt={pet.name} />
            <li>Id:{pet.id}</li>
            <li>Name:{pet.name}</li>
            <li>Specie:{pet.species}</li>
            <li>{pet.breed}</li>
            <li>{pet.description}</li>
            <li>{String(pet.isSick)}</li>
            <li>{new Date(pet.birthday).toLocaleDateString()}</li>
          </ul>
        </li>
      ))}
    </ul>
  )
}
