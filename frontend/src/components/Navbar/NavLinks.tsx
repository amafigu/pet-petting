import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined'
import Link from '@mui/material/Link'
import { Link as RouterLink } from 'react-router-dom'

export function NavLinks() {
  return (
    <>
      <Link
        component={RouterLink}
        to="/"
        color="inherit"
        underline="none"
        sx={{ marginRight: 3, display: 'flex', alignItems: 'center' }}
      >
        {<HomeOutlinedIcon />}
      </Link>
      <Link
        component={RouterLink}
        to="/pets"
        color="inherit"
        underline="none"
        sx={{ display: 'flex', alignItems: 'center' }}
      >
        <PetsOutlinedIcon />
      </Link>
    </>
  )
}
