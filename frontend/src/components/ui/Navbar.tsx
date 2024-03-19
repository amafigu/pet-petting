import { NavLink } from 'react-router-dom'
import styles from './navbar.module.scss'

export const Navbar: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <nav>
        <ul>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) => (isActive ? styles.activeLink : '')}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/pets'
              className={({ isActive }) => (isActive ? styles.activeLink : '')}
            >
              Pets
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}
