import styles from '../../../styles/card.module.css';
import Link from 'next/link';
import {useState} from 'react'
import {BiHeart, BiCart,BiBookContent} from 'react-icons/bi';



const Card = ({main_images}) => {
    
    return (
        <div className={styles.mainCard}>
            <div className={styles.image}>
                <img id ={styles.main_image} src={main_images} alt=""/>
                <div className={styles.circle}>
                    <Link href="single_Product">{<span><BiBookContent id={styles.logo2}/></span>}</Link>
                </div>
                <div className={styles.circle}>
                <Link href="/shopping">{<span><BiHeart id={styles.logo2} /></span>}</Link>
                </div>
                <div className={styles.circle}>
                <Link href="/product_page">{<span><BiCart id={styles.logo2} /></span>}</Link>
                </div>
                
            </div>
            {/* <div id={styles.title}>واکسن نیوکاسل دوگانه </div>
            <div id={styles.price}>۵۰۰۰۰۰۰۰ تومان</div> */}
        </div>
    )
}

export default Card
