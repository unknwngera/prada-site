import React, { useState } from 'react'
import bag from './bag.png'
import './Header.css'

const Bag = () => {


    return (
        <div className='bag'>
            <a href="#"><img id='bag-img' src={bag} alt="bag" />Bag</a>
        </div>
    )
}

export default Bag