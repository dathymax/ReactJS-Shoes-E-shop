import { Divider, Form, Input, Radio } from 'antd'
import React, { useState } from 'react'
import ghn from "../../../assets/shipping/ghn.svg"
import ninja from "../../../assets/shipping/ninja.svg"

const CheckoutShippingDetails = () => {
    const [shippingType, setShippingType] = useState("ghn");

    const handleChange = (e) => {
        setShippingType(e.target.value);
    }

    return (
        <div className="checkout-page__shipping-details">
            <h2 className="text-20 font-bold mb-8">Shipping Details</h2>

            <Form.Item
                label={<p className='text-14 font-bold'>Address</p>}
                name="address"
            >
                <Input placeholder={"Add shipping address"} size="large" />
            </Form.Item>

            <Divider />

            <Form.Item
                label={<p className='text-14 font-bold'>Expedition</p>}
                name="expedition"
            >
                <Radio.Group style={{ width: "100%" }} onChange={handleChange}>
                    <div className={`expedition__item ${shippingType === "ghn" ? "active" : ""}`}>
                        <Radio value={"ghn"} className='w-full'>
                            <div className='flex items-center justify-between w-full'>
                                <div className="flex items-center gap-2">
                                    <img src={ghn} alt="Giao hang nhanh icon" />
                                    <p className='font-semi'>GHN Express (1 Day)</p>
                                </div>

                                <p className='font-semi'>$ 12.00</p>
                            </div>
                        </Radio>
                    </div>

                    <div className={`expedition__item ${shippingType === "ninja" ? "active" : ""}`}>
                        <Radio value={"ninja"} className='w-full' children={<div>1</div>}>
                            <div className='flex items-center justify-between w-full'>
                                <div className="flex items-center gap-2">
                                    <img src={ninja} alt="Ninja van icon" />
                                    <p className='font-semi'>Ninja van (2-3 Days)</p>
                                </div>

                                <p className='font-semi'>Free</p>
                            </div>
                        </Radio>
                    </div>
                </Radio.Group>
            </Form.Item>

            <Form.Item
                label={<p className='text-14 font-bold'>Add Delivery Instructions</p>}
                name="instruction"
            >
                <Input.TextArea placeholder='Write your instructions....' autoSize={{ minRows: 4, maxRows: 6 }} />
            </Form.Item>
        </div>
    )
}

export default CheckoutShippingDetails