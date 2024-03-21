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
    <Grid container spacing={1} sx={{ padding: 4 }}>
      {pets.map((pet, index) => (
        <Grid item sm={6} md={4} key={index}>
          <PetCard pet={pet} />
        </Grid>
      ))}
    </Grid>
  )
}
