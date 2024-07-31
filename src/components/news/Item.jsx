import React from 'react'
import "./styles.scss"
import { FaArrowRight } from "react-icons/fa6";

const NewsItem = ({ news = {} }) => {
    const newsDate = `${news.date.getDate()}.${news.date.getMonth() + 1 >= 10 ? news.date.getMonth() + 1 : `0${news.date.getMonth() + 1}`}.${news.date.getFullYear()}`;
    const newsTime = `${news.date.getHours()}:${news.date.getMinutes() >= 10 ? news.date.getMinutes() : `0${news.date.getMinutes()}`}`;

    return (
        <div>
            <img src={news.img} alt="News image" />
            <p className="text-date">
                {newsDate} | {newsTime}
            </p>
            <p className='text-20-bold'>{news.title}</p>
            <p className='text-description'>See more <FaArrowRight /></p>
        </div>
    )
}

export default NewsItem