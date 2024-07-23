import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../../pages/home'

const HomeRouters = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
        </Routes>
    )
}

export default HomeRouters