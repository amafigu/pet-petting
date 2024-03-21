import { styled } from '@mui/material/styles'

export const HomePageWrapper = styled('main')(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '90vh',
  backgroundImage: `url(${process.env.PUBLIC_URL}/assets/banner/home.jpg)`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'
}))
