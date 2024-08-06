import { Button, Divider, Tabs } from 'antd'
import React from 'react'
import { productCart } from '../../../data/data'
import ProductInfoInCartPage from '../../../components/product/InfoInCartPage'

const Ordered = () => {
    const tabs = [
        { label: "All", key: "All" },
        { label: "Waiting Payment", key: "Waiting Payment" },
        { label: "Order On Process", key: "Order On Process" },
        { label: "In delivery", key: "In delivery" },
        { label: "Complete Order", key: "Complete Order" },
        { label: "Refund", key: "Refund" },
    ]

    return (
        <div className='col-span-4 flex flex-col gap-4 ordered'>
            <div className="p-4 bg-white w-full">
                <div className="flex items-center justify-between mb-2">
                    <p className="text-20 font-semi">Order List</p>
                </div>

                <Tabs items={tabs} defaultActiveKey='All' />
            </div>

            <div className="p-4 bg-white w-full">
                <div className="flex items-center justify-between">
                    <p className='text-20 font-bold'><span className='text-gray'>Order ID: </span><span>430960</span></p>

                    <p className='ordered__status'>In delivery</p>
                </div>

                <Divider />

                <table>
                    <tbody>
                        {productCart.map(product => {
                            return (
                                <tr key={product.id}>
                                    <td>
                                        <ProductInfoInCartPage product={product} />
                                    </td>
                                    <td>{product.quantity} x {product.price}</td>
                                    <td>{Number(product.quantity) * Number(product.price)}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>

                <div className="flex justify-end mt-4">
                    <Button type="primary">Detail</Button>
                </div>
            </div>
        </div>
    )
}

export default Ordered