import React from 'react'
import searchIcon from "../../../assets/icon/search-normal.png";

const Search = () => {
    return (
        <div className='header__search flex items-center gap-1'>
            <img src={searchIcon} alt="Search icon" />
            <input type="text" className='outline-none bg-transparent border-none' placeholder='Search product' />
        </div>
    )
}

export default Search