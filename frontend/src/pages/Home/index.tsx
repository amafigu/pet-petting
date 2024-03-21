import { Box, Typography } from '@mui/material'
import React from 'react'
import { HomePageWrapper } from './HomePageWrapper'

export const Home: React.FC = () => {
  return (
    <HomePageWrapper>
      <Box>
        <Typography
          variant="h3"
          component="h1"
          mt={3}
          sx={{ color: 'white', textAlign: 'center' }}
        >
          Let us help homeless animals
        </Typography>
      </Box>
    </HomePageWrapper>
  )
}
