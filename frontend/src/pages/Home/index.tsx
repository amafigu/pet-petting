import { Box, Typography } from '@mui/material'
import React from 'react'

export const Home: React.FC = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '90vh',
          backgroundImage: `url(${process.env.PUBLIC_URL}/assets/banner/home.jpg)`,
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
          Let us take care of homeless pets
        </Typography>
      </Box>
    </>
  )
}
