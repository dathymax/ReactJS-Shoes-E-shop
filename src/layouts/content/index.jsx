import React from 'react'
import { Outlet } from 'react-router-dom'

const LayoutContent = () => {
    return (
        <div>
            <Outlet />
        </div>
    )
}

export default LayoutContent