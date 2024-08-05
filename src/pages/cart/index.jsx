import React, { useState } from 'react'
import "./styles.scss"
import product1 from "../../assets/shoes/in-cart/no-discount-1.png"
import product2 from "../../assets/shoes/in-cart/no-discount-2.png"
import product3 from "../../assets/shoes/in-cart/no-discount-3.png"
import ProductInCartPage from '../../components/product/InCartPage'
import { Button, Modal } from 'antd'
import { useNavigate } from 'react-router-dom'
import ProductRemove from '../../components/product/Remove'
import CartEmpty from '../../components/cart/Empty'

const CartPage = () => {
    const productCart = [
        { id: 1, img: product1, category: "Nike Collection", shoeName: "Nike Template", price: 400, quantity: 3, originalPrice: 900, colorHex: "#171415", colorName: "Black", size: 43 },
        { id: 2, img: product2, category: "Nike Collection", shoeName: "Converse Booya", price: 400, quantity: 3, colorHex: "#91A3A8", colorName: "Light green", size: 43 },
        { id: 3, img: product3, category: "Nike Collection", shoeName: "Mcde ijue", price: 400, quantity: 3, colorHex: "#171415", colorName: "Black", size: 43 },
    ];
    const navigate = useNavigate();
    const [openClear, setOpenClear] = useState(false);

    return (
        <section className='container content cart'>
            <div className="flex items-center justify-between mb-10">
                <h1 className='text-36 font-bold'>My Shopping Cart</h1>

                {productCart.length > 0 && <p className='text-14 text-red font-semi cursor-pointer' onClick={() => setOpenClear(true)}>Remove all</p>}
            </div>

            {productCart.length > 0 ? <>
                <table>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>
                    </thead>

                    <tbody>
                        {productCart.map(product => {
                            return (
                                <tr key={product.id} className=''>
                                    <td><ProductInCartPage product={product} /></td>
                                    <td>${product.price}</td>
                                    <td>{product.quantity}</td>
                                    <td>${Number(product.quantity) * Number(product.price)}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>

                <div className='flex items-center justify-between mt-5' style={{ backgroundColor: "#FAFAFA", padding: "15px 10px", borderRadius: 5 }}>
                    <p className='text-14-bbb'>Taxes and shipping fee will be calculated at checkout</p>
                    <p className='text-20 font-bold'>Subtotal</p>
                    <p className='text-20 font-bold'>$ 3,010.00</p>
                </div>

                <div className="mt-5 flex items-center justify-end gap-5">
                    <Button style={{ width: 210 }} size="large" onClick={() => navigate("/products")}>Continue shopping</Button>
                    <Button style={{ width: 210 }} size="large" type="primary" onClick={() => navigate("/checkout")}>Checkout</Button>
                </div>

                <Modal open={openClear} onCancel={() => setOpenClear(false)} destroyOnClose closeIcon={null} footer={null}>
                    <ProductRemove />

                    <div className="flex items-center gap-6">
                        <Button type="primary" size="large" block onClick={() => setOpenClear(false)}>Remove</Button>
                        <Button size="large" block onClick={() => setOpenClear(false)}>Cancel</Button>
                    </div>
                </Modal>
            </> : <CartEmpty />}
        </section>
    )
}

export default CartPage