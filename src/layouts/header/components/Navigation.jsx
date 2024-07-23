import React from 'react'
import logo from "../../../assets/Logo.png"
import { useNavigate } from 'react-router-dom'
import Search from './Search'
import Favourite from './Favourite'
import Cart from './Cart'
import fire from "../../../assets/icon/Fire.png"
import AuthService from './Auth'

const navItems = [
    {
        label: <div className='flex items-center'>
            <span>New Arrived</span>
            <img src={fire} alt="Fire" style={{ margin: "0 10px" }} />
        </div>,
        key: "newArrived"
    },
    { label: "Men", key: "men" },
    { label: "Women", key: "women" },
    { label: "Kids", key: "kids" },
]

const Navigation = () => {
    const navigate = useNavigate();

    const handleBackHome = () => {
        navigate("/")
    }

    return (
        <nav className='header__navigation'>
            <div className="header__navigation-inner">
                <img src={logo} alt="Logo" className='header__navigation-logo cursor-pointer' onClick={handleBackHome} />

                <ul className='flex-1 flex items-center gap-2'>
                    {navItems.map(item => {
                        return (
                            <li key={item.key}>
                                {item.label}
                            </li>
                        )
                    })}
                </ul>

                <div className="flex items-center gap-2">
                    <Search />

                    <Favourite />

                    <Cart />

                    <AuthService />
                </div>
            </div>
        </nav>
    )
}

export default Navigation