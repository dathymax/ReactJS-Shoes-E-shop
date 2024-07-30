import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProductsPage from '../../pages/products'
import ProductPage from '../../pages/product'

const ProductRouters = () => {
    return (
        <Routes>
            <Route path='/' element={<ProductsPage />} />
            <Route path='/:id' element={<ProductPage />} />
        </Routes>
    )
}

export default ProductRouters