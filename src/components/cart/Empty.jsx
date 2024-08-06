import React from 'react'
import empty from "../../assets/actions/no-data.svg"
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'

const Empty = ({ title = "", description = "" }) => {
    const navigate = useNavigate();

    return (
        <div className='flex items-center justify-center gap-3 flex-col' style={{ width: 400, margin: "auto" }}>
            <img src={empty} alt="Empty cart" />
            <p className="text-20 font-bold">{title}</p>
            <p className="text-14-bbb">{description}</p>

            <Button type="primary" block size="large" onClick={() => navigate("/products")}>Continue shopping</Button>
        </div>
    )
}

export default Empty