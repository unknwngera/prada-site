import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import bag from './bag.png'
import './Header.css'

const Bag = () => {
    const count = useSelector((state) => state.toolkit.value)

    return (
        <div className='bag'>
            <a href="#"><img id='bag-img' src={bag} alt="bag" />Bag {count}</a>
        </div>
    )
}

export default Bag