import React from 'react'
import copy from "../../assets/icon/copy.svg"
import "./styles.scss"

const Copy = () => {
    return (
        <div className='copy'>
            <img src={copy} alt="Copy icon" />
            <p>Copy</p>
        </div>
    )
}

export default Copy