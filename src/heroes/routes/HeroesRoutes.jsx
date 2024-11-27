import { Routes, Route, Navigate } from 'react-router'
import { MarvelPage, DcPage, HeroPage, SearchPage} from '../'
import { Navbar } from '../../ui'

export const HeroesRoutes = () => {
  return (
    <>
        <Navbar/>
        <div className='container'>
            <Routes>
                <Route path="Marvel" element={<MarvelPage />} />
                <Route path="Dc" element={<DcPage />} />
                <Route path="search" element={<SearchPage />} />
                <Route path="hero/:id" element={<HeroPage />} />

                <Route path="/" element={<Navigate to="/Dc" />} />
            </Routes>
        </div>
    </>
  )
}
