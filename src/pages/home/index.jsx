import React from 'react'
import "./styles.scss"
import Banner from '../../components/banner'
import Carousel from '../../components/carousel'
import ShoeCard from '../../components/shoe/Card'
import shoe1 from "../../assets/shoes/best-selling/shoe-1.png"
import shoe2 from "../../assets/shoes/best-selling/shoe-2.png"
import shoe3 from "../../assets/shoes/best-selling/shoe-3.png"
import shoe4 from "../../assets/shoes/best-selling/shoe-4.png"
import category1 from "../../assets/categories/nike.png"
import category2 from "../../assets/categories/adidas.png"
import category3 from "../../assets/categories/converse.png"
import category4 from "../../assets/categories/puma.png"
import category5 from "../../assets/categories/reebook.png"
import category6 from "../../assets/categories/asics.png"
import CategoryItem from '../../components/category/Item'
import discount from "../../assets/discount.png"
import gallery1 from "../../assets/gallery/gallery-1.png"
import gallery2 from "../../assets/gallery/gallery-2.png"
import news1 from "../../assets/news/news-1.png"
import news2 from "../../assets/news/news-2.png"
import news3 from "../../assets/news/news-3.png"
import NewsItem from '../../components/news/Item'
import service1 from "../../assets/services/service-1.png"
import service2 from "../../assets/services/service-2.png"
import service3 from "../../assets/services/service-3.png"
import service4 from "../../assets/services/service-4.png"

export const shoes = [
    { id: 1, shoeName: "Nike Zoom Kd Iii", price: 120, isNew: true, isFavorite: false, isSoldOut: false, img: shoe1 },
    { id: 2, shoeName: "Converse X Rick Owens", price: 220, isNew: false, isFavorite: true, isSoldOut: false, img: shoe2 },
    { id: 3, shoeName: "Converse Chuck 70 Fall Tone", price: 320, isNew: false, isFavorite: false, isSoldOut: true, img: shoe3 },
    { id: 4, shoeName: "Puma X Nanamica Clyde Gtx", price: 420, isNew: true, isFavorite: false, isSoldOut: false, img: shoe4 },
];

const HomePage = () => {
    const categories = [
        { id: 1, categoryName: "Nike", shoeCount: 1280, img: category1 },
        { id: 2, categoryName: "Adidas", shoeCount: 1280, img: category2 },
        { id: 3, categoryName: "Converse", shoeCount: 1280, img: category3 },
        { id: 4, categoryName: "Puma", shoeCount: 1280, img: category4 },
        { id: 5, categoryName: "Reebook", shoeCount: 1280, img: category5 },
        { id: 6, categoryName: "ASICS", shoeCount: 1280, img: category6 },
    ];
    const news = [
        { id: 1, date: new Date(), title: "Where to hunt number 23: Noah x PUMA Pro Star 'White and Green'", img: news1 },
        { id: 2, date: new Date(), title: "Information leaked about the GmbH x ASICS Gel-Kayano Legacy 'Cilantro' & 'White Black' collection", img: news2 },
        { id: 3, date: new Date(), title: "25% off on Friends & Family Sale at PUMA", img: news3 },
    ];
    const services = [
        { id: 1, img: service1, title: "Best Quality Guarantee", content: "Product that arrived at your door already passed our Quality Control procedure." },
        { id: 2, img: service2, title: "Easy Payment Choice", content: "Various payment choice will give an ease every time you purchase our product" },
        { id: 3, img: service3, title: "On-Time Delivery", content: "We will make sure that all product that you purchased will arrived at your address" },
        { id: 4, img: service4, title: "Free Return", content: "100% refund when there is a product quality problem" },
    ];

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
                                    <img src={service.img} alt="Service" />

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