import React from 'react'
import Product from '../Components/Product/Product'
import ProdImg1 from './product-1.png'
import ProdImg2 from './product-2.png'
import ProdImg3 from './product-3.png'
import LightLayersImg from './light-layers.png'
import './Main.css'
const Main = () => {
    return (
        <div>
            <div className="for-her">
                <div className="for-her-title">NEW ARRIVALS</div>
                <div className="for-her-products">
                    <Product img={ProdImg1} colors='4' title='Terry tote bag' href='#' />
                    <Product img={ProdImg2} colors='8' title='Re-Nylon bucket hat' href='#' />
                    <Product img={ProdImg3} colors='1' title='Prada Symbole sunglasses' href='#' />
                </div>
            </div>
            <div className="light-layers">
                <div className="light-layers-info">
                    <div className="light-layers-title">LIGHT LAYERS</div>
                    <div className="light-layers-body">The Pre-Fall 2021 womenswear collections lightweight jackets in relaxed fits.</div>
                    <div className="light-layers-btn"><a href="#">SHOP NOW</a></div>
                </div>
                <div className="light-layers-img">
                    <img src={LightLayersImg} alt="Beautiful-girl-on-a-green-background" title="Beautiful girl on a green background" />
                </div>
            </div>
        </div>
    )
}

export default Main