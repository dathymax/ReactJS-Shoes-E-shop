import React from 'react'
import { shoes } from '../../pages/home'
import ShoeCard from '../shoe/Card'

const ListProduct = () => {
    return (
        <div className='grid grid-cols-3 gap-5'>
            {
                shoes.map(shoe => {
                    return (
                        <div key={shoe.id} className="col-span-1 mb-1">
                            <ShoeCard shoe={shoe} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ListProduct