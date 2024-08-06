import React from 'react'
import heart from "../../../assets/icon/heart.svg"
import { useNavigate } from 'react-router-dom'

const Favourite = () => {
    const navigate = useNavigate();

    return (
        <div>
            <img src={heart} alt="Hear" className='cursor-pointer' onClick={() => navigate("/wishlist")} />
        </div>
    )
}

export default Favourite