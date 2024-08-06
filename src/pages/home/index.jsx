import React from 'react'
import "./styles.scss"
import Banner from '../../components/banner'
import Carousel from '../../components/carousel'
import ShoeCard from '../../components/shoe/Card'
import CategoryItem from '../../components/category/Item'
import discount from "../../assets/discount.png"
import gallery1 from "../../assets/gallery/gallery-1.svg"
import gallery2 from "../../assets/gallery/gallery-2.svg"
import NewsItem from '../../components/news/Item'
import { shoes, categories, news, services } from "../../data/data"

const HomePage = () => {
    return (
        <section className='home'>
            <Banner />

            <div className="container">
                <section className="content">
                    <Carousel slideTitle={"Best Selling"}>
                        {shoes.map(shoe => {
                            return (
                                <ShoeCard inSlide key={shoe.id} shoe={shoe} />
                            )
                        })}
                    </Carousel>
                </section>

                <section className="content">
                    <h2 className='text-24'>Categories</h2>

                    <div className="home__categories">
                        {categories.map(category => {
                            return (
                                <CategoryItem key={category.id} category={category} />
                            )
                        })}
                    </div>
                </section>

                <section className="content">
                    <img src={discount} alt="Discount banner" />
                </section>

                <section className="content">
                    <Carousel slideTitle={"New Arrived"}>
                        {shoes.map(shoe => {
                            return (
                                <ShoeCard inSlide key={shoe.id} shoe={shoe} />
                            )
                        })}
                    </Carousel>
                </section>

                <section className="content">
                    <Carousel slideTitle={"Flash Sale"}>
                        {shoes.map(shoe => {
                            return (
                                <ShoeCard inSlide key={shoe.id} shoe={shoe} />
                            )
                        })}
                    </Carousel>
                </section>

                <section className="content">
                    <h2 className='text-24'>Gallery</h2>

                    <div className="home__gallery flex items-center gap-4">
                        <img src={gallery1} alt="Gallery 1" />
                        <img src={gallery2} alt="Gallery 2" />
                    </div>
                </section>

                <section className="content">
                    <h2 className='text-24'>News</h2>

                    <div className="home__news">
                        {news.map(newsItem => {
                            return (
                                <NewsItem key={newsItem.id} news={newsItem} />
                            )
                        })}
                    </div>
                </section>

                <section className="content">
                    <div className="home__services">
                        {services.map(service => {
                            return (
                                <div key={service.id} className="home__service">
                                    <div className="img__wrapper">
                                        <img src={service.img} alt="Service" />
                                    </div>

                                    <p>{service.title}</p>
                                    <span>{service.content}</span>
                                </div>
                            )
                        })}
                    </div>
                </section>
            </div>
        </section>
    )
}

export default HomePage