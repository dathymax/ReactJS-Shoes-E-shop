import React from 'react'
import empty from "../../assets/actions/no-data.png"
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'

const CartEmpty = () => {
    const navigate = useNavigate();

    return (
        <div className='flex items-center justify-center gap-3 flex-col' style={{ width: 400, margin: "auto" }}>
            <img src={empty} alt="Empty cart" />
            <p className="text-20 font-bold">Empty shopping cart</p>
            <p className="text-14-bbb">You don't have any products in your cart.</p>

            <Button type="primary" block size="large" onClick={() => navigate("/products")}>Continue shopping</Button>
        </div>
    )
}

export default CartEmpty