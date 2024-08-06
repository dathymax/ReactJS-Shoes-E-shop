import React, { useState } from 'react'
import "./styles.scss"
import ProductInCartPage from '../../components/product/InCartPage'
import { Button, Modal } from 'antd'
import { useNavigate } from 'react-router-dom'
import ProductRemove from '../../components/product/Remove'
import { productCart } from '../../data/data'
import Empty from '../../components/cart/Empty'

const CartPage = () => {
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
            </> : <Empty title='Empty shopping cart' description="You don't have any products in your cart." />}
        </section>
    )
}

export default CartPage