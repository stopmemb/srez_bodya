import './App.css'
import { HomePage } from './pages/HomePage/HomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CatalogPage } from './pages/CatalogPage/CatalogPage'
import { ProductPage } from './pages/ProductPage/ProductPage'
import { UsersPage } from './pages/UsersPage/UsersPage'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavScrollExample from './components/HeaderComponent/HeaderComponent'

function App() {

  return (
    <>
      <NavScrollExample/>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/users' element={<UsersPage />} />
          <Route path='/catalog' element={<CatalogPage />} />
          <Route path='/catalog/:id' element={<ProductPage />} />
        </Routes>
    </>
  )
}

export default App
