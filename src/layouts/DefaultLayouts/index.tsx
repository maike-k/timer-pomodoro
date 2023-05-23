import { Header } from '../../components/Header'
import { Outlet } from 'react-router-dom'

import { LayoutContainer } from './styles'

export const DefaultLayouts = () => {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  )
}
