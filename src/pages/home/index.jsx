import React from 'react'
import "./styles.scss"
import Banner from '../../components/banner'
import Carousel from '../../components/carousel'
import ShoeCard from '../../components/shoe/Card'
import shoe1 from "../../assets/shoes/best-selling/shoe-1.png"
import shoe2 from "../../assets/shoes/best-selling/shoe-2.png"
import shoe3 from "../../assets/shoes/best-selling/shoe-3.png"
import shoe4 from "../../assets/shoes/best-selling/shoe-4.png"

const HomePage = () => {
    const shoes = [
        { id: 1, shoeName: "Nike Zoom Kd Iii", price: 120, isNew: true, isFavorite: false, isSoldOut: false, img: shoe1 },
        { id: 2, shoeName: "Converse X Rick Owens", price: 220, isNew: false, isFavorite: true, isSoldOut: false, img: shoe2 },
        { id: 3, shoeName: "Converse Chuck 70 Fall Tone", price: 320, isNew: false, isFavorite: false, isSoldOut: true, img: shoe3 },
        { id: 4, shoeName: "Puma X Nanamica Clyde Gtx", price: 420, isNew: true, isFavorite: false, isSoldOut: false, img: shoe4 },
    ]

    return (
        <section className='home'>
            <Banner />

            <div className="home__carousel">
                <Carousel slideTitle={"Best Selling"}>
                    {shoes.map(shoe => {
                        return (
                            <ShoeCard shoe={shoe} />
                        )
                    })}
                </Carousel>
            </div>

            <div className="h-2"></div>

            <div>
                <h2 className='text-24'>Categories</h2>
            </div>
        </section>
    )
}

export default HomePage