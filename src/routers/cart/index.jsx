import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CartPage from '../../pages/cart'

const CartRouters = () => {
    return (
        <Routes>
            <Route path='/' element={<CartPage />} />
        </Routes>
    )
}

export default CartRouters