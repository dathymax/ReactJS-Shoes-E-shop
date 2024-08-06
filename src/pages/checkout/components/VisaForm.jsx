import { DatePicker, Form, Input } from 'antd'
import React from 'react'

const PaymentMethodVisaForm = () => {
    return (
        <>
            <Form.Item name={"cardNumber"} label="Card Number">
                <Input placeholder='Card number' size="large" />
            </Form.Item>

            <Form.Item name={"cardName"} label="Name on card">
                <Input placeholder='Name on card' size="large" />
            </Form.Item>

            <Form.Item name={"expirationDate"} label="Expiration date">
                <DatePicker placeholder='dd/mm/yy' size="large" className='w-full' />
            </Form.Item>

            <Form.Item name={"securityCode"} label="Security code">
                <Input placeholder='Security code' size="large" />
            </Form.Item>
        </>
    )
}

export default PaymentMethodVisaForm