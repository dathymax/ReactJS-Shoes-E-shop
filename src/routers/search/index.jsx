import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SearchPage from '../../pages/search'

const SearchRouters = () => {
    return (
        <Routes>
            <Route path='/' element={<SearchPage />} />
        </Routes>
    )
}

export default SearchRouters