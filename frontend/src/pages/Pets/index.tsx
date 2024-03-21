import { ListContainer } from '@/components/ui/ListContainer'
import { Box, Typography } from '@mui/material'
import { PetsList } from './PetsList'
import { PetsPageWrapper } from './PetsPageWrapper'

export const Pets: React.FC = () => {
  return (
    <PetsPageWrapper>
      <Box>
        <Typography
          variant="h3"
          component="h1"
          mt={3}
          sx={{ color: 'white', textAlign: 'center' }}
        >
          Our Pets
        </Typography>
        <ListContainer>
          <PetsList />
        </ListContainer>
      </Box>
    </PetsPageWrapper>
  )
}
