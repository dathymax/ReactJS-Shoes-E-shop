import React from 'react'

const ProductShippingAndReturns = () => {
    const items = [
        {
            id: 1,
            title: "Online Order Return & Exchange Procedure",
            items: [
                {
                    id: 1,
                    title: "Confirmation Reason for Return",
                    content: "Lorem ipsum dolor sit amet consectetur. Porta volutpat adipiscing ornare mi velit. Semper gravida id neque blandit. In malesuada curabitur curabitur consectetur habitasse dui. Venenatis dictumst sodales tincidunt ornare nunc sed."
                },
                {
                    id: 2,
                    title: "Team Contact You",
                    content: "Lorem ipsum dolor sit amet consectetur. Porta volutpat adipiscing ornare mi velit. Semper gravida id neque blandit. In malesuada curabitur curabitur consectetur habitasse dui. Venenatis dictumst sodales tincidunt ornare nunc sed."
                },
                {
                    id: 3,
                    title: "Attach Return Label",
                    content: "Lorem ipsum dolor sit amet consectetur. Porta volutpat adipiscing ornare mi velit. Semper gravida id neque blandit. In malesuada curabitur curabitur consectetur habitasse dui. Venenatis dictumst sodales tincidunt ornare nunc sed."
                },
            ]
        },
        {
            id: 1,
            title: "Shipping",
            items: [
                {
                    id: 1,
                    title: "",
                    content: "Lorem ipsum dolor sit amet consectetur. Porta volutpat adipiscing ornare mi velit. Semper gravida id neque blandit. In malesuada curabitur curabitur consectetur habitasse dui. Venenatis dictumst sodales tincidunt ornare nunc sed."
                },
                {
                    id: 2,
                    title: "",
                    content: "Lorem ipsum dolor sit amet consectetur. Dui ultrices nec lorem posuere lectus elit sit dui amet. Tellus tempor facilisi nibh purus quis elit blandit elementum. Elit vulputate arcu vitae vitae est urna amet ullamcorper id. Mattis dignissim at auctor vitae nulla ac sodales morbi. Purus dui nunc dui vestibulum id. Ut etiam pretium sed eu nunc suspendisse pellentesque massa maecenas.Sagittis arcu purus sollicitudin senectus accumsan porttitor mollis sodales.Massa ultrices sed elit viverra vitae placerat feugiat libero.Ac quis adipiscing tincidunt malesuada.Nullam eu velit amet adipiscing aliquet.Elementum sed ut ut mauris nascetur.In non ut pulvinar eget diam cursus.Eu dui consectetur amet dapibus pellentesque praesent.Amet eu fringilla vitae."
                },
            ]
        }
    ]

    return (
        <div className='product__shipping-returns'>
            {items.map(item => {
                return (
                    <div>
                        <p className='text-16 mb-1 font-bold'>{item.title}</p>

                        <ol className='text-14-8d'>
                            {item.items.map(i => {
                                return (
                                    <li key={i.id} className='mb-1'>
                                        <p>{i.title}</p>
                                        <p>{i.content}</p>
                                    </li>
                                )
                            })}
                        </ol>
                    </div>
                )
            })}
        </div>
    )
}

export default ProductShippingAndReturns