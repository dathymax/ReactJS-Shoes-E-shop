import React from 'react'
import ProductInfoInCartPage from '../../../components/product/InfoInCartPage'

const CheckoutSummaryOrder = ({ productCart }) => {
    return (
        <div className="checkout-page__summary-order">
            <h2 className="text-20 font-bold">Summary Order</h2>

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
        </div>
    )
}

export default CheckoutSummaryOrder