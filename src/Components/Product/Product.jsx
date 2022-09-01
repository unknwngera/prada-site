import React from 'react'
import styles from './Product.module.css'
import bag from './bag.png'
import { useState } from 'react'

const Product = (props) => {
    const [cart, setCart] = useState({ button: 'ADD', state: 'outOfCart' })

    function changeCart(e) {
        e.preventDefault();

        if (cart.state == 'outOfCart') {
            setCart({ button: 'ADDED', state: 'inCart' });
        }
        else {
            setCart({ button: 'ADD', state: 'outOfCart' });
        }
    }



    return (
        <div>
            <div className={styles.img}>
                <a href={props.href}><img src={props.img} alt="" /></a>
            </div>
            <div className={styles.discription}>
                <div className={styles.left}>
                    <div className={styles.colors}>
                        {props.colors} COLORS
                    </div>
                    <div className={styles.title}>
                        <a href={props.href}>{props.title}</a>
                    </div>
                </div>
                <div className={styles.toCart}>
                    <a onClick={changeCart} href="#"><img src={bag} alt="" />{cart.button}</a>
                </div>
            </div>
        </div>
    )
}

export default Product