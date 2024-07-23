import React from 'react'
import cart from "../../../assets/icon/ShoppingCart.png"

const Cart = () => {
    return (
        <div>
            <img src={cart} alt="Cart" className='cursor-pointer' />
        </div>
    )
}

export default Cart