import { Button, Divider } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./styles.scss"
import success from "../../assets/icon/order-success.svg"
import truck from "../../assets/icon/truck.svg"
import bank from "../../assets/payment/bank.svg"
import ghn from "../../assets/shipping/ghn.svg"
import visa from "../../assets/payment/visa.svg"
import Copy from '../../components/copy'

const CheckoutSuccessPage = () => {
    const navigate = useNavigate();

    return (
        <div className='checkout-success'>
            <div className="checkout-success__content">
                <div className="flex items-center justify-center flex-col">
                    <img src={success} alt="Order success" />

                    <p className='text-24 font-semi'>Order successful</p>
                </div>

                <div className="success-section flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                        <img src={bank} alt="Bank icon" />

                        <p className='text-16'>VA & Bank Transfer</p>
                    </div>

                    <img src={visa} alt="Visa icon" />
                </div>

                <div className="flex items-center justify-between mb-4">
                    <p className="text-16-5f">
                        Virtual Account Number
                    </p>

                    <div className="flex items-center gap-3">
                        <Copy />

                        <p className='text-16 font-bold'>0009234442</p>
                    </div>
                </div>

                <div className="flex items-center justify-between text-16 font-bold">
                    <p>Total</p>
                    <p>$ 1,770.00</p>
                </div>

                <Divider />

                <div className="success-section flex items-center gap-3 mb-4">
                    <img src={truck} alt="Truck icon" />
                    <p className="text-16">Shipping method</p>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <img src={ghn} alt="Giao hang nhanh icon" />
                        <p className='text-16 font-semi'>GHN Express (1 Day)</p>
                    </div>

                    <p className='text-16 font-semi'>$ 12.00</p>
                </div>

                <Divider />

                <Button size="large" type="primary" block onClick={() => navigate("/products")}>
                    Continue shopping
                </Button>
            </div>
        </div>
    )
}

export default CheckoutSuccessPage