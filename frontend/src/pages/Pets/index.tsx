import { Box, Typography } from '@mui/material'
import { PetsList } from './PetsList'

export const Pets: React.FC = () => {
  return (
    <main aria-label="Home page">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          minHeight: '90vh',
          backgroundImage: `url(${process.env.PUBLIC_URL}/assets/banner/pets.jpg)`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
      >
        <Typography
          variant="h3"
          component="h3"
          sx={{ color: 'white', textAlign: 'center' }}
        >
          Our Pets
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: 'auto',
            marginTop: '32px'
          }}
        >
          <PetsList />
        </Box>
      </Box>
    </main>
  )
}
