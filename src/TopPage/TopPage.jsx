import React from 'react'
import bigImg from './big-img.png'
import bigImg2x from './big-img@2x.png'
import './TopPage.css'

const TopPage = () => {
    return (
        <div className='top-page'>
            <div className="topscreen">
                <div className="logo">
                    <h1 className='logo-text'>PRADA</h1>
                </div>
                <div className="navbar-area">
                    <div className="navbar">
                        <span><a href="#">Women</a></span>
                        <span><a href="#">Men</a></span>
                        <span><a href="#">Children</a></span>
                        <span><a href="#">Sale</a></span>
                        <span><a href="#">New in</a></span>
                        <span><a href="#">Home collection</a></span>
                    </div>
                </div>
                <div className="bigImg">
                    <img src={bigImg} title='Sexy woman with boho accsessorises posing in pool' alt='sexy-woman-with-boho-accsessorises-posing-in-pool' />
                </div>
            </div>
            <div className="summer">
                <h2 className='summer-title'>SUMMER 2021</h2>
                <p className='summer-description'>Explore sports-inspired ready-to-wear and bold accessories from the latest collection.</p>
                <a href="#" className="summer-link">NEW IN FOR HER</a>
            </div>
        </div>
    )
}

export default TopPage