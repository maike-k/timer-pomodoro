// Para gerenciar as minha páginas

import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/home'
import { History } from '../pages/History'
import { DefaultLayouts } from '../layouts/DefaultLayouts'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayouts />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  )
}
