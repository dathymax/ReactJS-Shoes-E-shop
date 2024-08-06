import { Button, Divider, Form, Select } from 'antd'
import React from 'react'

const CheckoutPriceSummary = ({ steps, handleNextStep }) => {
    return (
        <div className='checkout-page__price-summary'>
            <h2 className="text-20 font-bold mb-5">Price Summary</h2>

            <Form.Item name={"promoCode"} label={<p className='text-14 font-semi'>Promo code</p>}>
                <Select placeholder={"Select promo code"} size='large' className='w-full' />
            </Form.Item>

            <Divider />

            <div className="flex items-center justify-between mb-4">
                <p className='text-16-5f'>Total Shopping</p>
                <p className='font-semi'>$ 1,800.00</p>
            </div>

            <div className="flex items-center justify-between mb-4">
                <p className='text-16-5f'>Shipping</p>
                <p className='font-semi'>$ 10.00</p>
            </div>

            <div className="flex items-center justify-between mb-4">
                <p className='text-16-5f'>Tax</p>
                <p className='font-semi'>$ 10.00</p>
            </div>

            <div className="flex items-center justify-between mb-4">
                <p className='text-16 text-primary'>Discount</p>
                <p className='font-semi text-primary'>-$ 50.00</p>
            </div>

            <Divider />

            <div className="flex items-center justify-between text-20 font-bold">
                <p>Subtotal</p>
                <p>$ 1,770.00</p>
            </div>

            <Divider />

            <Button size="large" block type='primary' onClick={handleNextStep}>
                {steps[steps.length - 1] === 1 && "Continue to payment"}
                {steps[steps.length - 1] === 2 && "Confirm payment"}
            </Button>
        </div>
    )
}

export default CheckoutPriceSummary