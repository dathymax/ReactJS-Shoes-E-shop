import React from 'react'
import { HiOutlineArrowRight } from "react-icons/hi";

const CheckoutSteps = ({ steps }) => {
    return (
        <div className='flex items-center gap-8'>
            <div className="flex items-center gap-2" style={{ color: steps?.includes(1) ? "#161D25" : "#959EAD" }}>
                <div className='checkout-page__step-number' style={{ backgroundColor: steps?.includes(1) ? "#161D25" : "#959EAD" }}>1</div>
                <p>Shipping details</p>
            </div>

            <HiOutlineArrowRight style={{ color: "#959EAD" }} />

            <div className="flex items-center gap-2" style={{ color: steps?.includes(2) ? "#161D25" : "#959EAD" }}>
                <div className='checkout-page__step-number' style={{ backgroundColor: steps?.includes(2) ? "#161D25" : "#959EAD" }}>2</div>
                <p>Payment methods</p>
            </div>
        </div>
    )
}

export default CheckoutSteps