import React from 'react'
import banner from "../../assets/banner/BannerImage.png"
import "./styles.scss"
import { Button } from 'antd'
import arrowRight from "../../assets/icon/ArrowRight.png"
import { useNavigate } from 'react-router-dom'

const Banner = () => {
    const navigate = useNavigate();

    return (
        <div className='banner'>
            <img src={banner} alt="Banner" />

            <div className="banner-text">
                <h1>
                    <p>Sneakers - </p>
                    <p>Flash Sale</p>
                </h1>
                <p>Be different with the Nike shoe collection</p>

                <div className="h-4"></div>

                <Button
                    type='primary'
                    size='large'
                    style={{ width: 295 }}
                    className='flex items-center'
                    onClick={() => navigate("/products")}
                >
                    Explore now
                    <img src={arrowRight} alt="Arrow right" style={{ width: 16 }} />
                </Button>
            </div>
        </div>
    )
}

export default Banner