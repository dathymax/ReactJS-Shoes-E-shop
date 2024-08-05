import { Checkbox } from 'antd'
import React from 'react'

const FilterPrices = () => {
    return (
        <div>
            <p className='text-24 mb-2'>Price</p>
            <Checkbox>Below 500.000</Checkbox>
        </div>
    )
}

export default FilterPrices