import { Navbar } from '@/components/ui/Navbar'
import { Route, Routes } from 'react-router-dom'
import { NavbarMenuItems } from './components/NavbarMenuItems'

export const AppRoutes: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        {NavbarMenuItems.map(({ path, Component }, index) => (
          <Route key={index} path={path} element={<Component />} />
        ))}
      </Routes>
    </div>
  )
}
