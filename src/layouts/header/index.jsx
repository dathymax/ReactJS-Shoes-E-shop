import React from 'react'
import EventNotice from './components/EventNotice'
import "./styles.scss"
import Navigation from './components/Navigation'

const LayoutHeader = () => {
    return (
        <header className='header'>
            <EventNotice />
            <Navigation />
        </header>
    )
}

export default LayoutHeader