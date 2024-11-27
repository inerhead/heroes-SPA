import { Routes, Route } from 'react-router'
import { LoginPage } from '../auth'
import { HeroesRoutes } from '../heroes'

const AppRouter = () => {
  return (
    <>
    <Routes>
        
        <Route path="Login" element={<LoginPage />} />
        <Route path="/*" element={<HeroesRoutes />} />

    </Routes>
    </>
  )
}

export default AppRouter
