import React from 'react'
import Product from '../Components/Product/Product'
import ProdImg1 from './product-1.png'
import ProdImg2 from './product-2.png'
import ProdImg3 from './product-3.png'
import LightLayersImg from './light-layers.png'
import ProdImg4 from './product-4.png'
import ProdImg5 from './product-5.png'
import ProdImg6 from './product-6.png'
import LaPradinaImg from './la-pradina.png'
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
            <div className="for-him">
                <div className="for-him-title">NEW ARRIVALS FOR HIM</div>
                <div className="for-him-products">
                    <Product img={ProdImg4} colors='2' title='Cotton pique T-shirt' href='#' />
                    <Product img={ProdImg5} colors='1' title='Cotton tobe' href='#' />
                    <Product img={ProdImg6} colors='2' title='Double Match poplin shirt' href='#' />
                </div>
            </div>
            <div className="la-pradina">
                <div className="la-pradina-info">
                    <div className="la-pradina-title">LA PRADINA</div>
                    <div className="la-pradina-btn">
                        <a href="#">EVERYTHING FOR HER</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main