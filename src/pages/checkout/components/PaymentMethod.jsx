import { Collapse, Form, Radio } from 'antd'
import React, { useState } from 'react'
import money from "../../../assets/payment/money.svg"
import bank from "../../../assets/payment/bank.svg"
import wallet from "../../../assets/payment/wallet.svg"
import visa from "../../../assets/payment/visa.svg"
import mastercard from "../../../assets/payment/mastercard.svg"
import momo from "../../../assets/payment/momo.svg"
import moca from "../../../assets/payment/moca.svg"
import payoo from "../../../assets/payment/payoo.svg"
import PaymentMethodVisaForm from './VisaForm'

const CheckoutPaymentMethod = () => {
    const [paymentMethod, setPaymentMethod] = useState("cash");

    const handleChange = (e) => {
        setPaymentMethod(e.target.value);
    }

    return (
        <div className='checkout-page__payment-method'>
            <h2 className="text-20 font-bold mb-5">Payment method</h2>

            <Form.Item name={"paymentMethod"}>
                <Radio.Group className='w-full' onChange={handleChange}>
                    <div className={`expedition__item`}>
                        <Radio value={"cash"} className='w-full'>
                            <div className='flex items-center justify-between w-full'>
                                <div className="flex items-center gap-2">
                                    <img src={money} alt="Cash" />
                                    <p className='font-semi'>Payment on delivery</p>
                                </div>
                            </div>
                        </Radio>
                    </div>

                    <Collapse defaultActiveKey={["bank"]}>
                        <Collapse.Panel
                            key={"bank"}
                            header={<div className='flex items-center gap-2'>
                                <img src={bank} alt="Bank" />
                                <p className="font-semi">VA & Bank Transfer</p>
                            </div>}
                        >
                            <Radio value={"visa"} className='w-full mb-4'>
                                <img src={visa} alt="visa" />
                            </Radio>

                            {paymentMethod === "visa" && <PaymentMethodVisaForm />}

                            <Radio value={"mastercard"} className='w-full mb-4'>
                                <img src={mastercard} alt="mastercard" />
                            </Radio>
                        </Collapse.Panel>
                    </Collapse>

                    <div style={{ height: 10 }}></div>

                    <Collapse defaultActiveKey={["e-wallet"]}>
                        <Collapse.Panel
                            key={"e-wallet"}
                            header={<div className='flex items-center gap-2'>
                                <img src={wallet} alt="E-Wallet" />
                                <p className="font-semi">E-Wallet</p>
                            </div>}
                        >
                            <Radio value={"momo"} className='w-full mb-4'>
                                <img src={momo} alt="Momo" />
                            </Radio>

                            <Radio value={"moca"} className='w-full mb-4'>
                                <img src={moca} alt="moca" />
                            </Radio>

                            <Radio value={"payoo"} className='w-full mb-4'>
                                <img src={payoo} alt="payoo" />
                            </Radio>
                        </Collapse.Panel>
                    </Collapse>
                </Radio.Group>
            </Form.Item>
        </div>
    )
}

export default CheckoutPaymentMethod