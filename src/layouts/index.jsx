import React from 'react'
import LayoutHeader from './header'
import LayoutContent from './content'
import LayoutFooter from './footer'

const RootLayout = () => {
    return (
        <main>
            <LayoutHeader />
            <LayoutContent />
            <LayoutFooter />
        </main>
    )
}

export default RootLayout