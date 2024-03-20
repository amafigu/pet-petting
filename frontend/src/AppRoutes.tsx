import { Navbar } from '@/components/Navbar'
import { NavbarMenuItems } from '@/components/Navbar/NavbarMenuItems'
import { Route, Routes } from 'react-router-dom'

export const AppRoutes: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        {NavbarMenuItems.map(({ path, Component }, index) => (
          <Route key={index} path={path} element={<Component />} />
        ))}
      </Routes>
    </>
  )
}
