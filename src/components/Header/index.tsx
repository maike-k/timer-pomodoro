import { HeaderContainer } from './styles'
import LogoInite from '../../assets/Logo_ignite.svg'
import { Timer, Scroll } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { Home } from '../../pages'
import { History } from '../../pages/History'
export function Header() {
  return (
    <HeaderContainer>
      <img src={LogoInite} alt="" />
      <nav>
        <NavLink to="/">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
