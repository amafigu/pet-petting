import Grid from '@mui/material/Grid'
import { getPets } from 'api/pets/pets'
import React, { useEffect, useState } from 'react'
import { IPet } from 'types/IPet'
import { PetCard } from './PetCard'

export const PetsList: React.FC = () => {
  const [pets, setPets] = useState<IPet[]>([])

  useEffect(() => {
    const getAllPets = async () => {
      try {
        const response = await getPets()
        if (response && response.status === 200) {
          setPets(response.data)
        }
      } catch (error) {
        console.error('Can not get pets', error)
      }
    }
    getAllPets()
  }, [])

  return (
    <Grid container spacing={3} justifyContent="center">
      {pets.map((pet, index) => (
        <Grid
          item
          xs={12}
          sm={4}
          md={3}
          key={index}
          display={'flex'}
          justifyContent="center"
          mb={4}
        >
          <PetCard pet={pet} />
        </Grid>
      ))}
    </Grid>
  )
}
