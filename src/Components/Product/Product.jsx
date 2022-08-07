import React from 'react'
import styles from './Product.module.css'
const Product = (props) => {
    return (
        <div>
            <div className={styles.img}>
                <a href={props.href}><img src={props.img} alt="" /></a>
            </div>
            <div className={styles.colors}>
                {props.colors} COLORS
            </div>
            <div className={styles.title}>
                <a href={props.href}>{props.title}</a>
            </div>
        </div>
    )
}

export default Product