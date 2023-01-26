import { Header } from '../components/Header'
import { Outlet } from 'react-router-dom'
export function DefaulLayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}
