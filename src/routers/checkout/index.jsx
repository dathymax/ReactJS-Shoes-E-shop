import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CheckoutPage from '../../pages/checkout'
import CheckoutSuccessPage from '../../pages/checkout-success'

const CheckoutRouters = () => {
    return (
        <Routes>
            <Route path='/' element={<CheckoutPage />} />
            <Route path='/success' element={<CheckoutSuccessPage />} />
        </Routes>
    )
}

export default CheckoutRouters