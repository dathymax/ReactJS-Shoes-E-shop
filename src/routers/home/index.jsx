import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../../pages/home'
import WishListPage from '../../pages/wishlist'
import ProfilePage from '../../pages/profile'

const HomeRouters = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/wishlist' element={<WishListPage />} />
            <Route path='/profile' element={<ProfilePage />} />
        </Routes>
    )
}

export default HomeRouters