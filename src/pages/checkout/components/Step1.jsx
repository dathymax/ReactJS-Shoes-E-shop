import React from 'react'
import CheckoutSummaryOrder from './SummaryOrder'
import CheckoutShippingDetails from './ShippingDetails'

const CheckoutStep1 = ({ productCart }) => {
    return (
        <div className="flex-1 flex flex-col gap-5">
            <CheckoutSummaryOrder productCart={productCart} />

            <CheckoutShippingDetails />
        </div>
    )
}

export default CheckoutStep1