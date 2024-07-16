import React from 'react'
import logo from "../../../assets/Logo.png"

const Navigation = () => {
    const navItems = [
        { label: "New Arrived", key: "newArrived" },
        { label: "Men", key: "men" },
        { label: "Women", key: "women" },
        { label: "Kids", key: "kids" },
    ]

    return (
        <nav className='header__navigation'>
            <div className="header__navigation-inner">
                <img src={logo} alt="Logo" className='header__navigation-logo' />

                <ul>
                    {navItems.map(item => {
                        return (
                            <li key={item.key}>
                                {item.label}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </nav>
    )
}

export default Navigation