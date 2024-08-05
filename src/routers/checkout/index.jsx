import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CheckoutPage from '../../pages/checkout'

const CheckoutRouters = () => {
    return (
        <Routes>
            <Route path='/' element={<CheckoutPage />} />
        </Routes>
    )
}

export default CheckoutRouters