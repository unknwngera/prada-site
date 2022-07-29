import React from 'react'
import heart from './heart.png'
import bag from './bag.png'
const Header = () => {
    return (
        <div>
            <div>
                <a href="#">SHOP THE SALE COLLECTION</a>
            </div>
            <div>
                <a href="#">Sign in </a>/<a href="#"> Register</a>
            </div>
            <div>
                <a href="#"><img src={heart} alt="heart" /></a>
            </div>
            <div>
                <a href="#"><img src={bag} alt="bag" /></a>
            </div>
            <div>
                <a href="#">Bag</a>
            </div>
        </div>
    )
}

export default Header