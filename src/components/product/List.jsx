import React from 'react'
import ShoeCard from '../shoe/Card'
import { shoes } from '../../data/data'

const ListProduct = ({ listCol = 3 }) => {

    const getListCol = () => {
        return `grid-cols-${listCol}`
    }

    return (
        <div className={`grid gap-5 ${getListCol()}`}>
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