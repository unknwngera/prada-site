import React from 'react'
import heart from './heart.png'
import Bag from './Bag'
const Header = () => {
    return (
        <div className='header'>
            <div className='shop-sale-btn'>
                <a href="#">SHOP THE SALE COLLECTION</a>
            </div>
            <div className='login'>
                <a href="#">Sign in </a>/<a href="#"> Register</a>
            </div>
            <div className='fav'>
                <a href="#"><img src={heart} alt="heart" /></a>
            </div>
            <Bag />
        </div>
    )
}

export default Header