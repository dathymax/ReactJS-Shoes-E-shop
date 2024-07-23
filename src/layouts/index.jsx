import React from 'react'
import LayoutHeader from './header'
import LayoutContent from './content'

const RootLayout = () => {
    return (
        <main>
            <LayoutHeader />
            <LayoutContent />
        </main>
    )
}

export default RootLayout