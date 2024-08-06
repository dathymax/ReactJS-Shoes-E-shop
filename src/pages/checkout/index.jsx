import React, { useEffect, useState } from 'react'
import "./styles.scss"
import CheckoutSteps from './components/Steps';
import { productCart } from '../../data/data';
import CheckoutPriceSummary from './components/PriceSummary';
import { Form } from 'antd';
import CheckoutStep1 from './components/Step1';
import CheckoutPaymentMethod from './components/PaymentMethod';
import { useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
    const navigate = useNavigate();
    const [steps, setSteps] = useState([1]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const handleNextStep = () => {
        if (steps.length === 2) {
            navigate("/checkout/success")
        } else {
            setSteps(prev => [...prev, prev.length + 1]);
        }
    }

    const handlePrevStep = () => {
        setSteps(prev => {
            prev.pop();

            return prev;
        });
    }

    return (
        <section className='checkout-page'>
            <div className="container">
                <CheckoutSteps steps={steps} />

                <div className="h-10"></div>

                <Form layout='vertical' initialValues={{ expedition: "ghn", paymentMethod: "cash" }}>
                    <div className="flex items-start gap-10">
                        {steps[steps.length - 1] === 1 && <CheckoutStep1 productCart={productCart} />}

                        {steps[steps.length - 1] === 2 && <CheckoutPaymentMethod />}

                        <CheckoutPriceSummary steps={steps} handleNextStep={handleNextStep} />
                    </div>
                </Form>
            </div>
        </section>
    )
}

export default CheckoutPage