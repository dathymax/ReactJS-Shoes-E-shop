import React from 'react'
import starFilled from "../../assets/icon/star-filled.svg"
import starNotFilled from "../../assets/icon/star-no-filled.svg"
import starFilledBlack from "../../assets/icon/star-black.svg"
import starNotFilledBlack from "../../assets/icon/star-no-filled-gray.svg"
import { useAppContext } from '../../contexts/app'

const Rating = ({ rated = 0, readOnly = false }) => {
    const { productRate, setProductRate } = useAppContext();

    return (
        <div className='product__stars' style={{ justifyContent: readOnly ? "start" : "center" }}>
            {!readOnly ? <>
                {Array.from({ length: productRate }).map((star, index) => {
                    return (
                        <img
                            key={`filled-${star}-${index}`}
                            src={starFilled}
                            alt="Star filled"
                            onClick={() => setProductRate(index + 1)}
                            className='cursor-pointer'
                        />
                    )
                })}

                {Array.from({ length: 5 - productRate }).map((star, index) => {
                    return (
                        <img
                            key={`not-filled-${star}-${index}`}
                            src={starNotFilled}
                            alt="Star not filled"
                            onClick={() => setProductRate(prev => prev + index + 1)}
                            className='cursor-pointer'
                        />
                    )
                })}
            </> : <>
                {Array.from({ length: rated }).map((rate, index) => {
                    return (
                        <img
                            key={`not-filled-${rate}-${index}`}
                            src={starFilledBlack}
                            alt="Star filled"
                        />
                    )
                })}

                {Array.from({ length: 5 - rated }).map((rate, index) => {
                    return (
                        <img
                            key={`not-filled-${rate}-${index}`}
                            src={starNotFilledBlack}
                            alt="Star not filled"
                        />
                    )
                })}
            </>}
        </div>
    )
}

export default Rating   