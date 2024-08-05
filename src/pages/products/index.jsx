import React, { useEffect } from 'react'
import "./styles.scss"
import searchProducts from "../../assets/icon/search-products.png"
import FilterPrices from '../../components/filters/Prices';
import FilterSizes from '../../components/filters/Sizes';
import FilterBrands from '../../components/filters/Brands';
import ListProduct from '../../components/product/List';

const ProductsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className='container products'>
            <div className="content products__search">
                <h1 className='text-48 font-semi text-center mb-7'>Find your perfect shoes</h1>
                <div className='products__search-input'>
                    <input type="text" placeholder='Search your product here' />
                    <img src={searchProducts} alt="Search products" />
                </div>
            </div>

            <div className="content grid grid-cols-4 gap-1">
                <div className="col-span-1">
                    <FilterPrices />
                    <FilterBrands />
                    <FilterSizes />
                </div>

                <div className="col-span-3">
                    <ListProduct />
                </div>
            </div>
        </section>
    )
}

export default ProductsPage