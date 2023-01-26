import { Routes, Route } from 'react-router-dom'
import { DefaulLayout } from '../layouts/DefaultLayout'
import { History } from '../pages/History'
import { Home } from '../pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaulLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  )
}
