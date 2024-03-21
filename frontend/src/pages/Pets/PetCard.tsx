import { IPet } from '@/types/IPet'
import { List, ListItem, ListItemText } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import React from 'react'

interface PetCardProps {
  pet: IPet
}

export const PetCard: React.FC<PetCardProps> = ({ pet }) => {
  return (
    <Card sx={{ width: 320 }}>
      <CardMedia
        component="img"
        height="280"
        image={`${process.env.PUBLIC_URL}/assets/pets/${pet.avatarUrl}`}
        alt={`Picture of ${pet.name}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="span">
          {pet.name}
        </Typography>
        <List dense>
          <ListItem>
            <ListItemText primary="Description:" secondary={pet.description} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Breed:" secondary={pet.breed} />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Birthday:"
              secondary={new Date(pet.birthday).toLocaleDateString()}
            />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  )
}
