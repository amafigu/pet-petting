import { Home } from '@/pages/Home/index'
import { Pets } from 'pages/Pets/index'
import { FC } from 'react'

type NavbarLink = 'Home' | 'Pets'

interface INavbarMenuItems {
  label: NavbarLink
  path: string
  Component: FC
}

export const NavbarMenuItems: INavbarMenuItems[] = [
  {
    label: 'Home',
    path: '/',
    Component: Home
  },
  {
    label: 'Pets',
    path: '/pets',
    Component: Pets
  }
]
